// Tomt array for billettlisten
let billettListe = [];

// Funksjon for å legge til billett
function addBillett() {
    if (checkInput()) {
        let billett = {
            film: document.getElementById('filmNames').value,
            antall: document.getElementById('antall').value,
            fornavn: document.getElementById('fornavn').value,
            etternavn: document.getElementById('etternavn').value,
            telefonnr: document.getElementById('telefonnr').value,
            epost: document.getElementById('epost').value
        };
        billettListe.push(billett);
        listBilletter();
        resetForm();
    }
}

// Funksjon for å validere inputfeltene
function checkInput() {
    let isValid = true;


    // Validering av filmvalg
    let film = document.getElementById("filmNames").value;
    let filmAdv = document.getElementById("filmAdv");
    if (film === "") {
        filmAdv.innerText = "Vennligst velg en film fra listen";
        filmAdv.style.display = "inline-block";
        isValid = false;
    } else {
        filmAdv.style.display = "none";
    }

    // Antall validation
    let antall = document.getElementById('antall').value;
    let antallAdv = document.getElementById("antallAdv");
    if (parseInt(antall) < 1 || isNaN(parseInt(antall))) {
        antallAdv.innerText = "Må skrive noe antall";
        antallAdv.style.display = "inline-block";
        isValid = false;
    } else {
        antallAdv.style.display = "none";
    }

    // Fornavn validation
    let fornavn = document.getElementById("fornavn").value;
    let fornavnAdv = document.getElementById("fornavnAdv");
    if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(fornavn) || fornavn.length < 2) {
        fornavnAdv.innerText = "Fornavn er ikke gyldig";
        fornavnAdv.style.display = "inline-block";
        isValid = false;
    } else {
        fornavnAdv.style.display = "none";
    }

    // Etternavn validation
    let etternavn = document.getElementById("etternavn").value;
    let etternavnAdv = document.getElementById("etternavnAdv");
    if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(etternavn) || etternavn.length < 2) {
        etternavnAdv.innerText = "Etternavn er ikke gyldig";
        etternavnAdv.style.display = "inline-block";
        isValid = false;
    } else {
        etternavnAdv.style.display = "none";
    }


    // Telefonnr validation
    let telefonnr = document.getElementById("telefonnr").value;
    let telAdv = document.getElementById("telAdv");

    // Telefonnumre i Norge består av 8 sifre
    if (!/^\d{8}$/.test(telefonnr)) {
        telAdv.innerText = "Vennligst skriv inn et gyldig telefonnummer med 8 siffer";
        telAdv.style.display = "inline-block";
        isValid = false;
    } else {
        telAdv.style.display = "none";
    }

    // Epost validation
    let epost = document.getElementById("epost").value;
    let epostAdv = document.getElementById("epostAdv");

    // En mer omfattende regex for e-post validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epost)) {
        epostAdv.innerText = "Vennligst skriv inn en gyldig e-postadresse (f.eks. bruker@eksempel.no)";
        epostAdv.style.display = "inline-block";
        isValid = false;
    } else {
        epostAdv.style.display = "none";
    }

    return isValid;

}


// Funksjon for å resette skjemaet
function resetForm() {
    document.getElementById('billettForm').reset();

    let warnings = document.querySelectorAll('.validation-error');
    warnings.forEach(function(warning) {
        warning.style.display = 'none';
    });
}

// Funksjon for å oppdatere og vise listen over billetter
function listBilletter() {
    let alleBilletterDiv = document.getElementById('alleBilletter');
    alleBilletterDiv.innerHTML = '';
    billettListe.forEach(function(billett) {
        alleBilletterDiv.innerHTML += `<p>${billett.film} ${billett.antall} ${billett.fornavn} ${billett.etternavn} ${billett.telefonnr} ${billett.epost}</p>`;
    });
}

// Funksjon for å slette alle billettene
function slettAlleBilletter() {
    billettListe = [];
    listBilletter();
}
