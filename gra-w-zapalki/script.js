const jedna = document.querySelector("#jedna");
const dwie = document.querySelector("#dwie");
const trzy = document.querySelector("#trzy");

const startInfo = document.querySelector("#startInfo");
const rozpocznijGrePrzycisk = document.querySelector("#rozpocznijGre");
const kolejInfo = document.querySelector("#kolejInfo");
const liczbaZapalekInput = document.querySelector("#liczbaZapalek");
const nazwaGracza1Input = document.querySelector("#nazwaGracza1");
const nazwaGracza2Input = document.querySelector("#nazwaGracza2");

const pokazZasadyPrzycisk = document.querySelector("#pokazZasady");
const zasady = document.querySelector("#zasady");
const infoSchowaj = document.querySelector("#infoSchowaj");

var liczbaZapalek;
var nazwaGracza1;
var nazwaGracza2;
var czyStart = false;

function rozpocznijGre() {
    czyStart = true;
    liczbaZapalek = parseInt(prompt("Wprowadź liczbę zapałek: "));
    while (isNaN(liczbaZapalek)) {
        liczbaZapalek = parseInt(prompt("Błąd!\nWprowadź poprawną liczbę zapałek: "));
    }
    liczbaZapalekInput.value = liczbaZapalek;
    nazwaGracza1 = prompt("Wprowadź nazwę gracza nr 1: ");
    while (nazwaGracza1 == "") {
        nazwaGracza1 = prompt("Błąd!\nNazwa gracza nie może być pusta.\nWprowadź nazwę gracza nr 1: ");
    }
    nazwaGracza1Input.value = nazwaGracza1;
    nazwaGracza2 = prompt("Wprowadź nazwę gracza nr 2: ");
    while (nazwaGracza2 == "") {
        nazwaGracza2 = prompt("Błąd!\nNazwa gracza nie może być pusta.\nWprowadź nazwę gracza nr 2: ");
    }
    nazwaGracza2Input.value = nazwaGracza2;
    startInfo.style.display = "none";
    rozpocznijGrePrzycisk.style.display = "none";
    kolejInfo.innerHTML = "<h3>Kolej gracza: " + nazwaGracza1 + "<h3 />";
    infoSchowaj.style.display = "block";
}

rozpocznijGrePrzycisk.addEventListener("click", rozpocznijGre);

var kolej = 0;

function odejmijZapalki(liczba) {
    liczbaZapalek -= liczba;
    kolej++;
    if (liczbaZapalek > 0) {
        liczbaZapalekInput.value = liczbaZapalek;
        if (kolej % 2 == 0) {
            kolejInfo.innerHTML = "<h3>Kolej gracza: " + nazwaGracza1 + "<h3 />";
        } else {
            kolejInfo.innerHTML = "<h3>Kolej gracza: " + nazwaGracza2 + "<h3 />";
        }
    } else {
        if (kolej % 2 == 0) {
            kolejInfo.innerHTML = "<h3>Przegrywa gracz: " + nazwaGracza2 + "<h3 />";
        } else {
            kolejInfo.innerHTML = "<h3>Przegrywa gracz: " + nazwaGracza1 + "<h3 />";
        }
        liczbaZapalekInput.value = 0;
        kolej--;
        startInfo.style.display = "block";
        rozpocznijGrePrzycisk.style.display = "inline";
        infoSchowaj.style.display = "none";
        czyStart = false;
    }
}

jedna.addEventListener("click", function () {
    if (czyStart) {
        odejmijZapalki(1);
    } else {
        alert("Błąd!\nAby zabrać zapałki, rozpocznij grę.");
    }
});

dwie.addEventListener("click", function () {
    if (czyStart) {
        if (liczbaZapalek >= 2) {
            odejmijZapalki(2);
        } else {
            alert(`Błąd!\nNie możesz wziąć 2 zapałek, ponieważ do wzięcia zostało tylko ${liczbaZapalek}.`);
        }
    } else {
        alert("Błąd!\nAby zabrać zapałki, rozpocznij grę.");
    }
});

trzy.addEventListener("click", function () {
    if (czyStart) {
        if (liczbaZapalek >= 3) {
            odejmijZapalki(3);
        } else {
            alert(`Błąd!\nNie możesz wziąć 3 zapałek, ponieważ do wzięcia zostało tylko ${liczbaZapalek}.`);
        }
    } else {
        alert("Błąd!\nAby zabrać zapałki, rozpocznij grę.");
    }
});

var i = 0;
pokazZasadyPrzycisk.addEventListener("click", function () {
    i++;
    if (i % 2 == 1) {
        zasady.style.display = "block";
        pokazZasadyPrzycisk.value = "Ukryj zasady";
    } else {
        zasady.style.display = "none";
        pokazZasadyPrzycisk.value = "Pokaż zasady";
    }
});
