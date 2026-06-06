const CONFIG = {
  // Replace this with the folder ID where uploads should be stored.
  // Example: https://drive.google.com/drive/folders/1AbCDefGhIjKlMnOpQrStUvWxYz123456
  folderId: "1xThte9hxPB-CFCUxI36ijHKfQ8G6vDOu",
  // Paste your Discord webhook URL here if you want upload notifications.
  discordWebhookUrl: "https://discord.com/api/webhooks/1512605681558093824/MPybO-NjQ0dN_8KXPM61BrElqF1NTgCDASGM2QdExTYypmbXlMtyOqwL4WqDufumK83_"
};

function doGet() {
  return HtmlService
    .createHtmlOutput(
      [
        "<!doctype html><html><head><meta charset='utf-8'>",
        "<meta name='viewport' content='width=device-width, initial-scale=1'>",
        "<title>Upload endpoint</title>",
        "<style>body{font-family:system-ui,sans-serif;background:#0b1220;color:#eaf1ff;padding:24px;line-height:1.6}code{background:#15233f;padding:.15rem .35rem;border-radius:6px}</style>",
        "</head><body>",
        "<h1>Commission upload endpoint</h1>",
        "<p>This Google Apps Script web app is ready to receive file uploads.</p>",
        "<p>Use the GitHub Pages frontend and set its <code>scriptUrl</code> to this deployment URL.</p>",
        "</body></html>"
      ].join("")
    )
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    const data = normalizePayload_(e);
    validatePayload_(data);

    const folder = DriveApp.getFolderById(CONFIG.folderId);
    const clientFolder = getOrCreateClientFolder_(folder, data.clientName);
    ensureReadme_(clientFolder, data);
    const decoded = Utilities.base64Decode(data.fileData);
    const blob = Utilities.newBlob(decoded, data.mimeType, sanitizeFileName_(data.fileName));
    const file = clientFolder.createFile(blob);

    file.setDescription(buildDescription_(data));
    notifyDiscord_(data, clientFolder, file);

    return responseBridge_({
      ok: true,
      token: data.token,
      fileId: file.getId(),
      fileName: file.getName(),
      folderId: clientFolder.getId(),
      folderName: clientFolder.getName()
    });
  } catch (error) {
    return responseBridge_({
      ok: false,
      error: error.message || String(error),
      token: safeToken_(e)
    });
  }
}

function normalizePayload_(e) {
  if (!e || !e.parameter) {
    throw new Error("Missing request payload.");
  }

  return {
    token: String(e.parameter.token || "").trim(),
    clientName: String(e.parameter.clientName || "").trim(),
    contact: String(e.parameter.contact || "").trim(),
    projectDescription: String(e.parameter.projectDescription || "").trim(),
    fileName: String(e.parameter.fileName || "").trim(),
    mimeType: String(e.parameter.mimeType || "application/octet-stream").trim(),
    fileData: String(e.parameter.fileData || "").trim(),
    fileIndex: String(e.parameter.fileIndex || "").trim(),
    fileTotal: String(e.parameter.fileTotal || "").trim()
  };
}

function validatePayload_(data) {
  if (CONFIG.folderId === "PASTE_YOUR_DRIVE_FOLDER_ID_HERE") {
    throw new Error("Set your Drive folder ID in Code.gs before deploying.");
  }

  if (!data.token) {
    throw new Error("Missing upload token.");
  }

  if (!data.clientName) {
    throw new Error("Missing client name.");
  }

  if (!data.contact) {
    throw new Error("Missing contact info.");
  }

  if (!data.projectDescription) {
    throw new Error("Missing project description.");
  }

  if (!data.fileName) {
    throw new Error("Missing file name.");
  }

  if (!data.fileData) {
    throw new Error("Missing file data.");
  }
}

function buildDescription_(data) {
  return [
    `Client: ${data.clientName}`,
    `Contact: ${data.contact}`,
    `Project: ${data.projectDescription}`,
    `Upload token: ${data.token}`,
    `File position: ${data.fileIndex || "1"} / ${data.fileTotal || "1"}`
  ].join("\n");
}

// Finds an existing folder for the client or creates one under the root folder.
function getOrCreateClientFolder_(rootFolder, clientName) {
  const folderName = sanitizeFolderName_(clientName);
  const folders = rootFolder.getFoldersByName(folderName);

  if (folders.hasNext()) {
    return folders.next();
  }

  return rootFolder.createFolder(folderName);
}

// Creates or refreshes a README file with the commission details.
function ensureReadme_(clientFolder, data) {
  const readmeContent = [
    `Client: ${data.clientName}`,
    `Contact: ${data.contact}`,
    `Project description: ${data.projectDescription}`,
    `Upload token: ${data.token}`,
    `Created: ${new Date().toISOString()}`
  ].join("\n");

  const existingReadme = findFileByName_(clientFolder, "README.md");

  if (existingReadme) {
    existingReadme.setContent(readmeContent);
    return existingReadme;
  }

  return clientFolder.createFile("README.md", readmeContent, MimeType.PLAIN_TEXT);
}

// Looks for a file by name inside a Drive folder.
function findFileByName_(folder, fileName) {
  const files = folder.getFilesByName(fileName);
  return files.hasNext() ? files.next() : null;
}

function responseBridge_(payload) {
  const safeJson = JSON.stringify(payload).replace(/</g, "\\u003c");
  const html = [
    "<!doctype html><html><head><meta charset='utf-8'>",
    "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    "<title>Upload status</title>",
    "<style>",
    "body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0a1020;color:#eff4ff;font-family:system-ui,sans-serif;padding:24px;text-align:center}",
    ".card{max-width:520px;padding:20px 22px;border-radius:18px;background:rgba(12,20,34,.95);border:1px solid rgba(148,173,210,.2);box-shadow:0 24px 60px rgba(0,0,0,.35)}",
    "p{margin:.5rem 0 0;color:#a8b8d4;line-height:1.6}",
    "h1{margin:0;font-size:1.15rem}",
    "</style>",
    "</head><body>",
    "<div class='card'><h1>Upload processed</h1><p>You can close this frame now.</p></div>",
    "<script>",
    "(function(){",
    "const payload = " + safeJson + ";",
    "try { window.top.postMessage(Object.assign({type:'commission-upload-result'}, payload), '*'); } catch (error) {}",
    "try { window.parent.postMessage(Object.assign({type:'commission-upload-result'}, payload), '*'); } catch (error) {}",
    "})();",
    "</script>",
    "</body></html>"
  ].join("");

  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function safeToken_(e) {
  try {
    return String(e.parameter.token || "").trim();
  } catch (error) {
    return "";
  }
}

function sanitizeFileName_(name) {
  return String(name)
    .replace(/[\\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180) || "upload";
}

function sanitizeFolderName_(name) {
  return String(name)
    .replace(/[\\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120) || "client";
}

// Sends a Discord webhook ping when a submission arrives.
function notifyDiscord_(data, clientFolder, file) {
  if (!CONFIG.discordWebhookUrl || CONFIG.discordWebhookUrl === "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE") {
    return;
  }

  const payload = {
    username: "Commission Upload",
    avatar_url: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    content: `Nueva entrega recibida para **${data.clientName}**.`,
    embeds: [
      {
        title: "Commission upload",
        color: 0xeea8c8,
        fields: [
          { name: "Cliente", value: safeDiscordField_(data.clientName), inline: true },
          { name: "Contacto", value: safeDiscordField_(data.contact), inline: true },
          { name: "Archivo", value: safeDiscordField_(file.getName()), inline: false },
          { name: "Carpeta", value: safeDiscordField_(clientFolder.getName()), inline: false },
          { name: "Descripción", value: safeDiscordField_(data.projectDescription), inline: false }
        ],
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    UrlFetchApp.fetch(CONFIG.discordWebhookUrl, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
  } catch (error) {
    console.error("Discord notification failed:", error);
  }
}

// Keeps Discord field text within safe limits.
function safeDiscordField_(value) {
  const text = String(value || "").trim();
  return text ? text.slice(0, 1024) : "N/A";
}
