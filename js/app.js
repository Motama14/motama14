
const toggle = document.getElementById("toggle");

const elements = document.querySelectorAll("p, a, i, h1, h2, h3, li, button, body");

toggle.addEventListener("click", () => {
    if(toggle.classList.contains("fa-regular")) {
        toggle.classList.remove("fa-regular");
        toggle.classList.add("fa-solid");

        elements.forEach(e => {
            e.classList.remove("light");
        });

    } else {
        toggle.classList.add("fa-regular");
        toggle.classList.remove("fa-solid");

        elements.forEach(e => {
            e.classList.add("light");
        });
    }
});

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView();
});


const langToggle = document.getElementById("lang-toggle");

let currentLang = "en";
try {
    currentLang = localStorage.getItem("lang") || "en";
} catch (e) {}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    langToggle.textContent = lang.toUpperCase();

    document.querySelectorAll("[data-i18n]").forEach(e => {
        const text = translations[lang][e.dataset.i18n];
        if (text !== undefined) {
            e.innerHTML = text;
        }
    });

    try {
        localStorage.setItem("lang", lang);
    } catch (e) {}

    fitHeroTitle();
}

const heroTitle = document.querySelector(".hero h1");

function fitHeroTitle() {
    heroTitle.style.fontSize = "";

    if (heroTitle.scrollWidth > heroTitle.clientWidth) {
        const size = parseFloat(getComputedStyle(heroTitle).fontSize);
        heroTitle.style.fontSize = (size * heroTitle.clientWidth / heroTitle.scrollWidth) + "px";
    }
}

window.addEventListener("resize", fitHeroTitle);
document.fonts.ready.then(fitHeroTitle);

langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "es" : "en");
});

setLanguage(currentLang);
