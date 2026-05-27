const STORAGE_KEY = "alphy-portfolio-projects-draft";
const ANNOUNCEMENTS_STORAGE_KEY = "alphy-portfolio-announcements-draft";
const PROJECTS_FILE = "./projects.json";
const ANNOUNCEMENTS_FILE = "./alphy-announcements.json";
const LANGUAGE_KEY = "alphy-portfolio-language";
const EDITOR_PASSWORD = "alphy-admin";

const translations = {
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mi",
    "nav.announcements": "Comunicados",
    "nav.contact": "Contacto",
    "hero.eyebrow": "3D Artist / Modelado y Texturizado",
    "hero.description": "Artista 3D especializado en modelado y texturizado de assets digitales, con enfoque en calidad visual, estilo y optimizacion para tiempo real.",
    "hero.cta": "Ver proyectos",
    "highlight.oneTitle": "Assets con estilo",
    "highlight.oneBody": "Piezas pensadas para verse bien de cerca y funcionar bien en escenas de tiempo real.",
    "highlight.twoTitle": "Texturas cuidadas",
    "highlight.twoBody": "Materiales con identidad visual clara, detalle y equilibrio entre forma y lectura.",
    "highlight.threeTitle": "Flujo flexible",
    "highlight.threeBody": "Portfolio preparado para seguir creciendo con nuevos proyectos y versiones.",
    "projects.eyebrow": "Selected Work",
    "projects.title": "Proyectos",
    "window.presentation": "Presentacion.exe",
    "window.projects": "Proyectos.exe",
    "window.skills": "Highlights.exe",
    "window.announcements": "Comunicados.exe",
    "window.contact": "Contacto.exe",
    "about.eyebrow": "Sobre mi",
    "about.title": "Modelado con sensibilidad visual",
    "about.bodyOne": "Me enfoco en crear assets digitales con personalidad, cuidando la silueta, los materiales y la lectura final de cada pieza. Busco un balance entre estilo, detalle y optimizacion para que cada modelo conserve su impacto visual tambien en tiempo real.",
    "about.bodyTwo": "Mi trabajo mezcla una direccion artistica suave con decisiones tecnicas pensadas para produccion, presentacion y uso interactivo.",
    "presentation.statOneLabel": "Enfoque",
    "presentation.statOneValue": "Modelado estilizado",
    "presentation.statTwoLabel": "Pipeline",
    "presentation.statTwoValue": "Concepto a asset final",
    "presentation.statThreeLabel": "Prioridad",
    "presentation.statThreeValue": "Lectura, materiales y presencia",
    "announcements.eyebrow": "Comunicados",
    "announcements.title": "Estado del estudio",
    "announcements.emptyMeta": "Sin comunicados",
    "announcements.emptyTitle": "Agrega tu primer comunicado",
    "announcements.emptyBody": "Usa el editor para mostrar noticias, actualizaciones o disponibilidad.",
    "announcements.primaryBadge": "Principal",
    "announcements.secondaryBadge": "Secundario",
    "announcements.progressLabel": "Progreso",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos de tu proximo proyecto",
    "contact.note": "Espanol principal, ingles basico para comunicacion simple.",
    "editor.eyebrow": "Project Editor",
    "editor.title": "Editar proyectos",
    "editor.close": "Cerrar",
    "editor.name": "Nombre",
    "editor.description": "Descripcion",
    "editor.tags": "Tags",
    "editor.category": "Categoria",
    "editor.gumroad": "Gumroad",
    "editor.booth": "Booth",
    "editor.cover": "Imagen principal",
    "editor.coverHint": "Acepta URLs, rutas relativas del repo y rutas pegadas desde Windows si el archivo esta dentro de images/.",
    "editor.gallery": "Galeria de imagenes",
    "editor.galleryHint": "Pon una imagen por linea. Usa archivo por archivo; la web no puede leer carpetas completas automaticamente.",
    "editor.accent": "Color de tarjeta",
    "editor.save": "Guardar",
    "editor.new": "Nuevo",
    "editor.export": "Exportar JSON",
    "editor.import": "Importar JSON",
    "editor.reset": "Restaurar ejemplo",
    "editor.announcements": "Editar comunicados",
    "editor.note": "El portfolio publico lee <code>projects.json</code>. Puedes editar aqui, exportar el JSON y luego reemplazar ese archivo en GitHub para publicar los cambios.",
    "annEditor.eyebrow": "Comunicados",
    "annEditor.title": "Editar comunicados",
    "annEditor.type": "Tipo",
    "annEditor.typePrimary": "Principal",
    "annEditor.typeSecondary": "Secundario",
    "annEditor.meta": "Etiqueta",
    "annEditor.headline": "Titulo",
    "annEditor.body": "Texto",
    "annEditor.progress": "Progreso",
    "annEditor.progressLabel": "Etiqueta de progreso",
    "annEditor.progressToggle": "Mostrar barra de progreso",
    "annEditor.image": "Imagen",
    "annEditor.linkOne": "Link 1",
    "annEditor.linkTwo": "Link 2",
    "annEditor.accent": "Color",
    "annEditor.export": "Exportar JSON",
    "annEditor.import": "Importar JSON",
    "annEditor.save": "Guardar comunicado",
    "annEditor.new": "Nuevo comunicado",
    "annEditor.reset": "Restaurar comunicados",
    "annEditor.note": "Estos comunicados se guardan como borrador en tu navegador, igual que el editor de proyectos. Exporta o importa su propio JSON aparte."
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.announcements": "Announcements",
    "nav.contact": "Contact",
    "hero.eyebrow": "3D Artist / Modeling & Texturing",
    "hero.description": "3D artist specialized in modeling and texturing digital assets, with a focus on visual quality, style, and real-time optimization.",
    "hero.cta": "View projects",
    "highlight.oneTitle": "Stylish assets",
    "highlight.oneBody": "Pieces designed to look great up close and perform well in real-time scenes.",
    "highlight.twoTitle": "Careful texturing",
    "highlight.twoBody": "Materials with clear visual identity, detail, and balance between form and readability.",
    "highlight.threeTitle": "Flexible workflow",
    "highlight.threeBody": "A portfolio prepared to keep growing with new projects and versions.",
    "projects.eyebrow": "Selected Work",
    "projects.title": "Projects",
    "window.presentation": "Presentation.exe",
    "window.projects": "Projects.exe",
    "window.skills": "Highlights.exe",
    "window.announcements": "Announcements.exe",
    "window.contact": "Contact.exe",
    "about.eyebrow": "About",
    "about.title": "Modeling with visual sensitivity",
    "about.bodyOne": "I focus on creating digital assets with personality, taking care of silhouette, materials, and the final readability of each piece. I look for a balance between style, detail, and optimization so every model keeps its visual impact in real-time use.",
    "about.bodyTwo": "My work blends a soft art direction with technical decisions made for production, presentation, and interactive use.",
    "presentation.statOneLabel": "Focus",
    "presentation.statOneValue": "Stylized modeling",
    "presentation.statTwoLabel": "Pipeline",
    "presentation.statTwoValue": "Concept to final asset",
    "presentation.statThreeLabel": "Priority",
    "presentation.statThreeValue": "Readability, materials, and presence",
    "announcements.eyebrow": "Announcements",
    "announcements.title": "Studio status",
    "announcements.emptyMeta": "No announcements",
    "announcements.emptyTitle": "Add your first announcement",
    "announcements.emptyBody": "Use the editor to show news, updates, or availability.",
    "announcements.primaryBadge": "Primary",
    "announcements.secondaryBadge": "Secondary",
    "announcements.progressLabel": "Progress",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your next project",
    "contact.note": "Spanish first, basic English for simple communication.",
    "editor.eyebrow": "Project Editor",
    "editor.title": "Edit projects",
    "editor.close": "Close",
    "editor.name": "Name",
    "editor.description": "Description",
    "editor.tags": "Tags",
    "editor.category": "Category",
    "editor.gumroad": "Gumroad",
    "editor.booth": "Booth",
    "editor.cover": "Cover image",
    "editor.coverHint": "Accepts URLs, repo-relative paths, and Windows pasted paths when the file is inside images/.",
    "editor.gallery": "Image gallery",
    "editor.galleryHint": "Use one image per line. The site cannot load an entire folder automatically.",
    "editor.accent": "Card color",
    "editor.save": "Save",
    "editor.new": "New",
    "editor.export": "Export JSON",
    "editor.import": "Import JSON",
    "editor.reset": "Restore sample",
    "editor.announcements": "Edit announcements",
    "editor.note": "The public portfolio reads <code>projects.json</code>. You can edit here, export the JSON, and then replace that file on GitHub to publish your changes.",
    "annEditor.eyebrow": "Announcements",
    "annEditor.title": "Edit announcements",
    "annEditor.type": "Type",
    "annEditor.typePrimary": "Primary",
    "annEditor.typeSecondary": "Secondary",
    "annEditor.meta": "Label",
    "annEditor.headline": "Title",
    "annEditor.body": "Body",
    "annEditor.progress": "Progress",
    "annEditor.progressLabel": "Progress label",
    "annEditor.progressToggle": "Show progress bar",
    "annEditor.image": "Image",
    "annEditor.linkOne": "Link 1",
    "annEditor.linkTwo": "Link 2",
    "annEditor.accent": "Color",
    "annEditor.export": "Export JSON",
    "annEditor.import": "Import JSON",
    "annEditor.save": "Save announcement",
    "annEditor.new": "New announcement",
    "annEditor.reset": "Restore announcements",
    "annEditor.note": "These announcements are saved as a browser draft just like the project editor. Export or import their own separate JSON file."
  }
};

const fallbackProjects = [];
const fallbackAnnouncements = [
  {
    id: "announcement-1",
    type: "primary",
    meta: "Actualizacion",
    headline: "Agenda abierta para nuevos encargos",
    body: "Disponible para proyectos de modelado 3D, outfits, props y piezas listas para presentacion.",
    image: "",
    progress: "1/10",
    links: [{ label: "Ver trabajos", url: "" }],
    accent: "#f7cade"
  },
  {
    id: "announcement-2",
    type: "secondary",
    meta: "Entrega",
    headline: "Portafolio en crecimiento",
    body: "Se iran sumando nuevas piezas, versiones y galerias conforme salgan trabajos recientes.",
    image: "",
    progress: "45%",
    links: [],
    accent: "#f7cade"
  }
];

const elements = {
  body: document.body,
  projectsGrid: document.getElementById("projects-grid"),
  projectList: document.getElementById("project-list"),
  publicAnnouncementList: document.getElementById("announcement-list-public"),
  editorAnnouncementList: document.getElementById("announcement-list-editor"),
  drawer: document.getElementById("editor-drawer"),
  announcementDrawer: document.getElementById("announcement-drawer"),
  form: document.getElementById("project-form"),
  resetForm: document.getElementById("reset-form"),
  exportButton: document.getElementById("export-projects"),
  importInput: document.getElementById("import-projects"),
  resetProjects: document.getElementById("reset-projects"),
  openAnnouncementEditor: document.getElementById("open-announcement-editor"),
  cardTemplate: document.getElementById("project-card-template"),
  itemTemplate: document.getElementById("project-item-template"),
  announcementCardTemplate: document.getElementById("announcement-card-template"),
  announcementItemTemplate: document.getElementById("announcement-item-template"),
  projectId: document.getElementById("project-id"),
  projectTitle: document.getElementById("project-title"),
  projectDescription: document.getElementById("project-description"),
  projectTags: document.getElementById("project-tags"),
  projectCategory: document.getElementById("project-category"),
  projectGumroadLink: document.getElementById("project-gumroad-link"),
  projectBoothLink: document.getElementById("project-booth-link"),
  projectCoverImage: document.getElementById("project-cover-image"),
  projectGallery: document.getElementById("project-gallery"),
  projectAccent: document.getElementById("project-accent"),
  announcementForm: document.getElementById("announcement-form"),
  announcementId: document.getElementById("announcement-id"),
  announcementType: document.getElementById("announcement-type"),
  announcementMeta: document.getElementById("announcement-meta"),
  announcementHeadline: document.getElementById("announcement-headline"),
  announcementBody: document.getElementById("announcement-body"),
  announcementProgress: document.getElementById("announcement-progress"),
  announcementProgressLabel: document.getElementById("announcement-progress-label"),
  announcementProgressToggle: document.getElementById("announcement-progress-toggle"),
  announcementImage: document.getElementById("announcement-image"),
  announcementLinkLabel1: document.getElementById("announcement-link-label-1"),
  announcementLinkUrl1: document.getElementById("announcement-link-url-1"),
  announcementLinkLabel2: document.getElementById("announcement-link-label-2"),
  announcementLinkUrl2: document.getElementById("announcement-link-url-2"),
  announcementAccent: document.getElementById("announcement-accent"),
  announcementMainPublic: document.getElementById("announcement-main-public"),
  exportAnnouncementsButton: document.getElementById("export-announcements"),
  importAnnouncementsInput: document.getElementById("import-announcements"),
  resetAnnouncementForm: document.getElementById("reset-announcement-form"),
  resetAnnouncements: document.getElementById("reset-announcements"),
  langToggle: document.getElementById("lang-toggle"),
  adminAccess: document.getElementById("admin-access"),
  closeButtons: document.querySelectorAll("[data-close-editor]"),
  closeAnnouncementButtons: document.querySelectorAll("[data-close-announcement-editor]")
};

let projects = [];
let announcements = [];
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
let draggedProjectId = null;
let draggedAnnouncementId = null;

function normalizeAssetPath(value) {
  if (typeof value !== "string") {
    return "";
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  if (/^(https?:|data:|blob:|\.\/|\/)/i.test(trimmed)) {
    return trimmed.replace(/\\/g, "/");
  }

  const normalizedSlashes = trimmed.replace(/\\/g, "/");
  const lowerPath = normalizedSlashes.toLowerCase();
  const imagesIndex = lowerPath.lastIndexOf("/images/");
  if (imagesIndex >= 0) {
    return `.${normalizedSlashes.slice(imagesIndex)}`;
  }

  if (lowerPath.startsWith("images/")) {
    return `./${normalizedSlashes}`;
  }

  return normalizedSlashes;
}

function normalizeProjects(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item, index) => ({
    id: item.id || `project-${index + 1}`,
    title: item.title || "Proyecto sin nombre",
    description: item.description || "",
    tags: Array.isArray(item.tags) ? item.tags : [],
    category: item.category || "Proyecto",
    gumroadLink: item.gumroadLink || item.link || "",
    boothLink: item.boothLink || "",
    accent: item.accent || "#f7cade",
    coverImage: normalizeAssetPath(item.coverImage || ""),
    gallery: Array.isArray(item.gallery) ? item.gallery.map(normalizeAssetPath).filter(Boolean) : []
  }));
}

function normalizeAnnouncementCopy(copy, fallback = {}) {
  const source = copy && typeof copy === "object" ? copy : {};
  const base = fallback && typeof fallback === "object" ? fallback : {};
  const links = Array.isArray(source.links) ? source.links : Array.isArray(base.links) ? base.links : [];
  const progress = typeof source.progress === "string"
    ? source.progress.trim()
    : typeof base.progress === "string"
      ? base.progress.trim()
      : "";
  const showProgress = typeof source.showProgress === "boolean"
    ? source.showProgress
    : typeof base.showProgress === "boolean"
      ? base.showProgress
      : Boolean(progress);

  return {
    meta: (typeof source.meta === "string" ? source.meta : base.meta || "Actualizacion").trim(),
    headline: (typeof source.headline === "string" ? source.headline : base.headline || "Comunicado").trim(),
    body: (typeof source.body === "string" ? source.body : base.body || "").trim(),
    progressLabel: (typeof source.progressLabel === "string" ? source.progressLabel : base.progressLabel || "Progreso").trim(),
    progress,
    showProgress,
    links: links.map((link) => ({
      label: typeof link?.label === "string" ? link.label.trim() : "",
      url: normalizeAssetPath(typeof link?.url === "string" ? link.url : ""),
    })).filter((link) => link.label || link.url),
  };
}

function normalizeAnnouncements(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item, index) => ({
    id: item.id || `announcement-${index + 1}`,
    type: item.type === "primary" ? "primary" : "secondary",
    meta: (item.meta || item.label || "Actualizacion").trim(),
    headline: (item.headline || item.title || "Comunicado").trim(),
    body: (item.body || item.description || "").trim(),
    image: normalizeAssetPath(item.image || item.coverImage || ""),
    progress: typeof item.progress === "string" ? item.progress.trim() : "",
    showProgress: item.showProgress !== false && Boolean((item.progress || "").trim()),
    progressLabel: (item.progressLabel || "Progreso").trim(),
    links: normalizeAnnouncementLinks(item),
    accent: item.accent || "#f7cade",
    localized: item.localized && typeof item.localized === "object"
      ? {
          es: normalizeAnnouncementCopy(item.localized.es || item.localized.esES || item.localized["es-ES"], {
            meta: item.meta || item.label || "Actualizacion",
            headline: item.headline || item.title || "Comunicado",
            body: item.body || item.description || "",
            progressLabel: item.progressLabel || "Progreso",
            progress: typeof item.progress === "string" ? item.progress.trim() : "",
            showProgress: item.showProgress !== false && Boolean((item.progress || "").trim()),
            links: normalizeAnnouncementLinks(item),
          }),
          en: normalizeAnnouncementCopy(item.localized.en || item.localized.enUS || item.localized["en-US"], {
            meta: item.meta || item.label || "Update",
            headline: item.headline || item.title || "Announcement",
            body: item.body || item.description || "",
            progressLabel: "Progress",
            progress: typeof item.progress === "string" ? item.progress.trim() : "",
            showProgress: item.showProgress !== false && Boolean((item.progress || "").trim()),
            links: normalizeAnnouncementLinks(item),
          })
        }
      : {
          es: normalizeAnnouncementCopy({
            meta: item.meta || item.label || "Actualizacion",
            headline: item.headline || item.title || "Comunicado",
            body: item.body || item.description || "",
            progressLabel: item.progressLabel || "Progreso",
            progress: typeof item.progress === "string" ? item.progress.trim() : "",
            showProgress: item.showProgress !== false && Boolean((item.progress || "").trim()),
            links: normalizeAnnouncementLinks(item),
          }),
          en: normalizeAnnouncementCopy({
            meta: item.meta || item.label || "Update",
            headline: item.headline || item.title || "Announcement",
            body: item.body || item.description || "",
            progressLabel: "Progress",
            progress: typeof item.progress === "string" ? item.progress.trim() : "",
            showProgress: item.showProgress !== false && Boolean((item.progress || "").trim()),
            links: normalizeAnnouncementLinks(item),
          })
        }
  }));
}

function normalizeAnnouncementLinks(item) {
  if (!item || typeof item !== "object") {
    return [];
  }

  if (Array.isArray(item.links)) {
    return item.links
      .map((link) => ({
        label: typeof link?.label === "string" ? link.label.trim() : "",
        url: normalizeAssetPath(typeof link?.url === "string" ? link.url : ""),
      }))
      .filter((link) => link.label || link.url);
  }

  const pairs = [
    [item.linkLabel1 || item.linkLabel || "", item.linkUrl1 || item.linkUrl || ""],
    [item.linkLabel2 || item.linkLabelAlt || "", item.linkUrl2 || item.linkUrlAlt || ""],
  ];

  return pairs
    .map(([label, url]) => ({
      label: typeof label === "string" ? label.trim() : "",
      url: normalizeAssetPath(typeof url === "string" ? url : ""),
    }))
    .filter((link) => link.label || link.url);
}

function parseProgressInput(value) {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) {
    return null;
  }

  const fraction = raw.match(/^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);
  if (fraction) {
    const numerator = Number(fraction[1]);
    const denominator = Number(fraction[2]);
    if (Number.isFinite(numerator) && Number.isFinite(denominator) && denominator > 0) {
      const percent = Math.max(0, Math.min(100, (numerator / denominator) * 100));
      return {
        label: raw,
        percent,
      };
    }
  }

  const numeric = raw.replace(/%$/, "");
  const numberValue = Number(numeric);
  if (!Number.isFinite(numberValue)) {
    return null;
  }

  const percent = numberValue <= 1 ? numberValue * 100 : numberValue;
  return {
    label: raw.endsWith("%") ? raw : `${Math.round(percent)}%`,
    percent: Math.max(0, Math.min(100, percent)),
  };
}

function pickFeaturedAnnouncement(items) {
  return items.find((item) => item.type === "primary") || items[0] || null;
}

function getAnnouncementCopy(announcement, language = currentLanguage) {
  if (!announcement || typeof announcement !== "object") {
    return {
      meta: "",
      headline: "",
      body: "",
      progressLabel: translations[language]["announcements.progressLabel"],
      progress: "",
      showProgress: false,
      links: [],
    };
  }

  const localized = announcement.localized && typeof announcement.localized === "object"
    ? announcement.localized[language] || announcement.localized.es || announcement.localized.en
    : null;
  if (localized) {
    return {
      meta: localized.meta || announcement.meta || "",
      headline: localized.headline || announcement.headline || "",
      body: localized.body || announcement.body || "",
      progressLabel: localized.progressLabel || translations[language]["announcements.progressLabel"],
      progress: typeof localized.progress === "string" ? localized.progress : announcement.progress || "",
      showProgress: typeof localized.showProgress === "boolean" ? localized.showProgress : announcement.showProgress !== false,
      links: Array.isArray(localized.links) ? localized.links : [],
    };
  }

  return {
    meta: announcement.meta || "",
    headline: announcement.headline || "",
    body: announcement.body || "",
    progressLabel: announcement.progressLabel || translations[language]["announcements.progressLabel"],
    progress: announcement.progress || "",
    showProgress: announcement.showProgress !== false,
    links: Array.isArray(announcement.links) ? announcement.links : [],
  };
}

const translationCache = new Map();

function splitTextForTranslation(text) {
  const raw = typeof text === "string" ? text : "";
  if (!raw.trim()) {
    return [];
  }

  const sentences = raw.match(/[^.!?\n]+[.!?]?\s*|\n+/g) || [raw];
  const chunks = [];
  let buffer = "";

  const flush = () => {
    if (buffer.trim()) {
      chunks.push(buffer.trimEnd());
      buffer = "";
    }
  };

  sentences.forEach((segment) => {
    if (/^\n+$/.test(segment)) {
      flush();
      chunks.push(segment);
      return;
    }

    const candidate = `${buffer}${segment}`;
    if (candidate.length <= 420) {
      buffer = candidate;
      return;
    }

    flush();
    const segmentText = segment.trim();
    if (segmentText.length <= 420) {
      buffer = segmentText;
      return;
    }

    for (let index = 0; index < segmentText.length; index += 360) {
      chunks.push(segmentText.slice(index, index + 360));
    }
  });

  flush();
  return chunks;
}

async function translateText(text, sourceLang, targetLang) {
  const raw = typeof text === "string" ? text : "";
  if (!raw.trim() || sourceLang === targetLang) {
    return raw;
  }

  const cacheKey = `${sourceLang}:${targetLang}:${raw}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  const chunks = splitTextForTranslation(raw);
  if (chunks.length === 0) {
    translationCache.set(cacheKey, raw);
    return raw;
  }

  const translated = [];
  for (const chunk of chunks) {
    if (/^\n+$/.test(chunk)) {
      translated.push(chunk);
      continue;
    }

    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=${sourceLang}|${targetLang}`);
      const data = await response.json();
      const translatedText = typeof data?.responseData?.translatedText === "string" && data.responseData.translatedText.trim()
        ? data.responseData.translatedText.trim()
        : chunk;
      translated.push(translatedText);
    } catch (error) {
      translated.push(chunk);
    }
  }

  const result = translated.join("");
  translationCache.set(cacheKey, result);
  return result;
}

async function translateAnnouncementCopy(copy, sourceLang, targetLang) {
  const translatedLinks = await Promise.all((copy.links || []).map(async (link) => ({
    label: link.label ? await translateText(link.label, sourceLang, targetLang) : "",
    url: link.url || "",
  })));

  const [meta, headline, body, progressLabel] = await Promise.all([
    translateText(copy.meta || "", sourceLang, targetLang),
    translateText(copy.headline || "", sourceLang, targetLang),
    translateText(copy.body || "", sourceLang, targetLang),
    translateText(copy.progressLabel || translations[sourceLang]["announcements.progressLabel"], sourceLang, targetLang),
  ]);

  return {
    meta,
    headline,
    body,
    progressLabel,
    progress: copy.progress || "",
    showProgress: copy.showProgress !== false && Boolean((copy.progress || "").trim()),
    links: translatedLinks,
  };
}

function getOtherLanguage(language) {
  return language === "es" ? "en" : "es";
}

function ensurePrimaryAnnouncement(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return [];
  }

  if (items.some((item) => item.type === "primary")) {
    return items;
  }

  return items.map((item, index) => (
    index === 0 ? { ...item, type: "primary" } : item
  ));
}

function getAnnouncementTypeLabel(type) {
  return type === "primary"
    ? translations[currentLanguage]["announcements.primaryBadge"]
    : translations[currentLanguage]["announcements.secondaryBadge"];
}

function applyAnnouncementMedia(node, announcement) {
  const media = node.querySelector(".announcement-image");
  if (!media) {
    return;
  }

  if (announcement.image) {
    media.hidden = false;
    media.style.backgroundImage = `linear-gradient(rgba(255, 238, 244, 0.08), rgba(255, 238, 244, 0.08)), url("${announcement.image}")`;
    media.style.backgroundSize = "cover";
    media.style.backgroundPosition = "center";
  } else {
    media.hidden = true;
    media.style.backgroundImage = "";
  }
}

function applyAnnouncementProgress(node, announcement, copy = null, language = currentLanguage) {
  const progressNode = node.querySelector(".announcement-progress");
  const progressData = parseProgressInput((copy && copy.progress) || announcement.progress);
  const labelNode = node.querySelector(".announcement-progress-label");
  const fillNode = node.querySelector(".announcement-progress-fill");

  if (!progressNode) {
    return;
  }

  if (!progressData || announcement.showProgress === false || (copy && copy.showProgress === false)) {
    progressNode.hidden = true;
    return;
  }

  progressNode.hidden = false;
  if (labelNode) {
    const progressLabel = copy && copy.progressLabel ? copy.progressLabel : translations[language]["announcements.progressLabel"];
    labelNode.textContent = `${progressLabel}: ${progressData.label}`;
  }
  if (fillNode) {
    fillNode.style.width = `${progressData.percent}%`;
  }
}

function applyAnnouncementLinks(node, announcement, copy = null) {
  const linksNode = node.querySelector(".announcement-links");
  if (!linksNode) {
    return;
  }

  linksNode.innerHTML = "";
  const links = copy && Array.isArray(copy.links) ? copy.links : (announcement.links || []);
  links.forEach((link) => {
    if (!link.label && !link.url) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.className = "announcement-link";
    anchor.textContent = link.label || link.url || "";
    if (link.url) {
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    } else {
      anchor.href = "#";
    }
    linksNode.appendChild(anchor);
  });
  linksNode.hidden = linksNode.childElementCount === 0;
}

function renderPublicAnnouncementCard(node, announcement, featured = false) {
  const copy = getAnnouncementCopy(announcement, currentLanguage);
  node.classList.toggle("announcement-card--primary", featured);
  node.classList.toggle("announcement-card--secondary", !featured);
  node.classList.toggle("announcement-card--has-image", Boolean(announcement.image));
  node.style.setProperty("--announcement-accent", announcement.accent || "#f7cade");

  const typeBadge = node.querySelector(".announcement-type-badge");
  const meta = node.querySelector(".announcement-meta");
  const headline = node.querySelector("h3");
  const body = node.querySelector(".announcement-body");

  if (typeBadge) {
    typeBadge.hidden = featured;
    typeBadge.textContent = getAnnouncementTypeLabel(announcement.type);
  }
  if (meta) {
    meta.textContent = copy.meta;
  }
  if (headline) {
    headline.textContent = copy.headline;
  }
  if (body) {
    body.textContent = copy.body;
  }

  applyAnnouncementMedia(node, announcement);
  applyAnnouncementProgress(node, announcement, copy, currentLanguage);
  applyAnnouncementLinks(node, announcement, copy);
}

function renderAnnouncementEditorItem(announcement) {
  const itemNode = elements.announcementItemTemplate.content.firstElementChild.cloneNode(true);
  const visualThumb = itemNode.querySelector(".announcement-item-visual");
  const titleNode = itemNode.querySelector(".item-title");
  const descriptionNode = itemNode.querySelector(".item-description");
  const progressData = parseProgressInput(announcement.progress);

  itemNode.dataset.announcementId = announcement.id;
  itemNode.draggable = true;
  itemNode.classList.toggle("announcement-editor-primary", announcement.type === "primary");
  itemNode.style.setProperty("--announcement-accent", announcement.accent || "#f7cade");

  if (visualThumb) {
    if (announcement.image) {
      visualThumb.style.backgroundImage = `linear-gradient(rgba(255, 236, 243, 0.12), rgba(255, 236, 243, 0.12)), url("${announcement.image}")`;
      visualThumb.style.backgroundSize = "cover";
      visualThumb.style.backgroundPosition = "center";
    } else {
      visualThumb.style.backgroundImage = `linear-gradient(145deg, ${announcement.accent || "#f7cade"}, #ffffff)`;
    }
  }

  if (titleNode) {
    titleNode.textContent = announcement.headline;
  }
  if (descriptionNode) {
    const progressLabel = progressData ? ` · ${progressData.label}` : "";
    descriptionNode.textContent = `${getAnnouncementTypeLabel(announcement.type)} · ${announcement.meta}${progressLabel} · ${announcement.body}`;
  }

  if (descriptionNode) {
    const progressLabel = progressData ? ` · ${progressData.label}` : "";
    const progressState = announcement.showProgress === false ? " · barra desactivada" : "";
    descriptionNode.textContent = `${getAnnouncementTypeLabel(announcement.type)} · ${announcement.meta}${progressLabel}${progressState} · ${announcement.body}`;
  }

  {
    const copy = getAnnouncementCopy(announcement, currentLanguage);
    const progressDataCopy = parseProgressInput(copy.progress);
    if (titleNode) {
      titleNode.textContent = copy.headline;
    }
    if (descriptionNode) {
      const progressLabel = progressDataCopy ? ` · ${progressDataCopy.label}` : "";
      const progressState = copy.showProgress === false ? " · barra desactivada" : "";
      descriptionNode.textContent = `${getAnnouncementTypeLabel(announcement.type)} · ${copy.meta}${progressLabel}${progressState} · ${copy.body}`;
    }
  }

  const dragHandle = itemNode.querySelector(".drag-handle");
  if (dragHandle) {
    dragHandle.addEventListener("mousedown", () => {
      draggedAnnouncementId = announcement.id;
    });
    dragHandle.addEventListener("touchstart", () => {
      draggedAnnouncementId = announcement.id;
    }, { passive: true });
  }

  itemNode.addEventListener("dragstart", (event) => {
    draggedAnnouncementId = announcement.id;
    itemNode.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", announcement.id);
  });
  itemNode.addEventListener("dragend", () => {
    itemNode.classList.remove("is-dragging");
    draggedAnnouncementId = null;
  });
  itemNode.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
  itemNode.addEventListener("drop", (event) => {
    event.preventDefault();
    const sourceId = draggedAnnouncementId || event.dataTransfer.getData("text/plain");
    reorderAnnouncement(sourceId, announcement.id);
  });

  itemNode.querySelector(".item-edit").addEventListener("click", () => fillAnnouncementForm(announcement.id));
  itemNode.querySelector(".item-delete").addEventListener("click", () => deleteAnnouncement(announcement.id));
  return itemNode;
}

function loadDraftProjects() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return null;
  }

  try {
    return normalizeProjects(JSON.parse(saved));
  } catch (error) {
    return null;
  }
}

function loadDraftAnnouncements() {
  const saved = localStorage.getItem(ANNOUNCEMENTS_STORAGE_KEY);
  if (!saved) {
    return null;
  }

  try {
    return ensurePrimaryAnnouncement(normalizeAnnouncements(JSON.parse(saved)));
  } catch (error) {
    return null;
  }
}

async function loadProjects() {
  const draftProjects = loadDraftProjects();
  if (draftProjects && draftProjects.length > 0) {
    return draftProjects;
  }

  try {
    const response = await fetch(PROJECTS_FILE, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo cargar projects.json");
    }

    const parsed = await response.json();
    const normalized = normalizeProjects(parsed);
    return normalized.length > 0 ? normalized : [...fallbackProjects];
  } catch (error) {
    return [...fallbackProjects];
  }
}

function loadAnnouncements() {
  const draftAnnouncements = loadDraftAnnouncements();
  if (draftAnnouncements && draftAnnouncements.length > 0) {
    return Promise.resolve(draftAnnouncements);
  }

  return fetch(ANNOUNCEMENTS_FILE, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar alphy-announcements.json");
      }

      return response.json();
    })
    .then((parsed) => {
      const normalized = normalizeAnnouncements(parsed);
      return normalized.length > 0
        ? ensurePrimaryAnnouncement(normalized)
        : ensurePrimaryAnnouncement(normalizeAnnouncements(fallbackAnnouncements));
    })
    .catch(() => ensurePrimaryAnnouncement(normalizeAnnouncements(fallbackAnnouncements)));
}

function saveProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function saveAnnouncements() {
  localStorage.setItem(ANNOUNCEMENTS_STORAGE_KEY, JSON.stringify(announcements));
}

function exportAnnouncements() {
  const blob = new Blob([JSON.stringify(announcements, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "alphy-announcements.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function importAnnouncements(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!Array.isArray(parsed)) {
        return;
      }

      announcements = ensurePrimaryAnnouncement(normalizeAnnouncements(parsed));
      saveAnnouncements();
      renderAnnouncements();
      applyLanguage(currentLanguage);
      resetAnnouncementForm();
    } catch (error) {
      window.alert(currentLanguage === "es" ? "No se pudo importar el archivo de comunicados." : "Could not import the announcements file.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "es";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[currentLanguage][node.dataset.i18n];
    if (typeof value === "string") {
      if (value.includes("<code>")) {
        node.innerHTML = value;
      } else {
        node.textContent = value;
      }
    }
  });

  if (elements.langToggle) {
    elements.langToggle.querySelectorAll("[data-lang-option]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.langOption === currentLanguage);
    });
  }

  document.querySelectorAll(".project-open").forEach((link) => {
    if (link.classList.contains("project-link")) {
      link.textContent = currentLanguage === "es" ? "Abrir proyecto" : "Open project";
    }
  });

  document.querySelectorAll(".project-gumroad").forEach((link) => {
    const label = link.querySelector("span:last-child");
    if (label) {
      label.textContent = "Gumroad";
    }
  });

  document.querySelectorAll(".project-booth").forEach((link) => {
    const label = link.querySelector("span:last-child");
    if (label) {
      label.textContent = "Booth";
    }
  });

  document.querySelectorAll(".project-toggle").forEach((button) => {
    if (button.hidden) {
      return;
    }
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.textContent = expanded
      ? currentLanguage === "es" ? "Ver menos" : "Show less"
      : currentLanguage === "es" ? "Ver mas" : "Show more";
  });

  document.querySelectorAll(".item-edit").forEach((button) => {
    button.textContent = currentLanguage === "es" ? "Editar" : "Edit";
  });
  document.querySelectorAll(".item-delete").forEach((button) => {
    button.textContent = currentLanguage === "es" ? "Borrar" : "Delete";
  });

  if (elements.adminAccess) {
    elements.adminAccess.textContent = currentLanguage === "es" ? "Gestion" : "Manage";
  }

  if (elements.announcementProgressLabel) {
    elements.announcementProgressLabel.placeholder = currentLanguage === "es" ? "Progreso" : "Progress";
  }

  renderAnnouncements();
}

function renderAnnouncements() {
  elements.publicAnnouncementList.innerHTML = "";
  elements.editorAnnouncementList.innerHTML = "";

  if (announcements.length === 0) {
    const emptyCard = elements.announcementCardTemplate.content.firstElementChild.cloneNode(true);
    emptyCard.querySelector(".announcement-meta").textContent = translations[currentLanguage]["announcements.emptyMeta"];
    emptyCard.querySelector("h3").textContent = translations[currentLanguage]["announcements.emptyTitle"];
    emptyCard.querySelector(".announcement-body").textContent = translations[currentLanguage]["announcements.emptyBody"];
    elements.publicAnnouncementList.appendChild(emptyCard);

    elements.editorAnnouncementList.innerHTML = `
      <article class="project-item">
        <div>
          <strong class="item-title">${translations[currentLanguage]["announcements.emptyTitle"]}</strong>
          <p class="item-description">${translations[currentLanguage]["announcements.emptyBody"]}</p>
        </div>
      </article>
    `;
    return;
  }

  announcements.forEach((announcement) => {
    const publicNode = elements.announcementCardTemplate.content.firstElementChild.cloneNode(true);
    const announcementImage = publicNode.querySelector(".announcement-image");
    publicNode.querySelector(".announcement-meta").textContent = announcement.meta;
    publicNode.querySelector("h3").textContent = announcement.headline;
    publicNode.querySelector(".announcement-body").textContent = announcement.body;
    if (announcement.image) {
      announcementImage.hidden = false;
      announcementImage.style.backgroundImage = `linear-gradient(rgba(255, 238, 244, 0.08), rgba(255, 238, 244, 0.08)), url("${announcement.image}")`;
    } else {
      announcementImage.hidden = true;
      announcementImage.style.backgroundImage = "";
    }
    elements.publicAnnouncementList.appendChild(publicNode);

    const itemNode = elements.announcementItemTemplate.content.firstElementChild.cloneNode(true);
    itemNode.dataset.announcementId = announcement.id;
    itemNode.draggable = true;
    itemNode.querySelector(".item-title").textContent = announcement.headline;
    itemNode.querySelector(".item-description").textContent = `${announcement.meta} · ${announcement.body}`;
    const dragHandle = itemNode.querySelector(".drag-handle");
    if (dragHandle) {
      dragHandle.addEventListener("mousedown", () => {
        draggedAnnouncementId = announcement.id;
      });
      dragHandle.addEventListener("touchstart", () => {
        draggedAnnouncementId = announcement.id;
      }, { passive: true });
    }
    itemNode.addEventListener("dragstart", (event) => {
      draggedAnnouncementId = announcement.id;
      itemNode.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", announcement.id);
    });
    itemNode.addEventListener("dragend", () => {
      itemNode.classList.remove("is-dragging");
      draggedAnnouncementId = null;
    });
    itemNode.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    itemNode.addEventListener("drop", (event) => {
      event.preventDefault();
      const sourceId = draggedAnnouncementId || event.dataTransfer.getData("text/plain");
      reorderAnnouncement(sourceId, announcement.id);
    });
    itemNode.querySelector(".item-edit").addEventListener("click", () => fillAnnouncementForm(announcement.id));
    itemNode.querySelector(".item-delete").addEventListener("click", () => deleteAnnouncement(announcement.id));
    elements.editorAnnouncementList.appendChild(itemNode);
  });
}

function renderProjects() {
  elements.projectsGrid.innerHTML = "";
  elements.projectList.innerHTML = "";

  if (projects.length === 0) {
    elements.projectsGrid.innerHTML = `
      <article class="project-empty reveal is-visible">
        <p class="eyebrow">No hay proyectos aun</p>
        <h3>Agrega tu primer proyecto desde el editor</h3>
        <p>Usa el boton "Editar proyectos" para crear una ficha con descripcion, portada, galeria e links.</p>
      </article>
    `;
    elements.projectList.innerHTML = `
      <article class="project-item">
        <div>
          <strong class="item-title">Sin proyectos cargados</strong>
          <p class="item-description">Crea tu primer proyecto y luego exporta el JSON para publicarlo.</p>
        </div>
      </article>
    `;
    return;
  }

  projects.forEach((project) => {
    const cardNode = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    const visual = cardNode.querySelector(".project-visual");
    const title = cardNode.querySelector("h3");
    const description = cardNode.querySelector(".project-description");
    const descriptionToggle = cardNode.querySelector(".project-toggle");
    const badge = cardNode.querySelector(".project-badge");
    const tags = cardNode.querySelector(".project-tags");
    const openLinks = cardNode.querySelectorAll(".project-open");
    const gumroadLink = cardNode.querySelector(".project-gumroad");
    const boothLink = cardNode.querySelector(".project-booth");

    if (project.coverImage) {
      visual.style.backgroundImage = `linear-gradient(rgba(255, 236, 243, 0.15), rgba(255, 236, 243, 0.15)), url("${project.coverImage}")`;
      visual.style.backgroundSize = "cover";
      visual.style.backgroundPosition = "center";
    } else {
      visual.style.background = `linear-gradient(160deg, ${project.accent || "#f7cade"}, #ffffff)`;
    }

    title.textContent = project.title;
    badge.textContent = project.category || "Proyecto";
    description.textContent = project.description;
    description.classList.toggle("is-collapsed", project.description.length > 180);
    descriptionToggle.hidden = project.description.length <= 180;
    descriptionToggle.textContent = currentLanguage === "es" ? "Ver mas" : "Show more";
    descriptionToggle.setAttribute("aria-expanded", "false");
    descriptionToggle.addEventListener("click", () => {
      const isCollapsed = description.classList.toggle("is-collapsed");
      descriptionToggle.textContent = isCollapsed
        ? currentLanguage === "es" ? "Ver mas" : "Show more"
        : currentLanguage === "es" ? "Ver menos" : "Show less";
      descriptionToggle.setAttribute("aria-expanded", String(!isCollapsed));
    });

    tags.innerHTML = "";
    (project.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tags.appendChild(chip);
    });

    openLinks.forEach((link) => {
      link.href = `./project.html?id=${encodeURIComponent(project.id)}`;
    });

    gumroadLink.hidden = !project.gumroadLink;
    if (project.gumroadLink) {
      gumroadLink.href = project.gumroadLink;
    }

    boothLink.hidden = !project.boothLink;
    if (project.boothLink) {
      boothLink.href = project.boothLink;
    }

    elements.projectsGrid.appendChild(cardNode);

    const itemNode = elements.itemTemplate.content.firstElementChild.cloneNode(true);
    const visualThumb = itemNode.querySelector(".project-item-visual");
    itemNode.dataset.projectId = project.id;
    itemNode.draggable = true;
    itemNode.querySelector(".item-title").textContent = project.title;
    itemNode.querySelector(".item-description").textContent = `${project.category || "Proyecto"} · ${project.description}`;
    if (visualThumb) {
      if (project.coverImage) {
        visualThumb.style.backgroundImage = `linear-gradient(rgba(255, 236, 243, 0.12), rgba(255, 236, 243, 0.12)), url("${project.coverImage}")`;
      } else {
        visualThumb.style.backgroundImage = `linear-gradient(145deg, ${project.accent || "#f7cade"}, #ffffff)`;
      }
    }
    const dragHandle = itemNode.querySelector(".drag-handle");
    if (dragHandle) {
      dragHandle.addEventListener("mousedown", () => {
        draggedProjectId = project.id;
      });
      dragHandle.addEventListener("touchstart", () => {
        draggedProjectId = project.id;
      }, { passive: true });
    }
    itemNode.addEventListener("dragstart", (event) => {
      draggedProjectId = project.id;
      itemNode.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", project.id);
    });
    itemNode.addEventListener("dragend", () => {
      itemNode.classList.remove("is-dragging");
      draggedProjectId = null;
    });
    itemNode.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    itemNode.addEventListener("drop", (event) => {
      event.preventDefault();
      const sourceId = draggedProjectId || event.dataTransfer.getData("text/plain");
      reorderProject(sourceId, project.id);
    });
    itemNode.querySelector(".item-edit").addEventListener("click", () => fillProjectForm(project.id));
    itemNode.querySelector(".item-delete").addEventListener("click", () => deleteProject(project.id));
    elements.projectList.appendChild(itemNode);
  });
}

function fillProjectForm(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) {
    return;
  }

  elements.projectId.value = project.id;
  elements.projectTitle.value = project.title;
  elements.projectDescription.value = project.description;
  elements.projectTags.value = (project.tags || []).join(", ");
  elements.projectCategory.value = project.category || "";
  elements.projectGumroadLink.value = project.gumroadLink || "";
  elements.projectBoothLink.value = project.boothLink || "";
  elements.projectCoverImage.value = project.coverImage || "";
  elements.projectGallery.value = (project.gallery || []).join("\n");
  elements.projectAccent.value = project.accent || "";
  openEditor();
}

function fillAnnouncementForm(announcementId) {
  const announcement = announcements.find((item) => item.id === announcementId);
  if (!announcement) {
    return;
  }

  elements.announcementId.value = announcement.id;
  elements.announcementMeta.value = announcement.meta;
  elements.announcementHeadline.value = announcement.headline;
  elements.announcementBody.value = announcement.body;
  elements.announcementImage.value = announcement.image || "";
  openAnnouncementEditor();
}

function resetProjectForm() {
  elements.form.reset();
  elements.projectId.value = "";
}

function resetAnnouncementForm() {
  elements.announcementForm.reset();
  elements.announcementId.value = "";
  if (elements.announcementProgressLabel) {
    elements.announcementProgressLabel.value = currentLanguage === "es" ? "Progreso" : "Progress";
  }
  if (elements.announcementProgressToggle) {
    elements.announcementProgressToggle.checked = true;
  }
}

function deleteProject(projectId) {
  projects = projects.filter((item) => item.id !== projectId);
  saveProjects();
  renderProjects();
  applyLanguage(currentLanguage);
  resetProjectForm();
}

function deleteAnnouncement(announcementId) {
  announcements = announcements.filter((item) => item.id !== announcementId);
  announcements = ensurePrimaryAnnouncement(announcements);
  saveAnnouncements();
  renderAnnouncements();
  applyLanguage(currentLanguage);
  resetAnnouncementForm();
}

function moveProject(projectId, direction) {
  const index = projects.findIndex((item) => item.id === projectId);
  if (index < 0) {
    return;
  }

  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= projects.length) {
    return;
  }

  const [project] = projects.splice(index, 1);
  projects.splice(nextIndex, 0, project);
  saveProjects();
  renderProjects();
  applyLanguage(currentLanguage);
}

function reorderProject(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) {
    return;
  }

  const sourceIndex = projects.findIndex((item) => item.id === sourceId);
  const targetIndex = projects.findIndex((item) => item.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) {
    return;
  }

  const [project] = projects.splice(sourceIndex, 1);
  projects.splice(targetIndex, 0, project);
  saveProjects();
  renderProjects();
  applyLanguage(currentLanguage);
}

function moveAnnouncement(announcementId, direction) {
  const index = announcements.findIndex((item) => item.id === announcementId);
  if (index < 0) {
    return;
  }

  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= announcements.length) {
    return;
  }

  const [announcement] = announcements.splice(index, 1);
  announcements.splice(nextIndex, 0, announcement);
  saveAnnouncements();
  renderAnnouncements();
  applyLanguage(currentLanguage);
}

function reorderAnnouncement(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) {
    return;
  }

  const sourceIndex = announcements.findIndex((item) => item.id === sourceId);
  const targetIndex = announcements.findIndex((item) => item.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) {
    return;
  }

  const [announcement] = announcements.splice(sourceIndex, 1);
  announcements.splice(targetIndex, 0, announcement);
  saveAnnouncements();
  renderAnnouncements();
  applyLanguage(currentLanguage);
}

function handleProjectSubmit(event) {
  event.preventDefault();

  const payload = {
    id: elements.projectId.value || crypto.randomUUID(),
    title: elements.projectTitle.value.trim(),
    description: elements.projectDescription.value.trim(),
    tags: elements.projectTags.value.split(",").map((tag) => tag.trim()).filter(Boolean),
    category: elements.projectCategory.value.trim() || "Proyecto",
    gumroadLink: elements.projectGumroadLink.value.trim(),
    boothLink: elements.projectBoothLink.value.trim(),
    coverImage: normalizeAssetPath(elements.projectCoverImage.value),
    gallery: elements.projectGallery.value.split("\n").map((image) => normalizeAssetPath(image)).filter(Boolean),
    accent: elements.projectAccent.value.trim() || "#f7cade"
  };

  const index = projects.findIndex((item) => item.id === payload.id);
  if (index >= 0) {
    projects[index] = payload;
  } else {
    projects.unshift(payload);
  }

  saveProjects();
  renderProjects();
  applyLanguage(currentLanguage);
  resetProjectForm();
}

function handleAnnouncementSubmit(event) {
  event.preventDefault();

  const payload = {
    id: elements.announcementId.value || crypto.randomUUID(),
    meta: elements.announcementMeta.value.trim(),
    headline: elements.announcementHeadline.value.trim(),
    body: elements.announcementBody.value.trim(),
    image: normalizeAssetPath(elements.announcementImage.value)
  };

  const index = announcements.findIndex((item) => item.id === payload.id);
  if (index >= 0) {
    announcements[index] = payload;
  } else {
    announcements.unshift(payload);
  }

  saveAnnouncements();
  renderAnnouncements();
  applyLanguage(currentLanguage);
  resetAnnouncementForm();
}

function exportProjects() {
  const blob = new Blob([JSON.stringify(projects, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "alphy-projects.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function importProjects(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!Array.isArray(parsed)) {
        return;
      }

      projects = normalizeProjects(parsed);
      saveProjects();
      renderProjects();
      applyLanguage(currentLanguage);
      resetProjectForm();
    } catch (error) {
      window.alert("No se pudo importar el archivo JSON.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function restoreDefaults() {
  projects = [...fallbackProjects];
  saveProjects();
  renderProjects();
  applyLanguage(currentLanguage);
  resetProjectForm();
}

function restoreAnnouncements() {
  announcements = ensurePrimaryAnnouncement(normalizeAnnouncements(fallbackAnnouncements));
  saveAnnouncements();
  renderAnnouncements();
  applyLanguage(currentLanguage);
  resetAnnouncementForm();
}

function openEditor() {
  elements.drawer.classList.add("is-open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.body.classList.add("editor-open");
  syncEditorLayout();
}

function closeEditor() {
  elements.drawer.classList.remove("is-open");
  elements.drawer.setAttribute("aria-hidden", "true");
  if (!elements.announcementDrawer.classList.contains("is-open")) {
    elements.body.classList.remove("editor-open");
  }
  syncEditorLayout();
}

function openAnnouncementEditor() {
  elements.announcementDrawer.classList.add("is-open");
  elements.announcementDrawer.setAttribute("aria-hidden", "false");
  elements.body.classList.add("editor-open");
  syncEditorLayout();
}

function closeAnnouncementEditor() {
  elements.announcementDrawer.classList.remove("is-open");
  elements.announcementDrawer.setAttribute("aria-hidden", "true");
  if (!elements.drawer.classList.contains("is-open")) {
    elements.body.classList.remove("editor-open");
  }
  syncEditorLayout();
}

function syncEditorLayout() {
  const bothOpen = elements.drawer.classList.contains("is-open")
    && elements.announcementDrawer.classList.contains("is-open");
  elements.body.classList.toggle("both-editors-open", bothOpen);
}

function requestEditorAccess() {
  const promptText = currentLanguage === "es" ? "Contrasena del editor:" : "Editor password:";
  const value = window.prompt(promptText, "");
  if (value === EDITOR_PASSWORD) {
    openEditor();
    return;
  }

  if (value !== null && value !== "") {
    window.alert(currentLanguage === "es" ? "Contrasena incorrecta." : "Incorrect password.");
  }
}

function revealElements() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
}

elements.form.addEventListener("submit", handleProjectSubmit);
elements.resetForm.addEventListener("click", resetProjectForm);
elements.exportButton.addEventListener("click", exportProjects);
elements.importInput.addEventListener("change", importProjects);
elements.resetProjects.addEventListener("click", restoreDefaults);
if (elements.exportAnnouncementsButton) {
  elements.exportAnnouncementsButton.addEventListener("click", exportAnnouncements);
}
if (elements.importAnnouncementsInput) {
  elements.importAnnouncementsInput.addEventListener("change", importAnnouncements);
}
elements.announcementForm.addEventListener("submit", handleAnnouncementSubmit);
elements.resetAnnouncementForm.addEventListener("click", resetAnnouncementForm);
elements.resetAnnouncements.addEventListener("click", restoreAnnouncements);
if (elements.openAnnouncementEditor) {
  elements.openAnnouncementEditor.addEventListener("click", openAnnouncementEditor);
}

elements.closeButtons.forEach((button) => {
  button.addEventListener("click", closeEditor);
});

elements.closeAnnouncementButtons.forEach((button) => {
  button.addEventListener("click", closeAnnouncementEditor);
});

if (elements.langToggle) {
  elements.langToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "es" ? "en" : "es");
  });
}

if (elements.adminAccess) {
  elements.adminAccess.addEventListener("click", requestEditorAccess);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEditor();
    closeAnnouncementEditor();
  }

  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "e") {
    requestEditorAccess();
  }
});

function renderAnnouncements() {
  elements.publicAnnouncementList.innerHTML = "";
  elements.editorAnnouncementList.innerHTML = "";
  elements.announcementMainPublic.innerHTML = "";

  if (announcements.length === 0) {
    const emptyCard = elements.announcementCardTemplate.content.firstElementChild.cloneNode(true);
    renderPublicAnnouncementCard(emptyCard, {
      type: "primary",
      meta: translations[currentLanguage]["announcements.emptyMeta"],
      headline: translations[currentLanguage]["announcements.emptyTitle"],
      body: translations[currentLanguage]["announcements.emptyBody"],
      image: "",
      progress: "",
      links: [],
      accent: "#f7cade"
    }, true);
    elements.announcementMainPublic.appendChild(emptyCard);
    elements.publicAnnouncementList.innerHTML = `
      <article class="announcement-card announcement-card--secondary announcement-empty-card">
        <div class="announcement-layout">
          <div class="announcement-copy">
            <div class="announcement-head">
              <span class="announcement-type-badge">${translations[currentLanguage]["announcements.secondaryBadge"]}</span>
              <p class="announcement-meta">${translations[currentLanguage]["announcements.emptyMeta"]}</p>
            </div>
            <h3>${translations[currentLanguage]["announcements.emptyTitle"]}</h3>
            <p class="announcement-body">${translations[currentLanguage]["announcements.emptyBody"]}</p>
          </div>
          <div class="announcement-image" hidden></div>
        </div>
      </article>
    `;
    elements.editorAnnouncementList.innerHTML = `
      <article class="project-item announcement-editor-card">
        <div class="project-item-visual announcement-item-visual"></div>
        <div class="project-item-copy">
          <strong class="item-title">${translations[currentLanguage]["announcements.emptyTitle"]}</strong>
          <p class="item-description">${translations[currentLanguage]["announcements.emptyBody"]}</p>
        </div>
      </article>
    `;
    return;
  }

  const featuredAnnouncement = pickFeaturedAnnouncement(announcements);
  if (featuredAnnouncement) {
    const featuredNode = elements.announcementCardTemplate.content.firstElementChild.cloneNode(true);
    renderPublicAnnouncementCard(featuredNode, featuredAnnouncement, true);
    elements.announcementMainPublic.appendChild(featuredNode);
  }

  announcements.forEach((announcement) => {
    if (featuredAnnouncement && announcement.id === featuredAnnouncement.id) {
      return;
    }
    const publicNode = elements.announcementCardTemplate.content.firstElementChild.cloneNode(true);
    renderPublicAnnouncementCard(publicNode, announcement, false);
    elements.publicAnnouncementList.appendChild(publicNode);
  });

  announcements.forEach((announcement) => {
    elements.editorAnnouncementList.appendChild(renderAnnouncementEditorItem(announcement));
  });
}

function fillAnnouncementForm(announcementId) {
  const announcement = announcements.find((item) => item.id === announcementId);
  if (!announcement) {
    return;
  }

  const copy = getAnnouncementCopy(announcement, currentLanguage);
  elements.announcementId.value = announcement.id;
  elements.announcementType.value = announcement.type || "secondary";
  elements.announcementMeta.value = copy.meta;
  elements.announcementHeadline.value = copy.headline;
  elements.announcementBody.value = copy.body;
  elements.announcementProgress.value = copy.progress || "";
  elements.announcementProgressLabel.value = copy.progressLabel || "";
  if (elements.announcementProgressToggle) {
    elements.announcementProgressToggle.checked = copy.showProgress !== false;
  }
  elements.announcementImage.value = announcement.image || "";
  const firstLink = copy.links && copy.links[0] ? copy.links[0] : {};
  const secondLink = copy.links && copy.links[1] ? copy.links[1] : {};
  elements.announcementLinkLabel1.value = firstLink.label || "";
  elements.announcementLinkUrl1.value = firstLink.url || "";
  elements.announcementLinkLabel2.value = secondLink.label || "";
  elements.announcementLinkUrl2.value = secondLink.url || "";
  elements.announcementAccent.value = announcement.accent || "";
  openAnnouncementEditor();
}

async function handleAnnouncementSubmit(event) {
  event.preventDefault();

  const progress = parseProgressInput(elements.announcementProgress.value);
  const progressLabel = elements.announcementProgressLabel.value.trim() || (currentLanguage === "es" ? "Progreso" : "Progress");
  const showProgress = elements.announcementProgressToggle ? elements.announcementProgressToggle.checked : true;
  const links = [
    {
      label: elements.announcementLinkLabel1.value.trim(),
      url: normalizeAssetPath(elements.announcementLinkUrl1.value)
    },
    {
      label: elements.announcementLinkLabel2.value.trim(),
      url: normalizeAssetPath(elements.announcementLinkUrl2.value)
    }
  ].filter((link) => link.label || link.url);

  const payload = {
    id: elements.announcementId.value || crypto.randomUUID(),
    type: elements.announcementType.value === "primary" ? "primary" : "secondary",
    meta: elements.announcementMeta.value.trim(),
    headline: elements.announcementHeadline.value.trim(),
    body: elements.announcementBody.value.trim(),
    image: normalizeAssetPath(elements.announcementImage.value),
    progress: progress ? progress.label : "",
    progressLabel,
    showProgress,
    links,
    accent: elements.announcementAccent.value.trim() || "#f7cade",
    localized: {}
  };

  const index = announcements.findIndex((item) => item.id === payload.id);
  if (index >= 0) {
    announcements[index] = payload;
  } else {
    announcements.unshift(payload);
  }

  if (payload.type === "primary") {
    announcements = announcements.map((item) => (
      item.id === payload.id ? item : { ...item, type: "secondary" }
    ));
    const primaryIndex = announcements.findIndex((item) => item.id === payload.id);
    if (primaryIndex > 0) {
      const [primaryAnnouncement] = announcements.splice(primaryIndex, 1);
      announcements.unshift(primaryAnnouncement);
    }
  }

  announcements = ensurePrimaryAnnouncement(announcements);

  const sourceLanguage = currentLanguage;
  const targetLanguage = getOtherLanguage(sourceLanguage);
  const sourceCopy = {
    meta: payload.meta,
    headline: payload.headline,
    body: payload.body,
    progressLabel: payload.progressLabel,
    progress: payload.progress,
    showProgress: payload.showProgress,
    links: payload.links,
  };
  const translatedCopy = await translateAnnouncementCopy(sourceCopy, sourceLanguage, targetLanguage);
  payload.localized = {
    [sourceLanguage]: sourceCopy,
    [targetLanguage]: translatedCopy,
  };

  payload.meta = sourceCopy.meta;
  payload.headline = sourceCopy.headline;
  payload.body = sourceCopy.body;
  payload.progressLabel = sourceCopy.progressLabel;
  payload.showProgress = sourceCopy.showProgress;
  payload.links = sourceCopy.links;

  saveAnnouncements();
  renderAnnouncements();
  applyLanguage(currentLanguage);
  resetAnnouncementForm();
}

function renderProjects() {
  elements.projectsGrid.innerHTML = "";
  elements.projectList.innerHTML = "";

  if (projects.length === 0) {
    elements.projectsGrid.innerHTML = `
      <article class="project-empty reveal is-visible">
        <p class="eyebrow">No hay proyectos aun</p>
        <h3>Agrega tu primer proyecto desde el editor</h3>
        <p>Usa el boton "Editar proyectos" para crear una ficha con descripcion, portada, galeria e links.</p>
      </article>
    `;
    elements.projectList.innerHTML = `
      <article class="project-item">
        <div>
          <strong class="item-title">Sin proyectos cargados</strong>
          <p class="item-description">Crea tu primer proyecto y luego exporta el JSON para publicarlo.</p>
        </div>
      </article>
    `;
    return;
  }

  projects.forEach((project) => {
    const cardNode = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    const visual = cardNode.querySelector(".project-visual");
    const title = cardNode.querySelector("h3");
    const description = cardNode.querySelector(".project-description");
    const descriptionToggle = cardNode.querySelector(".project-toggle");
    const badge = cardNode.querySelector(".project-badge");
    const tags = cardNode.querySelector(".project-tags");
    const openLinks = cardNode.querySelectorAll(".project-open");
    const gumroadLink = cardNode.querySelector(".project-gumroad");
    const boothLink = cardNode.querySelector(".project-booth");

    if (project.coverImage) {
      visual.style.backgroundImage = `linear-gradient(rgba(255, 236, 243, 0.15), rgba(255, 236, 243, 0.15)), url("${project.coverImage}")`;
      visual.style.backgroundSize = "cover";
      visual.style.backgroundPosition = "center";
    } else {
      visual.style.background = `linear-gradient(160deg, ${project.accent || "#f7cade"}, #ffffff)`;
    }

    title.textContent = project.title;
    badge.textContent = project.category || "Proyecto";
    description.textContent = project.description;
    description.classList.toggle("is-collapsed", project.description.length > 180);
    descriptionToggle.hidden = project.description.length <= 180;
    descriptionToggle.textContent = currentLanguage === "es" ? "Ver mas" : "Show more";
    descriptionToggle.setAttribute("aria-expanded", "false");
    descriptionToggle.addEventListener("click", () => {
      const isCollapsed = description.classList.toggle("is-collapsed");
      descriptionToggle.textContent = isCollapsed
        ? currentLanguage === "es" ? "Ver mas" : "Show more"
        : currentLanguage === "es" ? "Ver menos" : "Show less";
      descriptionToggle.setAttribute("aria-expanded", String(!isCollapsed));
    });

    tags.innerHTML = "";
    (project.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tags.appendChild(chip);
    });

    openLinks.forEach((link) => {
      link.href = `./project.html?id=${encodeURIComponent(project.id)}`;
    });

    gumroadLink.hidden = !project.gumroadLink;
    if (project.gumroadLink) {
      gumroadLink.href = project.gumroadLink;
    }

    boothLink.hidden = !project.boothLink;
    if (project.boothLink) {
      boothLink.href = project.boothLink;
    }

    elements.projectsGrid.appendChild(cardNode);

    const itemNode = elements.itemTemplate.content.firstElementChild.cloneNode(true);
    const visualThumb = itemNode.querySelector(".project-item-visual");
    itemNode.dataset.projectId = project.id;
    itemNode.draggable = true;
    itemNode.querySelector(".item-title").textContent = project.title;
    itemNode.querySelector(".item-description").textContent = `${project.category || "Proyecto"} · ${project.description}`;
    if (visualThumb) {
      if (project.coverImage) {
        visualThumb.style.backgroundImage = `linear-gradient(rgba(255, 236, 243, 0.12), rgba(255, 236, 243, 0.12)), url("${project.coverImage}")`;
      } else {
        visualThumb.style.backgroundImage = `linear-gradient(145deg, ${project.accent || "#f7cade"}, #ffffff)`;
      }
    }
    const dragHandle = itemNode.querySelector(".drag-handle");
    if (dragHandle) {
      dragHandle.addEventListener("mousedown", () => {
        draggedProjectId = project.id;
      });
      dragHandle.addEventListener("touchstart", () => {
        draggedProjectId = project.id;
      }, { passive: true });
    }
    itemNode.addEventListener("dragstart", (event) => {
      draggedProjectId = project.id;
      itemNode.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", project.id);
    });
    itemNode.addEventListener("dragend", () => {
      itemNode.classList.remove("is-dragging");
      draggedProjectId = null;
    });
    itemNode.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    itemNode.addEventListener("drop", (event) => {
      event.preventDefault();
      const sourceId = draggedProjectId || event.dataTransfer.getData("text/plain");
      reorderProject(sourceId, project.id);
    });
    itemNode.querySelector(".item-edit").addEventListener("click", () => fillProjectForm(project.id));
    itemNode.querySelector(".item-delete").addEventListener("click", () => deleteProject(project.id));
    elements.projectList.appendChild(itemNode);
  });
}

function applyAnnouncementProgress(node, announcement, copy = null, language = currentLanguage) {
  const progressNode = node.querySelector(".announcement-progress");
  if (!progressNode) {
    return;
  }

  const progressData = parseProgressInput((copy && copy.progress) || announcement.progress);
  const labelNode = node.querySelector(".announcement-progress-label");
  const fillNode = node.querySelector(".announcement-progress-fill");
  const shouldShow = Boolean(progressData) && announcement.showProgress !== false && (!copy || copy.showProgress !== false);

  progressNode.hidden = !shouldShow;
  progressNode.style.display = shouldShow ? "" : "none";

  if (!shouldShow) {
    if (fillNode) {
      fillNode.style.width = "0%";
    }
    return;
  }

  if (labelNode) {
    const progressLabel = copy && copy.progressLabel ? copy.progressLabel : translations[language]["announcements.progressLabel"];
    labelNode.textContent = `${progressLabel}: ${progressData.label}`;
  }
  if (fillNode) {
    fillNode.style.width = `${progressData.percent}%`;
  }
}

function renderPublicAnnouncementCard(node, announcement, featured = false) {
  const copy = getAnnouncementCopy(announcement, currentLanguage);
  node.classList.toggle("announcement-card--primary", featured);
  node.classList.toggle("announcement-card--secondary", !featured);
  node.classList.toggle("announcement-card--has-image", Boolean(announcement.image));
  node.style.setProperty("--announcement-accent", announcement.accent || "#f7cade");

  const typeBadge = node.querySelector(".announcement-type-badge");
  const meta = node.querySelector(".announcement-meta");
  const headline = node.querySelector("h3");
  const body = node.querySelector(".announcement-body");

  if (typeBadge) {
    typeBadge.hidden = featured;
    typeBadge.textContent = getAnnouncementTypeLabel(announcement.type);
  }
  if (meta) {
    meta.textContent = copy.meta;
  }
  if (headline) {
    headline.textContent = copy.headline;
  }
  if (body) {
    body.textContent = copy.body;
  }

  applyAnnouncementMedia(node, announcement);
  applyAnnouncementProgress(node, announcement, copy, currentLanguage);
  applyAnnouncementLinks(node, announcement, copy);
}

function renderAnnouncementEditorItem(announcement) {
  const copy = getAnnouncementCopy(announcement, currentLanguage);
  const itemNode = elements.announcementItemTemplate.content.firstElementChild.cloneNode(true);
  const visualThumb = itemNode.querySelector(".announcement-item-visual");
  const titleNode = itemNode.querySelector(".item-title");
  const descriptionNode = itemNode.querySelector(".item-description");
  const progressData = parseProgressInput(copy.progress);

  itemNode.dataset.announcementId = announcement.id;
  itemNode.draggable = true;
  itemNode.classList.toggle("announcement-editor-primary", announcement.type === "primary");
  itemNode.style.setProperty("--announcement-accent", announcement.accent || "#f7cade");

  if (visualThumb) {
    if (announcement.image) {
      visualThumb.style.backgroundImage = `linear-gradient(rgba(255, 236, 243, 0.12), rgba(255, 236, 243, 0.12)), url("${announcement.image}")`;
      visualThumb.style.backgroundSize = "cover";
      visualThumb.style.backgroundPosition = "center";
    } else {
      visualThumb.style.backgroundImage = `linear-gradient(145deg, ${announcement.accent || "#f7cade"}, #ffffff)`;
    }
  }

  if (titleNode) {
    titleNode.textContent = copy.headline;
  }
  if (descriptionNode) {
    const progressLabel = progressData ? ` · ${progressData.label}` : "";
    const progressState = copy.showProgress === false ? " · barra desactivada" : "";
    descriptionNode.textContent = `${getAnnouncementTypeLabel(announcement.type)} · ${copy.meta}${progressLabel}${progressState} · ${copy.body}`;
  }

  const dragHandle = itemNode.querySelector(".drag-handle");
  if (dragHandle) {
    dragHandle.addEventListener("mousedown", () => {
      draggedAnnouncementId = announcement.id;
    });
    dragHandle.addEventListener("touchstart", () => {
      draggedAnnouncementId = announcement.id;
    }, { passive: true });
  }

  itemNode.addEventListener("dragstart", (event) => {
    draggedAnnouncementId = announcement.id;
    itemNode.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", announcement.id);
  });
  itemNode.addEventListener("dragend", () => {
    itemNode.classList.remove("is-dragging");
    draggedAnnouncementId = null;
  });
  itemNode.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
  itemNode.addEventListener("drop", (event) => {
    event.preventDefault();
    const sourceId = draggedAnnouncementId || event.dataTransfer.getData("text/plain");
    reorderAnnouncement(sourceId, announcement.id);
  });

  itemNode.querySelector(".item-edit").addEventListener("click", () => fillAnnouncementForm(announcement.id));
  itemNode.querySelector(".item-delete").addEventListener("click", () => deleteAnnouncement(announcement.id));
  return itemNode;
}

async function init() {
  projects = await loadProjects();
  announcements = await loadAnnouncements();
  renderProjects();
  renderAnnouncements();
  revealElements();
  applyLanguage(currentLanguage);
}

init();
