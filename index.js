var lang = "en";

function setLangPL() {
    lang = "pl";
    console.log("Ustawiono jezyk na polski");
    document.documentElement.setAttribute("lang", 'pl');
    /* Navbar translation*/
    document.getElementById("about-me-link").innerHTML="O mnie";
    document.getElementById("skills-link").innerHTML="Umiejętności";
    document.getElementById("education-link").innerHTML="Wykształcenie";
    document.getElementById("experience-link").innerHTML="Doświadczenie";
    document.getElementById("certification-link").innerHTML="Certyfikaty";
    document.getElementById("project-link").innerHTML="Projekty";
    document.getElementById("contact-link").innerHTML="Kontakt";
    /*Hello section translation */
    document.getElementById("hello-section-welcome").innerHTML="Cześć, jestem Tomek";
    document.getElementById("hello-section-description").innerHTML="Programista PHP";
    /* about me section translation */
    document.getElementById("aboutMe-section-label").innerHTML="O mnie";
    document.getElementById("aboutMe-section-description").innerHTML="Witaj, nazywam się Tomasz Woytkowiak. Studiuję informatykę na Collegium Da vinci w Poznaniu.\n" +
        "                        W swoich projektach wykorzystuje PHP , obecnie uczę się wykorzystania Frameworku Symfony 5.\n" +
        "                        Hobbystycznie tworzę różne rzeczy przy wykorzystaniu Arduino.";
    document.getElementById("aboutMe-section-hobby-label").innerHTML="Hobby:";
    document.getElementById("aboutMe-section-hobby1").innerHTML="Programowanie";
    document.getElementById("aboutMe-section-hobby2").innerHTML="Gry komputerowe";
    document.getElementById("aboutMe-section-hobby3").innerHTML="Numizmatyka";
    /* skills section translate*/
    document.getElementById("skills-section-label").innerHTML="Umiejętności";
    document.getElementById("skills-section-skill1-dsc").innerHTML="Opis co umiem";//TODO
    document.getElementById("skills-section-skill2-dsc").innerHTML="Opis co umiem";//TODO
    document.getElementById("skills-section-skill3-dsc").innerHTML="Opis co umiem";//TODO
    document.getElementById("skills-section-skill4-dsc").innerHTML="Opis co umiem";//TODO
    document.getElementById("skills-section-skill5-dsc").innerHTML="Opis co umiem";//TODO
    document.getElementById("skills-section-skill6-dsc").innerHTML="Opis co umiem";//TODO
    /* education section translate */
    document.getElementById("education-section-desciption").innerHTML="Wykształcenie";
    document.getElementById("education-section-school2-date").setAttribute("data-date","2021-obecnie");
    document.getElementById("education-section-school2-title").innerHTML="Inżynier Informatyk";
    document.getElementById("education-section-school2-name").innerHTML="Collegium Da Vinci w Poznaniu";
    document.getElementById("education-section-school1-date").setAttribute("data-date","2013-2017");
    document.getElementById("education-section-school1-title").innerHTML="Technik Informatyk";
    document.getElementById("education-section-school1-name").innerHTML="Zespół Szkół Technicznych w Lesznie";
    /* experience section translate */
    document.getElementById("experience-section-label").innerHTML="Doświadczenie";
    document.getElementById("experience-section-work1-date").setAttribute("data-date","N/A");
    document.getElementById("experience-section-work1-job").innerHTML="Programista PHP";
    document.getElementById("experience-section-work1-company").innerHTML="Brak Firmy";
    document.getElementById("experience-section-work1-dsc").innerHTML="Nie mam jeszcze żadnego doświadczenia";
    /*certification section translate */
    document.getElementById("certification-section-label").innerHTML="Certyfikaty";
    document.getElementById("certification-section-certificate1-name").innerHTML="Nazwa Certyfikatu";
    document.getElementById("certification-section-certificate1-company").innerHTML="Firma wystawiajace certyfikat";
    document.getElementById("certification-section-certificate1-check").innerHTML="Zobacz Certifikat";
    /*project section translate */
}

function setLangEN() {
    lang = "en"
    console.log("Set lang to en");
    document.documentElement.setAttribute("lang", 'en');
    //TODO load translate
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
    var url = "";
    if (lang == "pl") {
        url = "/res/cv-pl.pdf";
    } else {
        url = "/res/cv-en.pdf";
    }
    window.open(url, '_blank').focus();
}
