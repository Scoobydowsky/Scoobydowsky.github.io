var lang = "en";

function setLangPL() {
    lang = "pl";
    console.log("Ustawiono jezyk na polski");
    document.documentElement.setAttribute("lang", 'pl');
    //TODO load translate
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
