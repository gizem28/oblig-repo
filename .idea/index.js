// Billet listesi için boş array
let billettListe = [];

// Billett ekleme fonksiyonu
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

// Input alanlarını doğrulama fonksiyonu
function checkInput() {
    let isValid = true;


    // Film seçimi doğrulama
    let film = document.getElementById("filmNames").value;
    let filmAdv = document.getElementById("filmAdv"); // Uyarı mesajını göstermek için bir element id'si
    if (film === "") {
        filmAdv.innerText = "Vennligst velg en film fra listen";
        filmAdv.style.display = "inline-block";
        isValid = false;
    } else {
        filmAdv.style.display = "none";
    }

    // Diğer doğrulamalarınızı burada sürdürebilirsiniz...


    // Antall validation
    let antall = document.getElementById('antall').value;
    let antallAdv = document.getElementById("antallAdv");
    if (parseInt(antall) < 1 || isNaN(parseInt(antall))) {
        antallAdv.innerText = "Må skrive noe antall";
        antallAdv.style.display = "inline-block"; // Hata mesajını göster
        isValid = false;
    } else {
        antallAdv.style.display = "none"; // Hata mesajını gizle
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
    // Telefonnr validation
    let telefonnr = document.getElementById("telefonnr").value;
    let telAdv = document.getElementById("telAdv");
// Norveç'te telefon numaraları 8 rakamdan oluşur
    if (!/^\d{8}$/.test(telefonnr)) {
        telAdv.innerText = "Vennligst skriv inn et gyldig telefonnummer med 8 siffer";
        telAdv.style.display = "inline-block"; // Hata mesajını göster
        isValid = false;
    } else {
        telAdv.style.display = "none"; // Hata mesajını gizle
    }

    // Epost validation
    // Epost validation
    let epost = document.getElementById("epost").value;
    let epostAdv = document.getElementById("epostAdv");
// Daha kapsamlı bir e-posta doğrulama regex'i
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epost)) {
        epostAdv.innerText = "Vennligst skriv inn en gyldig e-postadresse (f.eks. bruker@eksempel.no)";
        epostAdv.style.display = "inline-block"; // Hata mesajını göster
        isValid = false;
    } else {
        epostAdv.style.display = "none"; // Hata mesajını gizle
    }

    return isValid;

}


// Formu sıfırlama fonksiyonu
function resetForm() {
    document.getElementById('billettForm').reset();
    // Tüm uyarı mesajlarını gizle
    let warnings = document.querySelectorAll('.validation-error');
    warnings.forEach(function(warning) {
        warning.style.display = 'none';
    });
}

// Bilet listesini güncelleme ve gösterme fonksiyonu
function listBilletter() {
    let alleBilletterDiv = document.getElementById('alleBilletter');
    alleBilletterDiv.innerHTML = ''; // Mevcut listeyi temizle
    billettListe.forEach(function(billett) {
        alleBilletterDiv.innerHTML += `<p>${billett.film} ${billett.antall} ${billett.fornavn} ${billett.etternavn} ${billett.telefonnr} ${billett.epost}</p>`;
    });
}

// Tüm biletleri silme fonksiyonu
function slettAlleBilletter() {
    billettListe = [];
    listBilletter();
}
