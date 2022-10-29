let lang = "en";

function setLangPL() {
    lang = "pl";
    console.log("Ustawiono jezyk na polski");
    document.documentElement.setAttribute("lang", 'pl');
    /* Navbar translation*/
    document.getElementById("about-me-link").innerHTML = "O mnie";
    document.getElementById("skills-link").innerHTML = "Umiejętności";
    document.getElementById("education-link").innerHTML = "Wykształcenie";
    document.getElementById("experience-link").innerHTML = "Doświadczenie";
    document.getElementById("certification-link").innerHTML = "Certyfikaty";
    document.getElementById("project-link").innerHTML = "Projekty";
    document.getElementById("contact-link").innerHTML = "Kontakt";
    /*Hello section translation */
    document.getElementById("hello-section-welcome").innerHTML = "Cześć, jestem Tomek";
    document.getElementById("hello-section-description").innerHTML = "Programista PHP";
    /* about me section translation */
    document.getElementById("aboutMe-section-label").innerHTML = "O mnie";
    document.getElementById("aboutMe-section-description").innerHTML = "Witaj, nazywam się Tomasz Woytkowiak. Studiuję informatykę na Collegium Da vinci w Poznaniu.\n" +
        "                        W swoich projektach wykorzystuje PHP , obecnie uczę się wykorzystania Frameworku Symfony 5.\n" +
        "                        Hobbystycznie tworzę różne rzeczy przy wykorzystaniu Arduino.";
    document.getElementById("aboutMe-section-hobby-label").innerHTML = "Hobby:";
    document.getElementById("aboutMe-section-hobby1").innerHTML = "Programowanie";
    document.getElementById("aboutMe-section-hobby2").innerHTML = "Gry komputerowe";
    document.getElementById("aboutMe-section-hobby3").innerHTML = "Numizmatyka";
    /* skills section translate*/
    document.getElementById("skills-section-label").innerHTML = "Umiejętności";
    //TODO switch skills id to more accurate
    document.getElementById("skills-section-skill1-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill2-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill3-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill4-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill5-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill6-dsc").innerHTML = "Opis co umiem";//TODO
    /* education section translate */
    document.getElementById("education-section-desciption").innerHTML = "Wykształcenie";
    document.getElementById("education-section-school2-date").setAttribute("data-date", "2021-obecnie");
    document.getElementById("education-section-school2-title").innerHTML = "Inżynier Informatyk";
    document.getElementById("education-section-school2-name").innerHTML = "Collegium Da Vinci w Poznaniu";
    document.getElementById("education-section-school1-date").setAttribute("data-date", "2013-2017");
    document.getElementById("education-section-school1-title").innerHTML = "Technik Informatyk";
    document.getElementById("education-section-school1-name").innerHTML = "Zespół Szkół Technicznych w Lesznie";
    /* experience section translate */
    document.getElementById("experience-section-label").innerHTML = "Doświadczenie";
    document.getElementById("experience-section-work1-date").setAttribute("data-date", "N/A");
    document.getElementById("experience-section-work1-job").innerHTML = "Programista PHP";
    document.getElementById("experience-section-work1-company").innerHTML = "Brak Firmy";
    document.getElementById("experience-section-work1-dsc").innerHTML = "Nie mam jeszcze żadnego doświadczenia";
    /*certification section translate */
    document.getElementById("certification-section-label").innerHTML = "Certyfikaty";
    document.getElementById("certification-section-certificate1-name").innerHTML = "Nazwa Certyfikatu";
    document.getElementById("certification-section-certificate1-company").innerHTML = "Firma wystawiajace certyfikat";
    document.getElementById("certification-section-certificate1-check").innerHTML = "Zobacz Certifikat";
    /*project section translate */
    document.getElementById("project-section-label").innerHTML = "Projekty";
    document.getElementById("project-section-project1-name").innerHTML = "Projekt1";
    document.getElementById("project-section-project2-name").innerHTML = "Projekt2";
    document.getElementById("project-section-project3-name").innerHTML = "Projekt2";

    /* Contact Section translate*/
    document.getElementById("contact-section-label").innerHTML = "Kontakt";
}

function setLangEN() {
    lang = "en"
    console.log("Set lang to en");
    document.documentElement.setAttribute("lang", 'en');
    /* Navbar translation*/
    document.getElementById("about-me-link").innerHTML = "About me";
    document.getElementById("skills-link").innerHTML = "Skills";
    document.getElementById("education-link").innerHTML = "Education";
    document.getElementById("experience-link").innerHTML = "Experience";
    document.getElementById("certification-link").innerHTML = "Certifications";
    document.getElementById("project-link").innerHTML = "Project";
    document.getElementById("contact-link").innerHTML = "Contact";
    /*Hello section translation */
    document.getElementById("hello-section-welcome").innerHTML = "Hi, im Tomek";
    document.getElementById("hello-section-description").innerHTML = "PHP Developer";
    /* about me section translation */
    document.getElementById("aboutMe-section-label").innerHTML = "About Me";
    document.getElementById("aboutMe-section-description").innerHTML = "Hi, my name Tomasz Woytkowiak. Im currently studing IT at Collegium Da Vinci in Poznań.\n" +
        "                        In my project i use PHP , curently i learn usage Symfony 5 usage.\n" +
        "                        As a hobby, I create different things using Arduino.";
    document.getElementById("aboutMe-section-hobby-label").innerHTML = "Hobby:";
    document.getElementById("aboutMe-section-hobby1").innerHTML = "Programming";
    document.getElementById("aboutMe-section-hobby2").innerHTML = "Computer Games";
    document.getElementById("aboutMe-section-hobby3").innerHTML = "Collecting Coins";
    /* skills section translate*/
    document.getElementById("skills-section-label").innerHTML = "Tech stack";
    //TODO switch skills id to more accurate
    document.getElementById("skills-section-skill1-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill2-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill3-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill4-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill5-dsc").innerHTML = "Opis co umiem";//TODO
    document.getElementById("skills-section-skill6-dsc").innerHTML = "Opis co umiem";//TODO
    /* education section translate */
    document.getElementById("education-section-desciption").innerHTML = "Education";
    document.getElementById("education-section-school2-date").setAttribute("data-date", "2021-present");
    document.getElementById("education-section-school2-title").innerHTML = "IT Engineer";
    document.getElementById("education-section-school2-name").innerHTML = "Collegium Da Vinci in Poznań";
    document.getElementById("education-section-school1-date").setAttribute("data-date", "2013-2017");
    document.getElementById("education-section-school1-title").innerHTML = "IT Technician";
    document.getElementById("education-section-school1-name").innerHTML = "Zespół Szkół Technicznych in Leszno";
    /* experience section translate */
    document.getElementById("experience-section-label").innerHTML = "Experience";
    document.getElementById("experience-section-work1-date").setAttribute("data-date", "N/A");
    document.getElementById("experience-section-work1-job").innerHTML = "PHP Developer";
    document.getElementById("experience-section-work1-company").innerHTML = "No company";
    document.getElementById("experience-section-work1-dsc").innerHTML = "Im not have any experience";
    /*certification section translate */
    document.getElementById("certification-section-label").innerHTML = "Certification";
    document.getElementById("certification-section-certificate1-name").innerHTML = "Name certificate";
    document.getElementById("certification-section-certificate1-company").innerHTML = "Company";
    document.getElementById("certification-section-certificate1-check").innerHTML = "See Certificate";
    /*project section translate */
    document.getElementById("project-section-label").innerHTML = "Projects";
    document.getElementById("project-section-project1-name").innerHTML = "Project 1";
    document.getElementById("project-section-project2-name").innerHTML = "Project 2";
    document.getElementById("project-section-project3-name").innerHTML = "Project 3";

    /* Contact Section translate*/
    document.getElementById("contact-section-label").innerHTML = "Contact";
}

function sendEmail() {
    window.location = "mailto:tomek.woytkowiak@gmail.com"
}

function openLinkedin() {
    var url = "https://www.linkedin.com/in/tomek-woytkowiak/";
    window.open(url, '_blank').focus();
}

function openGithubProfile() {
    var url = "https://github.com/Scoobydowsky";
    window.open(url, '_blank').focus();
}

function downloadCV() {
    if (lang === "pl") {
       var url = "/res/cv-pl.pdf";
    } else {
       var url = "/res/cv-en.pdf";
    }
    window.open(url, '_blank').focus();
}
