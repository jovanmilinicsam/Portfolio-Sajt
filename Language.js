/* ==========================================================================
   LANGUAGE.JS
   Serbian / English language system
   ========================================================================== */


const LANGUAGE_STORAGE_KEY = "portfolio-language";

const DEFAULT_LANGUAGE = "en";


/* ==========================================================================
   TRANSLATIONS
   ========================================================================== */

const translations = {


    /* ======================================================================
       ENGLISH
       ====================================================================== */

    en: {


        /* ------------------------------------------------------------------
           SHARED / NAVIGATION
        ------------------------------------------------------------------ */

        "brand.role": "UI / UX DESIGNER",

        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.graphics": "Graphics",
        "nav.contact": "Contact",

        "language.english": "EN",
        "language.serbian": "SR",



        /* ------------------------------------------------------------------
           INDEX.HTML
        ------------------------------------------------------------------ */

        "home.eyebrow": "Portfolio / 2026",

        "home.title.digital": "Digital",
        "home.title.designer": "designer",
        "home.title.crafting": "crafting",
        "home.title.experiences": "experiences.",

        "home.description":
            "I design intuitive digital products, interfaces and visual systems that combine clear functionality with strong visual identity.",

        "home.cta.projects": "Explore my work",
        "home.cta.contact": "Let's work together",

        "home.meta.uiux.value": "UI / UX",
        "home.meta.uiux.label": "Product Design",

        "home.meta.3d.value": "3D",
        "home.meta.3d.label": "Visual Design",

        "home.meta.motion.value": "Motion",
        "home.meta.motion.label": "Interaction",

        "home.model.label": "Interactive 3D",

        "home.rail.selected": "Selected digital work",
        "home.rail.scroll": "Scroll",



        /* ------------------------------------------------------------------
           ABOUT.HTML
        ------------------------------------------------------------------ */

        "about.eyebrow": "About me",

        "about.title.first": "Designing digital",
        "about.title.second": "experiences.",

        "about.lead":
            "I am a UI/UX designer and computer multimedia engineer focused on creating clear, functional and visually distinctive digital experiences.",

        "about.description":
            "My work combines interface design, user experience, visual communication and multimedia. I enjoy transforming ideas into structured digital products through research, prototyping, visual systems and thoughtful interaction design.",


        /* EDUCATION */

        "about.education.eyebrow": "Education",

        "about.education.school": "Academy Politehnika",

        "about.education.degreeLabel":
            "Graduate of Applied Studies",

        "about.education.degree":
            "Computer Multimedia Engineer",

        "about.education.department":
            "Department of Design",

        "about.education.focusLabel":
            "Focus",

        "about.education.focus":
            "UI / UX Design",

        "about.education.description":
            "My academic background combines design, digital media, multimedia technologies and user interface design, providing a foundation for both creative and technically oriented digital projects.",


        /* SKILLS */

        "about.skills.eyebrow": "My skills",

        "about.skills.title":
            "Tools & capabilities",


        /* FIGMA */

        "skill.figma.category":
            "Primary tool",

        "skill.figma.name":
            "Figma",

        "skill.figma.primary":
            "PRIMARY",


        /* ILLUSTRATOR */

        "skill.illustrator.category":
            "Design",

        "skill.illustrator.name":
            "Adobe Illustrator",


        /* PHOTOSHOP */

        "skill.photoshop.category":
            "Design",

        "skill.photoshop.name":
            "Adobe Photoshop",


        /* INDESIGN */

        "skill.indesign.category":
            "Editorial",

        "skill.indesign.name":
            "Adobe InDesign",


        /* CASE STUDIES */

        "skill.caseStudies.category":
            "UX Research",

        "skill.caseStudies.name":
            "Case Studies",


        /* CRM */

        "skill.crm.category":
            "Business",

        "skill.crm.name":
            "Customer Relationship Management",


        /* HTML */

        "skill.html.category":
            "Development",

        "skill.html.name":
            "HTML",


        /* CSS */

        "skill.css.category":
            "Development",

        "skill.css.name":
            "CSS",


        /* JAVASCRIPT */

        "skill.javascript.category":
            "Development",

        "skill.javascript.name":
            "JavaScript",


        /* PYTHON */

        "skill.python.category":
            "Programming",

        "skill.python.name":
            "Python",


        /* JAVA */

        "skill.java.category":
            "Programming",

        "skill.java.name":
            "Java",


        /* MAYA */

        "skill.maya.category":
            "3D",

        "skill.maya.name":
            "Autodesk Maya",


        /* PHOTOGRAPHY */

        "skill.photography.category":
            "Visual",

        "skill.photography.name":
            "Photography",



        /* ------------------------------------------------------------------
           PROJECTS.HTML
        ------------------------------------------------------------------ */

        "projects.eyebrow":
            "Selected work",

        "projects.title.first":
            "Projects",

        "projects.title.second":
            "& case studies.",

        "projects.description":
            "A selection of product design, user experience, interface and visual design projects. Scroll through each case study to explore the process and final outcome.",


        /* PROJECT 01 — TRACKTAIL */

        "project1.description":
            "TrackTail is a mobile application designed to make everyday pet care simpler and more organized. The interface brings together pet profiles, activity, nutrition, location, camera features and account management in one unified experience.",

        "project1.tag1":
            "UX / UI",

        "project1.tag2":
            "Mobile App",

        "project1.tag3":
            "Pet Care",

        "project1.tag4":
            "Figma",

        "project1.prev":
            "Previous TrackTail screen",

        "project1.next":
            "Next TrackTail screen",


        /* PROJECT 02 — PARTNERBRIDGE */

        "project2.description":
            "PartnerBridge is a digital platform designed to help companies discover suitable business partners quickly and efficiently. The experience brings together company profiles, collaboration opportunities and partner discovery through a clear and structured mobile interface.",

        "project2.tag1":
            "UX / UI",

        "project2.tag2":
            "Mobile App",

        "project2.tag3":
            "B2B",

        "project2.tag4":
            "Figma",

        "project2.prev":
            "Previous PartnerBridge screen",

        "project2.next":
            "Next PartnerBridge screen",


        /* PROJECT 03 — FITMI */

        "project3.description":
            "FitMi is an all-in-one fitness platform designed to bring essential parts of a healthy lifestyle into one digital experience. The mobile interface focuses on clear navigation, fitness-related content and quick access to useful services through a bold visual system.",

        "project3.tag1":
            "UX / UI",

        "project3.tag2":
            "Fitness",

        "project3.tag3":
            "Mobile App",

        "project3.tag4":
            "Figma",

        "project3.prev":
            "Previous FitMi screen",

        "project3.next":
            "Next FitMi screen",


        /* PROJECT 04 — TEMPORA */

        "project4.description":
            "Tempora is a modern digital watch store built around a clean visual hierarchy and product-focused shopping experience. The project combines product presentation, storytelling and interface design into a minimal e-commerce system.",

        "project4.tag1":
            "Web Design",

        "project4.tag2":
            "E-commerce",

        "project4.tag3":
            "UI / UX",

        "project4.tag4":
            "Product Design",

        "project4.prev":
            "Previous Tempora screen",

        "project4.next":
            "Next Tempora screen",


        /* PROJECT 05 — RSTRACKS */

        "project5.description":
            "RsTracks is a mobile experience centered around automotive and track-related activities. The interface guides users through the experience from the welcome screen and vehicle selection to track information, reservation and confirmation.",

        "project5.tag1":
            "UX / UI",

        "project5.tag2":
            "Mobile App",

        "project5.tag3":
            "Automotive",

        "project5.tag4":
            "Reservation",

        "project5.prev":
            "Previous RsTracks screen",

        "project5.next":
            "Next RsTracks screen",


        /* PROJECT 06 — GODOG */

        "project6.description":
            "GoDog is a redesign of an existing landing page, created with a stronger focus on visual hierarchy, clarity and a more contemporary web experience. The redesign reorganizes the original content and introduces a cleaner structure while keeping the purpose of the page immediately understandable.",

        "project6.tag1":
            "Web Design",

        "project6.tag2":
            "Redesign",

        "project6.tag3":
            "UI",

        "project6.tag4":
            "Landing Page",

        "project6.prev":
            "Previous GoDog slide",

        "project6.next":
            "Next GoDog slide",


        /* PROJECT 07 — PAPILON */

        "project7.description":
            "Papilon is a first-page concept designed for a startup, with emphasis on establishing a strong first impression and clear visual identity. The interface uses a cinematic hero composition and minimal content structure to introduce the startup in a focused and visually distinctive way.",

        "project7.tag1":
            "Startup",

        "project7.tag2":
            "Web Design",

        "project7.tag3":
            "Landing Page",

        "project7.tag4":
            "UI",



        /* ------------------------------------------------------------------
           GRAPHICS.HTML
        ------------------------------------------------------------------ */

        "graphics.logos":
            "Logos",

        "graphics.posters":
            "Posters",

        "graphics.magazines":
            "Magazines",

        "graphics.visitCards":
            "Visit Cards",



        /* ------------------------------------------------------------------
           CONTACT.HTML
        ------------------------------------------------------------------ */

        "contact.title":
            "Contact",

        "contact.description":
            "Have a project in mind or just want to connect? I’m always open to new opportunities, collaborations, and conversations.",



        /* ------------------------------------------------------------------
           IMAGE ALT TEXT
        ------------------------------------------------------------------ */

        "alt.about.photo":
            "Jovan Milinić",

        "alt.linkedin":
            "LinkedIn icon",

        "alt.instagram":
            "Instagram icon",

        "alt.home.model":
            "Interactive 3D portfolio model",



        /* ------------------------------------------------------------------
           PAGE TITLES
        ------------------------------------------------------------------ */

        "page.home.title":
            "Jovan Milinić — UI / UX Designer",

        "page.about.title":
            "About — Jovan Milinić",

        "page.projects.title":
            "Projects — Jovan Milinić",

        "page.graphics.title":
            "Graphics — Jovan Milinić",

        "page.contact.title":
            "Contact — Jovan Milinić",



        /* ------------------------------------------------------------------
           META DESCRIPTIONS
        ------------------------------------------------------------------ */

        "page.home.description":
            "Portfolio of Jovan Milinić — UI/UX designer focused on digital products, interfaces and visual experiences.",

        "page.about.description":
            "About Jovan Milinić — UI/UX designer and computer multimedia engineer focused on digital products, interfaces and visual experiences.",

        "page.projects.description":
            "Selected UI/UX and digital design projects by Jovan Milinić.",

        "page.graphics.description":
            "Graphic design work by Jovan Milinić including logos, posters, magazines and visual design projects.",

        "page.contact.description":
            "Contact Jovan Milinić for UI/UX design, digital design and creative collaborations."

    },



    /* ======================================================================
       SERBIAN
       ====================================================================== */

    sr: {


        /* ------------------------------------------------------------------
           SHARED / NAVIGATION
        ------------------------------------------------------------------ */

        "brand.role":
            "UI / UX DIZAJNER",

        "nav.home":
            "Početna",

        "nav.about":
            "O meni",

        "nav.projects":
            "Projekti",

        "nav.graphics":
            "Grafika",

        "nav.contact":
            "Kontakt",

        "language.english":
            "EN",

        "language.serbian":
            "SR",



        /* ------------------------------------------------------------------
           INDEX.HTML
        ------------------------------------------------------------------ */

        "home.eyebrow":
            "Portfolio / 2026",

        "home.title.digital":
            "Digitalni",

        "home.title.designer":
            "dizajner",

        "home.title.crafting":
            "koji oblikuje",

        "home.title.experiences":
            "iskustva.",

        "home.description":
            "Dizajniram intuitivne digitalne proizvode, interfejse i vizuelne sisteme koji kombinuju jasnu funkcionalnost sa snažnim vizuelnim identitetom.",

        "home.cta.projects":
            "Pogledaj moje radove",

        "home.cta.contact":
            "Hajde da sarađujemo",

        "home.meta.uiux.value":
            "UI / UX",

        "home.meta.uiux.label":
            "Dizajn proizvoda",

        "home.meta.3d.value":
            "3D",

        "home.meta.3d.label":
            "Vizuelni dizajn",

        "home.meta.motion.value":
            "Motion",

        "home.meta.motion.label":
            "Interakcija",

        "home.model.label":
            "Interaktivni 3D",

        "home.rail.selected":
            "Odabrani digitalni radovi",

        "home.rail.scroll":
            "Skroluj",



        /* ------------------------------------------------------------------
           ABOUT.HTML
        ------------------------------------------------------------------ */

        "about.eyebrow":
            "O meni",

        "about.title.first":
            "Dizajniram digitalna",

        "about.title.second":
            "iskustva.",

        "about.lead":
            "Ja sam UI/UX dizajner i strukovni inženjer računarskih multimedija fokusiran na kreiranje jasnih, funkcionalnih i vizuelno prepoznatljivih digitalnih iskustava.",

        "about.description":
            "Moj rad povezuje dizajn interfejsa, korisničko iskustvo, vizuelne komunikacije i multimediju. Ideje pretvaram u strukturirane digitalne proizvode kroz istraživanje, prototipovanje, vizuelne sisteme i pažljivo osmišljene interakcije.",


        /* EDUCATION */

        "about.education.eyebrow":
            "Obrazovanje",

        "about.education.school":
            "Akademija Politehnika",

        "about.education.degreeLabel":
            "Diplomirani student strukovnih studija",

        "about.education.degree":
            "Strukovni inženjer računarskih multimedija",

        "about.education.department":
            "Odsek za dizajn",

        "about.education.focusLabel":
            "Usmerenje",

        "about.education.focus":
            "UI / UX dizajn",

        "about.education.description":
            "Moje akademsko obrazovanje povezuje dizajn, digitalne medije, multimedijalne tehnologije i dizajn korisničkih interfejsa, pružajući osnovu za kreativne i tehnički orijentisane digitalne projekte.",


        /* SKILLS */

        "about.skills.eyebrow":
            "Moje veštine",

        "about.skills.title":
            "Alati i sposobnosti",


        /* FIGMA */

        "skill.figma.category":
            "Glavni alat",

        "skill.figma.name":
            "Figma",

        "skill.figma.primary":
            "GLAVNI",


        /* ILLUSTRATOR */

        "skill.illustrator.category":
            "Dizajn",

        "skill.illustrator.name":
            "Adobe Illustrator",


        /* PHOTOSHOP */

        "skill.photoshop.category":
            "Dizajn",

        "skill.photoshop.name":
            "Adobe Photoshop",


        /* INDESIGN */

        "skill.indesign.category":
            "Publikacije",

        "skill.indesign.name":
            "Adobe InDesign",


        /* CASE STUDIES */

        "skill.caseStudies.category":
            "UX istraživanje",

        "skill.caseStudies.name":
            "Studije slučaja",


        /* CRM */

        "skill.crm.category":
            "Poslovanje",

        "skill.crm.name":
            "Upravljanje odnosima sa klijentima",


        /* HTML */

        "skill.html.category":
            "Razvoj",

        "skill.html.name":
            "HTML",


        /* CSS */

        "skill.css.category":
            "Razvoj",

        "skill.css.name":
            "CSS",


        /* JAVASCRIPT */

        "skill.javascript.category":
            "Razvoj",

        "skill.javascript.name":
            "JavaScript",


        /* PYTHON */

        "skill.python.category":
            "Programiranje",

        "skill.python.name":
            "Python",


        /* JAVA */

        "skill.java.category":
            "Programiranje",

        "skill.java.name":
            "Java",


        /* MAYA */

        "skill.maya.category":
            "3D",

        "skill.maya.name":
            "Autodesk Maya",


        /* PHOTOGRAPHY */

        "skill.photography.category":
            "Vizuelno",

        "skill.photography.name":
            "Fotografija",



        /* ------------------------------------------------------------------
           PROJECTS.HTML
        ------------------------------------------------------------------ */

        "projects.eyebrow":
            "Odabrani radovi",

        "projects.title.first":
            "Projekti",

        "projects.title.second":
            "i studije slučaja.",

        "projects.description":
            "Izbor projekata iz oblasti dizajna proizvoda, korisničkog iskustva, interfejsa i vizuelnog dizajna. Pregledajte svaki projekat kako biste istražili proces rada i konačno rešenje.",


        /* PROJECT 01 — TRACKTAIL */

        "project1.description":
            "TrackTail je mobilna aplikacija dizajnirana da svakodnevnu brigu o ljubimcima učini jednostavnijom i organizovanijom. Interfejs objedinjuje profile ljubimaca, aktivnosti, ishranu, lokaciju, kameru i upravljanje nalogom u jedinstveno iskustvo.",

        "project1.tag1":
            "UX / UI",

        "project1.tag2":
            "Mobilna aplikacija",

        "project1.tag3":
            "Briga o ljubimcima",

        "project1.tag4":
            "Figma",

        "project1.prev":
            "Prethodni TrackTail ekran",

        "project1.next":
            "Sledeći TrackTail ekran",


        /* PROJECT 02 — PARTNERBRIDGE */

        "project2.description":
            "PartnerBridge je digitalna platforma dizajnirana da kompanijama omogući brzo i efikasno pronalaženje odgovarajućih poslovnih partnera. Iskustvo objedinjuje profile kompanija, mogućnosti saradnje i pronalaženje partnera kroz jasan i strukturiran mobilni interfejs.",

        "project2.tag1":
            "UX / UI",

        "project2.tag2":
            "Mobilna aplikacija",

        "project2.tag3":
            "B2B",

        "project2.tag4":
            "Figma",

        "project2.prev":
            "Prethodni PartnerBridge ekran",

        "project2.next":
            "Sledeći PartnerBridge ekran",


        /* PROJECT 03 — FITMI */

        "project3.description":
            "FitMi je sveobuhvatna fitnes platforma dizajnirana da najvažnije elemente zdravog načina života objedini u jednom digitalnom iskustvu. Mobilni interfejs fokusiran je na jasnu navigaciju, fitnes sadržaj i brz pristup korisnim uslugama kroz prepoznatljiv vizuelni sistem.",

        "project3.tag1":
            "UX / UI",

        "project3.tag2":
            "Fitnes",

        "project3.tag3":
            "Mobilna aplikacija",

        "project3.tag4":
            "Figma",

        "project3.prev":
            "Prethodni FitMi ekran",

        "project3.next":
            "Sledeći FitMi ekran",


        /* PROJECT 04 — TEMPORA */

        "project4.description":
            "Tempora je moderna digitalna prodavnica satova izgrađena oko jasne vizuelne hijerarhije i iskustva kupovine usmerenog na proizvod. Projekat kombinuje predstavljanje proizvoda, pripovedanje i dizajn interfejsa u minimalistički sistem elektronske trgovine.",

        "project4.tag1":
            "Veb dizajn",

        "project4.tag2":
            "E-trgovina",

        "project4.tag3":
            "UI / UX",

        "project4.tag4":
            "Dizajn proizvoda",

        "project4.prev":
            "Prethodni Tempora ekran",

        "project4.next":
            "Sledeći Tempora ekran",


        /* PROJECT 05 — RSTRACKS */

        "project5.description":
            "RsTracks je mobilno iskustvo usmereno na automobilizam i aktivnosti na trkačkim stazama. Interfejs vodi korisnika kroz ceo proces, od početnog ekrana i izbora vozila do informacija o stazi, rezervacije i potvrde.",

        "project5.tag1":
            "UX / UI",

        "project5.tag2":
            "Mobilna aplikacija",

        "project5.tag3":
            "Automobilizam",

        "project5.tag4":
            "Rezervacije",

        "project5.prev":
            "Prethodni RsTracks ekran",

        "project5.next":
            "Sledeći RsTracks ekran",


        /* PROJECT 06 — GODOG */

        "project6.description":
            "GoDog je redizajn postojeće landing stranice, napravljen sa većim fokusom na vizuelnu hijerarhiju, jasnoću i savremenije veb iskustvo. Redizajn reorganizuje originalni sadržaj i uvodi čistiju strukturu, uz očuvanje jasne svrhe stranice.",

        "project6.tag1":
            "Veb dizajn",

        "project6.tag2":
            "Redizajn",

        "project6.tag3":
            "UI",

        "project6.tag4":
            "Landing stranica",

        "project6.prev":
            "Prethodni GoDog prikaz",

        "project6.next":
            "Sledeći GoDog prikaz",


        /* PROJECT 07 — PAPILON */

        "project7.description":
            "Papilon je koncept početne stranice dizajniran za startup, sa naglaskom na stvaranje snažnog prvog utiska i jasnog vizuelnog identiteta. Interfejs koristi filmsku hero kompoziciju i minimalnu strukturu sadržaja kako bi startup predstavio fokusirano i vizuelno prepoznatljivo.",

        "project7.tag1":
            "Startup",

        "project7.tag2":
            "Veb dizajn",

        "project7.tag3":
            "Landing stranica",

        "project7.tag4":
            "UI",



        /* ------------------------------------------------------------------
           GRAPHICS.HTML
        ------------------------------------------------------------------ */

        "graphics.logos":
            "Logotipi",

        "graphics.posters":
            "Posteri",

        "graphics.magazines":
            "Časopisi",

        "graphics.visitCards":
            "Vizit karte",



        /* ------------------------------------------------------------------
           CONTACT.HTML
        ------------------------------------------------------------------ */

        "contact.title":
            "Kontakt",

        "contact.description":
            "Imate projekat na umu ili želite da se povežemo? Uvek sam otvoren za nove prilike, saradnje i razgovore.",



        /* ------------------------------------------------------------------
           IMAGE ALT TEXT
        ------------------------------------------------------------------ */

        "alt.about.photo":
            "Jovan Milinić",

        "alt.linkedin":
            "LinkedIn ikonica",

        "alt.instagram":
            "Instagram ikonica",

        "alt.home.model":
            "Interaktivni 3D model portfolija",



        /* ------------------------------------------------------------------
           PAGE TITLES
        ------------------------------------------------------------------ */

        "page.home.title":
            "Jovan Milinić — UI / UX dizajner",

        "page.about.title":
            "O meni — Jovan Milinić",

        "page.projects.title":
            "Projekti — Jovan Milinić",

        "page.graphics.title":
            "Grafika — Jovan Milinić",

        "page.contact.title":
            "Kontakt — Jovan Milinić",



        /* ------------------------------------------------------------------
           META DESCRIPTIONS
        ------------------------------------------------------------------ */

        "page.home.description":
            "Portfolio Jovana Milinića — UI/UX dizajnera fokusiranog na digitalne proizvode, interfejse i vizuelna iskustva.",

        "page.about.description":
            "Jovan Milinić — UI/UX dizajner i strukovni inženjer računarskih multimedija fokusiran na digitalne proizvode, interfejse i vizuelna iskustva.",

        "page.projects.description":
            "Odabrani UI/UX i projekti digitalnog dizajna Jovana Milinića.",

        "page.graphics.description":
            "Radovi Jovana Milinića iz oblasti grafičkog dizajna, uključujući logotipe, postere, časopise i vizuelni dizajn.",

        "page.contact.description":
            "Kontaktirajte Jovana Milinića za UI/UX dizajn, digitalni dizajn i kreativne saradnje."

    }

};



/* ==========================================================================
   PAGE METADATA
   ========================================================================== */

const pageMetadata = {

    home: {
        title: "page.home.title",
        description: "page.home.description"
    },

    about: {
        title: "page.about.title",
        description: "page.about.description"
    },

    projects: {
        title: "page.projects.title",
        description: "page.projects.description"
    },

    graphics: {
        title: "page.graphics.title",
        description: "page.graphics.description"
    },

    contact: {
        title: "page.contact.title",
        description: "page.contact.description"
    }

};



/* ==========================================================================
   GET SAVED LANGUAGE
   ========================================================================== */

function getSavedLanguage(){

    const savedLanguage =
        localStorage.getItem(
            LANGUAGE_STORAGE_KEY
        );


    if(
        savedLanguage === "en" ||
        savedLanguage === "sr"
    ){

        return savedLanguage;

    }


    return DEFAULT_LANGUAGE;

}



/* ==========================================================================
   GET TRANSLATION
   ========================================================================== */

function getTranslation(
    language,
    key
){

    const languageData =
        translations[language];


    if(
        languageData &&
        Object.prototype.hasOwnProperty.call(
            languageData,
            key
        )
    ){

        return languageData[key];

    }


    if(
        translations[DEFAULT_LANGUAGE] &&
        Object.prototype.hasOwnProperty.call(
            translations[DEFAULT_LANGUAGE],
            key
        )
    ){

        return translations[DEFAULT_LANGUAGE][key];

    }


    console.warn(
        `Missing translation: ${key}`
    );


    return key;

}



/* ==========================================================================
   TRANSLATE TEXT ELEMENTS
   ========================================================================== */

function translateTextElements(language){

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(
        element => {

            const key =
                element.dataset.i18n;


            if(!key){
                return;
            }


            element.textContent =
                getTranslation(
                    language,
                    key
                );

        }
    );

}



/* ==========================================================================
   TRANSLATE HTML CONTENT
   Use only when HTML inside translation is intentionally required
   ========================================================================== */

function translateHtmlElements(language){

    const elements =
        document.querySelectorAll(
            "[data-i18n-html]"
        );


    elements.forEach(
        element => {

            const key =
                element.dataset.i18nHtml;


            if(!key){
                return;
            }


            element.innerHTML =
                getTranslation(
                    language,
                    key
                );

        }
    );

}



/* ==========================================================================
   TRANSLATE ALT ATTRIBUTES
   ========================================================================== */

function translateAltAttributes(language){

    const elements =
        document.querySelectorAll(
            "[data-i18n-alt]"
        );


    elements.forEach(
        element => {

            const key =
                element.dataset.i18nAlt;


            if(!key){
                return;
            }


            element.setAttribute(
                "alt",
                getTranslation(
                    language,
                    key
                )
            );

        }
    );

}



/* ==========================================================================
   TRANSLATE ARIA LABELS
   ========================================================================== */

function translateAriaLabels(language){

    const elements =
        document.querySelectorAll(
            "[data-i18n-aria-label]"
        );


    elements.forEach(
        element => {

            const key =
                element.dataset.i18nAriaLabel;


            if(!key){
                return;
            }


            element.setAttribute(
                "aria-label",
                getTranslation(
                    language,
                    key
                )
            );

        }
    );

}



/* ==========================================================================
   TRANSLATE TITLE ATTRIBUTES
   ========================================================================== */

function translateTitleAttributes(language){

    const elements =
        document.querySelectorAll(
            "[data-i18n-title]"
        );


    elements.forEach(
        element => {

            const key =
                element.dataset.i18nTitle;


            if(!key){
                return;
            }


            element.setAttribute(
                "title",
                getTranslation(
                    language,
                    key
                )
            );

        }
    );

}



/* ==========================================================================
   TRANSLATE PLACEHOLDERS
   ========================================================================== */

function translatePlaceholders(language){

    const elements =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    elements.forEach(
        element => {

            const key =
                element.dataset.i18nPlaceholder;


            if(!key){
                return;
            }


            element.setAttribute(
                "placeholder",
                getTranslation(
                    language,
                    key
                )
            );

        }
    );

}



/* ==========================================================================
   UPDATE PAGE METADATA
   ========================================================================== */

function updatePageMetadata(language){

    const page =
        document.body.dataset.page;


    if(
        !page ||
        !pageMetadata[page]
    ){

        return;

    }


    const metadata =
        pageMetadata[page];


    /* PAGE TITLE */

    document.title =
        getTranslation(
            language,
            metadata.title
        );


    /* META DESCRIPTION */

    const descriptionMeta =
        document.querySelector(
            'meta[name="description"]'
        );


    if(descriptionMeta){

        descriptionMeta.setAttribute(
            "content",
            getTranslation(
                language,
                metadata.description
            )
        );

    }

}



/* ==========================================================================
   UPDATE HTML LANGUAGE ATTRIBUTE
   ========================================================================== */

function updateDocumentLanguage(language){

    if(language === "sr"){

        document.documentElement.lang =
            "sr-Latn";

    }else{

        document.documentElement.lang =
            "en";

    }

}



/* ==========================================================================
   UPDATE LANGUAGE SWITCHER
   ========================================================================== */

function updateLanguageSwitcher(language){

    const buttons =
        document.querySelectorAll(
            "[data-language]"
        );


    buttons.forEach(
        button => {

            const buttonLanguage =
                button.dataset.language;


            const isActive =
                buttonLanguage === language;


            button.classList.toggle(
                "active",
                isActive
            );


            button.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );

        }
    );

}



/* ==========================================================================
   APPLY LANGUAGE
   ========================================================================== */

function applyLanguage(
    language,
    save = true
){

    if(
        language !== "en" &&
        language !== "sr"
    ){

        language =
            DEFAULT_LANGUAGE;

    }


    translateTextElements(language);

    translateHtmlElements(language);

    translateAltAttributes(language);

    translateAriaLabels(language);

    translateTitleAttributes(language);

    translatePlaceholders(language);

    updatePageMetadata(language);

    updateDocumentLanguage(language);

    updateLanguageSwitcher(language);


    document.body.dataset.language =
        language;


    if(save){

        localStorage.setItem(
            LANGUAGE_STORAGE_KEY,
            language
        );

    }


    window.dispatchEvent(
        new CustomEvent(
            "languagechange",
            {
                detail: {
                    language: language
                }
            }
        )
    );

}



/* ==========================================================================
   LANGUAGE SWITCHER EVENTS
   ========================================================================== */

function initializeLanguageButtons(){

    const buttons =
        document.querySelectorAll(
            "[data-language]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const selectedLanguage =
                        button.dataset.language;


                    applyLanguage(
                        selectedLanguage
                    );

                }
            );

        }
    );

}



/* ==========================================================================
   OPTIONAL GLOBAL FUNCTIONS

   These allow changing language manually:

   setLanguage("sr");
   setLanguage("en");

   getCurrentLanguage();
   ========================================================================== */

window.setLanguage =
    function(language){

        applyLanguage(
            language
        );

    };


window.getCurrentLanguage =
    function(){

        return (
            document.body.dataset.language ||
            getSavedLanguage()
        );

    };



/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeLanguageButtons();


        const savedLanguage =
            getSavedLanguage();


        applyLanguage(
            savedLanguage,
            false
        );

    }
);