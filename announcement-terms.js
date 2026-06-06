const ANNOUNCEMENT_TERMS_FILE = "./announcement-terms.json";
const ANNOUNCEMENT_TERMS_STORAGE_KEY = "alphy-portfolio-announcement-terms-draft";
const LANGUAGE_KEY = "alphy-portfolio-language";

const translations = {
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mi",
    "nav.announcements": "Comunicados",
    "nav.contact": "Contacto",
    "announcementTermsPage.eyebrow": "Comunicado",
    "announcementTermsPage.updated": "Ultima actualizacion",
    "announcementTermsPage.points": "Puntos clave",
    "announcementTermsPage.closing": "Cierre",
    "announcementTermsPage.back": "Volver al comunicado",
    "announcementTermsPage.window": "AnnouncementTerms.exe",
    "footer.terms": "Terminos y condiciones"
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.announcements": "Announcements",
    "nav.contact": "Contact",
    "announcementTermsPage.eyebrow": "Announcement",
    "announcementTermsPage.updated": "Last update",
    "announcementTermsPage.points": "Key points",
    "announcementTermsPage.closing": "Closing",
    "announcementTermsPage.back": "Back to announcement",
    "announcementTermsPage.window": "AnnouncementTerms.exe",
    "footer.terms": "Terms and conditions"
  }
};

const fallbackAnnouncementTerms = {
  updatedAt: "2026-06-05",
  localized: {
    es: {
      title: "Términos del comunicado principal",
      intro: "Este comunicado principal incluye condiciones de uso separadas de los términos generales del sitio.\n\nAplica solo al anuncio destacado de comisiones gratuitas.\n\nLee el texto completo antes de pedir una comisión.",
      points: [
        "La disponibilidad es limitada y no garantiza aceptación.",
        "Maximo 1 modelo por persona.",
        "El artista puede aceptar o rechazar solicitudes y referencias.",
        "Los plazos pueden variar según complejidad, disponibilidad y carga de trabajo.",
        "Las revisiones son limitadas y se pueden rechazar cambios excesivos.",
        "El trabajo sigue siendo propiedad intelectual del artista y solo concede uso personal no exclusivo.",
        "El artista puede publicar renders, WIPs y vistas previas en portafolio o redes.",
        "El acoso, el spam o la presión excesiva pueden terminar en cancelación o bloqueo."
      ],
      closing: "Si quieres reutilizar o compartir esta información, revisa primero el comunicado completo."
    },
    en: {
      title: "Primary announcement terms",
      intro: "This featured announcement includes usage conditions that are separate from the general site terms.\n\nIt only applies to the highlighted free commission announcement.\n\nPlease read the full text before requesting a commission.",
      points: [
        "Availability is limited and acceptance is not guaranteed.",
        "Maximum 1 model per person.",
        "The artist may accept or reject requests and references.",
        "Timelines can vary depending on complexity, availability, and workload.",
        "Revisions are limited and excessive changes may be rejected.",
        "The work remains the artist's intellectual property and only grants a personal, non-exclusive usage license.",
        "The artist may post renders, WIPs, and previews in a portfolio or on social media.",
        "Harassment, spam, or excessive pressure may result in cancellation or blocking."
      ],
      closing: "If you want to reuse or share this information, review the full announcement first."
    }
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
let announcementTerms = null;

function normalizeTerms(data) {
  const source = data && typeof data === "object" ? data : {};
  const localized = source.localized && typeof source.localized === "object" ? source.localized : {};
  const baseEs = localized.es && typeof localized.es === "object" ? localized.es : source;
  const baseEn = localized.en && typeof localized.en === "object" ? localized.en : source;

  return {
    updatedAt: typeof source.updatedAt === "string" && source.updatedAt.trim()
      ? source.updatedAt.trim()
      : fallbackAnnouncementTerms.updatedAt,
    localized: {
      es: {
        title: typeof baseEs.title === "string" && baseEs.title.trim() ? baseEs.title.trim() : fallbackAnnouncementTerms.localized.es.title,
        intro: typeof baseEs.intro === "string" ? baseEs.intro.trim() : fallbackAnnouncementTerms.localized.es.intro,
        points: Array.isArray(baseEs.points) ? baseEs.points.map((point) => String(point).trim()).filter(Boolean) : fallbackAnnouncementTerms.localized.es.points,
        closing: typeof baseEs.closing === "string" ? baseEs.closing.trim() : fallbackAnnouncementTerms.localized.es.closing,
      },
      en: {
        title: typeof baseEn.title === "string" && baseEn.title.trim() ? baseEn.title.trim() : fallbackAnnouncementTerms.localized.en.title,
        intro: typeof baseEn.intro === "string" ? baseEn.intro.trim() : fallbackAnnouncementTerms.localized.en.intro,
        points: Array.isArray(baseEn.points) ? baseEn.points.map((point) => String(point).trim()).filter(Boolean) : fallbackAnnouncementTerms.localized.en.points,
        closing: typeof baseEn.closing === "string" ? baseEn.closing.trim() : fallbackAnnouncementTerms.localized.en.closing,
      }
    }
  };
}

function loadDraftAnnouncementTerms() {
  const saved = localStorage.getItem(ANNOUNCEMENT_TERMS_STORAGE_KEY);
  if (!saved) {
    return null;
  }

  try {
    return normalizeTerms(JSON.parse(saved));
  } catch {
    return null;
  }
}

async function loadAnnouncementTerms() {
  const draft = loadDraftAnnouncementTerms();
  if (draft) {
    return draft;
  }

  try {
    const response = await fetch(ANNOUNCEMENT_TERMS_FILE, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("announcement terms file failed");
    }
    return normalizeTerms(await response.json());
  } catch {
    return normalizeTerms(fallbackAnnouncementTerms);
  }
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "es";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "es"
    ? "Terminos del comunicado principal | Pawshop"
    : "Primary announcement terms | Pawshop";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[currentLanguage][node.dataset.i18n];
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-lang-option]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.langOption === currentLanguage);
  });
}

function renderAnnouncementTerms() {
  if (!announcementTerms) {
    return;
  }

  const copy = announcementTerms.localized[currentLanguage] || announcementTerms.localized.es || announcementTerms.localized.en;
  document.getElementById("announcement-terms-title").textContent = copy.title;
  document.getElementById("announcement-terms-updated-at").textContent = announcementTerms.updatedAt;
  document.getElementById("announcement-terms-intro").textContent = copy.intro;

  const pointsNode = document.getElementById("announcement-terms-points");
  pointsNode.innerHTML = "";
  copy.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    pointsNode.appendChild(li);
  });

  document.getElementById("announcement-terms-closing").textContent = copy.closing;
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

async function init() {
  announcementTerms = await loadAnnouncementTerms();
  revealElements();
  applyLanguage(currentLanguage);
  renderAnnouncementTerms();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLanguage(currentLanguage === "es" ? "en" : "es");
  renderAnnouncementTerms();
});

init();
