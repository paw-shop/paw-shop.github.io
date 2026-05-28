const TERMS_FILE = "./alphy-terms.json";
const TERMS_STORAGE_KEY = "alphy-portfolio-terms-draft";
const LANGUAGE_KEY = "alphy-portfolio-language";

const translations = {
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mi",
    "nav.announcements": "Comunicados",
    "nav.contact": "Contacto",
    "terms.eyebrow": "Documentos",
    "terms.updated": "Ultima actualizacion",
    "terms.points": "Puntos clave",
    "terms.closing": "Cierre",
    "terms.back": "Volver al portfolio",
    "terms.window": "Terminos.exe",
    "terms.home": "Volver al inicio"
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.announcements": "Announcements",
    "nav.contact": "Contact",
    "terms.eyebrow": "Documents",
    "terms.updated": "Last update",
    "terms.points": "Key points",
    "terms.closing": "Closing",
    "terms.back": "Back to portfolio",
    "terms.window": "Terms.exe",
    "terms.home": "Back to home"
  }
};

const fallbackTerms = {
  updatedAt: "2026-05-27",
  localized: {
    es: {
      title: "Términos y condiciones",
      intro: "Al usar este portfolio aceptas las reglas básicas de uso, atribución y comunicación del material publicado aquí.",
      points: [
        "Las imágenes, renders y textos mostrados en este sitio pertenecen a sus respectivos autores o a Pawshop/Alphy según corresponda.",
        "No reutilices, redistribuyas ni vendas el contenido sin permiso expreso.",
        "Si haces una comisión o pedido, los plazos, entregas y revisiones se acuerdan por separado antes de iniciar el trabajo.",
        "Los enlaces externos pueden cambiar o dejar de funcionar sin previo aviso."
      ],
      closing: "Si necesitas aclarar algo, escribe antes de usar el material o de iniciar una comisión."
    },
    en: {
      title: "Terms and conditions",
      intro: "By using this portfolio you agree to the basic rules for use, attribution, and communication around the material published here.",
      points: [
        "Images, renders, and text shown on this site belong to their respective authors or to Pawshop/Alphy as applicable.",
        "Do not reuse, redistribute, or sell the content without explicit permission.",
        "If you place a commission or request, timelines, deliverables, and revisions are agreed separately before work begins.",
        "External links may change or stop working without prior notice."
      ],
      closing: "If anything is unclear, please ask before using the material or starting a commission."
    }
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
let terms = null;

function normalizeTerms(data) {
  const source = data && typeof data === "object" ? data : {};
  const localized = source.localized && typeof source.localized === "object" ? source.localized : {};
  const baseEs = localized.es && typeof localized.es === "object" ? localized.es : source;
  const baseEn = localized.en && typeof localized.en === "object" ? localized.en : source;

  return {
    updatedAt: typeof source.updatedAt === "string" && source.updatedAt.trim()
      ? source.updatedAt.trim()
      : fallbackTerms.updatedAt,
    localized: {
      es: {
        title: typeof baseEs.title === "string" && baseEs.title.trim() ? baseEs.title.trim() : fallbackTerms.localized.es.title,
        intro: typeof baseEs.intro === "string" ? baseEs.intro.trim() : fallbackTerms.localized.es.intro,
        points: Array.isArray(baseEs.points) ? baseEs.points.map((point) => String(point).trim()).filter(Boolean) : fallbackTerms.localized.es.points,
        closing: typeof baseEs.closing === "string" ? baseEs.closing.trim() : fallbackTerms.localized.es.closing,
      },
      en: {
        title: typeof baseEn.title === "string" && baseEn.title.trim() ? baseEn.title.trim() : fallbackTerms.localized.en.title,
        intro: typeof baseEn.intro === "string" ? baseEn.intro.trim() : fallbackTerms.localized.en.intro,
        points: Array.isArray(baseEn.points) ? baseEn.points.map((point) => String(point).trim()).filter(Boolean) : fallbackTerms.localized.en.points,
        closing: typeof baseEn.closing === "string" ? baseEn.closing.trim() : fallbackTerms.localized.en.closing,
      }
    }
  };
}

function loadDraftTerms() {
  const saved = localStorage.getItem(TERMS_STORAGE_KEY);
  if (!saved) {
    return null;
  }

  try {
    return normalizeTerms(JSON.parse(saved));
  } catch {
    return null;
  }
}

async function loadTerms() {
  const draft = loadDraftTerms();
  if (draft) {
    return draft;
  }

  try {
    const response = await fetch(TERMS_FILE, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("terms file failed");
    }
    return normalizeTerms(await response.json());
  } catch {
    return normalizeTerms(fallbackTerms);
  }
}

function getTermsCopy(language = currentLanguage) {
  const data = terms && terms.localized ? terms.localized[language] || terms.localized.es || terms.localized.en : null;
  if (!data) {
    return normalizeTerms(fallbackTerms).localized[language];
  }
  return data;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "es";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "es"
    ? "Terminos y condiciones | Pawshop"
    : "Terms and conditions | Pawshop";

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

function renderTerms() {
  if (!terms) {
    return;
  }

  const copy = getTermsCopy(currentLanguage);
  document.getElementById("terms-title").textContent = copy.title;
  document.getElementById("terms-updated-at").textContent = terms.updatedAt;
  document.getElementById("terms-intro").textContent = copy.intro;

  const pointsNode = document.getElementById("terms-points");
  pointsNode.innerHTML = "";
  copy.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    pointsNode.appendChild(li);
  });

  document.getElementById("terms-closing").textContent = copy.closing;
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
  terms = await loadTerms();
  revealElements();
  applyLanguage(currentLanguage);
  renderTerms();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLanguage(currentLanguage === "es" ? "en" : "es");
  renderTerms();
});

init();
