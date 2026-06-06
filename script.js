/* global crypto */

const CONFIG = {
  // Pega aqui la URL /exec de tu Web App de Google Apps Script.
  scriptUrl: "https://script.google.com/macros/s/AKfycbyIPfarKlXzz7PRflxnObjXTModiqqL_kGjjZLz5bgUlOnoHq2TDowtPyGsQAtBzZ7c/exec",
  // Permitimos las respuestas de Google Apps Script y Googleusercontent.
  allowedOrigins: ["https://script.google.com", "https://script.googleusercontent.com"],
  requestTimeoutMs: 90000
};

const state = {
  files: [],
  submissionToken: null,
  completedFiles: 0,
  inFlight: false,
  waitingResolver: null,
  waitingRejecter: null,
  timeoutHandle: null
};

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  wireEvents();
  renderFileList();
  updateProgress(0, "Esperando archivos.");
});

// Cachea todos los elementos que usa el flujo de subida.
function cacheElements() {
  elements.form = document.getElementById("uploadForm");
  elements.clientName = document.getElementById("clientName");
  elements.contact = document.getElementById("contact");
  elements.projectDescription = document.getElementById("projectDescription");
  elements.fileInput = document.getElementById("files");
  elements.dropzone = document.getElementById("dropzone");
  elements.fileSummary = document.getElementById("fileSummary");
  elements.progressFill = document.getElementById("progressFill");
  elements.progressText = document.getElementById("progressText");
  elements.subStatus = document.getElementById("subStatus");
  elements.messageStack = document.getElementById("messageStack");
  elements.submitBtn = document.getElementById("submitBtn");
  elements.clearBtn = document.getElementById("clearBtn");
  elements.uploadList = document.getElementById("uploadList");
  elements.fileTemplate = document.getElementById("fileItemTemplate");
}

// Eventos principales del formulario, drag and drop y respuesta del iframe.
function wireEvents() {
  elements.form.addEventListener("submit", handleSubmit);
  elements.clearBtn.addEventListener("click", clearForm);
  elements.fileInput.addEventListener("change", handleFileSelection);
  elements.dropzone.addEventListener("dragover", handleDragOver);
  elements.dropzone.addEventListener("dragleave", handleDragLeave);
  elements.dropzone.addEventListener("drop", handleDrop);
  elements.dropzone.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      elements.fileInput.click();
    }
  });
  window.addEventListener("message", handleIframeMessage);
}

function isConfigured() {
  return Boolean(CONFIG.scriptUrl && !CONFIG.scriptUrl.includes("PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"));
}

function handleDragOver(event) {
  event.preventDefault();
  elements.dropzone.classList.add("dragover");
}

function handleDragLeave() {
  elements.dropzone.classList.remove("dragover");
}

function handleDrop(event) {
  event.preventDefault();
  elements.dropzone.classList.remove("dragover");

  if (event.dataTransfer?.files?.length) {
    elements.fileInput.files = event.dataTransfer.files;
    handleFileSelection();
  }
}

function handleFileSelection() {
  state.files = Array.from(elements.fileInput.files || []);
  renderFileList();
  updateFileSummary();
}

function updateFileSummary() {
  if (!state.files.length) {
    elements.fileSummary.textContent = "Aún no seleccionaste archivos.";
    return;
  }

  const totalBytes = state.files.reduce((sum, file) => sum + file.size, 0);
  elements.fileSummary.textContent = `${state.files.length} archivo(s) seleccionado(s), ${formatBytes(totalBytes)} en total.`;
}

function renderFileList(fileStates = null) {
  elements.uploadList.innerHTML = "";

  if (!state.files.length) {
    elements.uploadList.innerHTML = '<div class="upload-item"><div class="upload-item-state">Aún no seleccionaste archivos.</div></div>';
    return;
  }

  state.files.forEach((file, index) => {
    const node = elements.fileTemplate.content.firstElementChild.cloneNode(true);
    const itemName = node.querySelector(".upload-item-name");
    const itemState = node.querySelector(".upload-item-state");
    const itemMeta = node.querySelector(".upload-item-meta");
    const miniFill = node.querySelector(".mini-fill");

    itemName.textContent = file.name;
    itemMeta.textContent = `${formatBytes(file.size)} | ${file.type || "tipo desconocido"}`;

    const fileState = fileStates?.[index];
    const progress = fileState?.progress ?? 0;
    miniFill.style.width = `${progress}%`;
    itemState.textContent = fileState?.label || "En cola";

    elements.uploadList.appendChild(node);
  });
}

function setFileState(index, label, progress) {
  const fileStates = state.files.map((file, fileIndex) => ({
    label: fileIndex === index ? label : fileIndex < state.completedFiles ? "Subido" : "En cola",
    progress: fileIndex === index ? progress : fileIndex < state.completedFiles ? 100 : 0
  }));

  renderFileList(fileStates);
}

function updateProgress(percent, text) {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  elements.progressFill.style.width = `${clamped}%`;
  elements.progressText.textContent = `${clamped}%`;
  elements.subStatus.textContent = text;
}

function pushMessage(text, type = "info") {
  const node = document.createElement("div");
  node.className = `alert ${type}`;
  node.textContent = text;
  elements.messageStack.prepend(node);
}

function clearMessages() {
  elements.messageStack.innerHTML = "";
}

function clearForm() {
  if (state.inFlight) {
    return;
  }

  elements.form.reset();
  state.files = [];
  state.completedFiles = 0;
  renderFileList();
  updateFileSummary();
  updateProgress(0, "Esperando archivos.");
  clearMessages();
}

async function handleSubmit(event) {
  event.preventDefault();

  if (!isConfigured()) {
    pushMessage("Agrega la URL de tu Web App de Apps Script en `script.js` primero.", "error");
    return;
  }

  if (state.inFlight) {
    return;
  }

  const clientName = elements.clientName.value.trim();
  const contact = elements.contact.value.trim();
  const projectDescription = elements.projectDescription.value.trim();
  const files = Array.from(elements.fileInput.files || []);

  if (!clientName || !contact || !projectDescription || !files.length) {
    pushMessage("Completa todos los campos y elige al menos un archivo.", "error");
    return;
  }

  state.inFlight = true;
  state.completedFiles = 0;
  state.submissionToken = createToken();
  clearMessages();
  toggleFormDisabled(true);
  updateProgress(3, "Preparando cola de subida...");
  pushMessage("Preparando archivos. La subida comenzará enseguida.", "info");

  try {
    const encodedFiles = [];

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      setFileState(index, "Leyendo archivo", 8);

      const encoded = await readFileAsDataUrl(file, progress => {
        const readingPercent = 5 + progress * 0.45;
        updateProgress(readingPercent, `Leyendo ${file.name}...`);
        setFileState(index, "Leyendo archivo", Math.max(8, Math.round(progress)));
      });

      encodedFiles.push({
        file,
        data: encoded.split(",")[1]
      });
    }

    updateProgress(30, "Archivos listos. Enviando a Google Drive...");

    for (let index = 0; index < encodedFiles.length; index += 1) {
      const payload = encodedFiles[index];
      setFileState(index, "Subiendo", 35);

      await postSingleFile({
        token: state.submissionToken,
        clientName,
        contact,
        projectDescription,
        fileName: payload.file.name,
        mimeType: payload.file.type || "application/octet-stream",
        fileData: payload.data,
        fileIndex: index + 1,
        fileTotal: encodedFiles.length
      });

      state.completedFiles += 1;
      setFileState(index, "Subido", 100);
      const progress = 30 + (state.completedFiles / encodedFiles.length) * 68;
      updateProgress(progress, `Subido ${state.completedFiles} de ${encodedFiles.length} archivo(s).`);
    }

    updateProgress(100, "Todos los archivos se subieron con éxito.");
    pushMessage("Éxito. Todos los archivos se guardaron en Google Drive.", "success");
    elements.subStatus.textContent = "Subida completa. Tus archivos ya están en la carpeta de Drive.";
  } catch (error) {
    console.error(error);
    pushMessage(error.message || "La subida falló. Intenta de nuevo.", "error");
    updateProgress(0, "Subida detenida.");
    elements.subStatus.textContent = "Algo salió mal durante la subida.";
  } finally {
    state.inFlight = false;
    toggleFormDisabled(false);
    cleanupTransport();
  }
}

function toggleFormDisabled(disabled) {
  elements.submitBtn.disabled = disabled;
  elements.clearBtn.disabled = disabled;
  elements.clientName.disabled = disabled;
  elements.contact.disabled = disabled;
  elements.projectDescription.disabled = disabled;
  elements.fileInput.disabled = disabled;
  elements.dropzone.style.opacity = disabled ? "0.7" : "1";
}

function createToken() {
  if (crypto?.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readFileAsDataUrl(file, onProgress) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`No se pudo leer ${file.name}.`));
    reader.onprogress = event => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        onProgress?.(percent);
      }
    };

    reader.readAsDataURL(file);
  });
}

// Crea el iframe y el formulario ocultos que usamos para enviar el POST.
function ensureTransport() {
  let iframe = document.getElementById("uploadTransport");
  let form = document.getElementById("uploadTransportForm");

  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = "uploadTransport";
    iframe.name = "uploadTransport";
    iframe.className = "hidden-frame";
    document.body.appendChild(iframe);
  }

  if (!form) {
    form = document.createElement("form");
    form.id = "uploadTransportForm";
    form.method = "POST";
    form.target = "uploadTransport";
    form.className = "hidden-frame";
    form.style.display = "none";
    document.body.appendChild(form);
  }

  return { iframe, form };
}

function cleanupTransport() {
  const form = document.getElementById("uploadTransportForm");
  if (form) {
    form.innerHTML = "";
  }
}

function postSingleFile(payload) {
  return new Promise((resolve, reject) => {
    const { form } = ensureTransport();
    cleanupTransport();

    state.waitingResolver = resolve;
    state.waitingRejecter = reject;

    if (state.timeoutHandle) {
      clearTimeout(state.timeoutHandle);
    }

    state.timeoutHandle = window.setTimeout(() => {
      state.waitingResolver = null;
      state.waitingRejecter = null;
      reject(new Error("La subida excedió el tiempo de espera. Revisa tu despliegue de Apps Script y vuelve a intentar."));
    }, CONFIG.requestTimeoutMs);

    form.action = CONFIG.scriptUrl;
    form.innerHTML = "";

    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });

    form.submit();
  });
}

function handleIframeMessage(event) {
  if (!CONFIG.allowedOrigins.includes(event.origin)) {
    return;
  }

  const data = event.data;
  if (!data || data.type !== "commission-upload-result") {
    return;
  }

  if (data.token !== state.submissionToken) {
    return;
  }

  if (state.timeoutHandle) {
    clearTimeout(state.timeoutHandle);
    state.timeoutHandle = null;
  }

  const resolver = state.waitingResolver;
  const rejecter = state.waitingRejecter;
  state.waitingResolver = null;
  state.waitingRejecter = null;

  if (data.ok) {
    resolver?.(data);
  } else {
    rejecter?.(new Error(data.error || "El servidor devolvió un error desconocido."));
  }
}

function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** index;
  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
}
