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

var liczbaZapalek;
var nazwaGracza1;
var nazwaGracza2;

function rozpocznijGre() {
    liczbaZapalek = parseInt(prompt("Wprowadź liczbę zapałek: "));
    while (isNaN(liczbaZapalek)) {
        liczbaZapalek = parseInt(prompt("Błąd!\nWprowadź liczbę zapałek: "));
    }
    liczbaZapalekInput.value = liczbaZapalek;
    nazwaGracza1 = prompt("Wprowadź nazwę gracza nr 1: ");
    nazwaGracza1Input.value = nazwaGracza1;
    nazwaGracza2 = prompt("Wprowadź nazwę gracza nr 2: ");
    nazwaGracza2Input.value = nazwaGracza2;
    startInfo.style.display = "none";
    rozpocznijGrePrzycisk.style.display = "none";
    kolejInfo.innerHTML = "Kolej gracza: <b>" + nazwaGracza1 + "<b />";
}

rozpocznijGrePrzycisk.addEventListener("click", rozpocznijGre);

var kolej = 0;

function odejmijZapalki(liczba) {
    liczbaZapalek -= liczba;
    kolej++;
    if (liczbaZapalek > 0) {
        liczbaZapalekInput.value = liczbaZapalek;
        if (kolej % 2 == 0) {
            kolejInfo.innerHTML = "Kolej gracza: <b>" + nazwaGracza1 + "<b />";
        } else {
            kolejInfo.innerHTML = "Kolej gracza: <b>" + nazwaGracza2 + "<b />";
        }
    } else {
        if (kolej % 2 == 0) {
            kolejInfo.innerHTML = "Przegrywa gracz: <b>" + nazwaGracza2 + "<b />";
            liczbaZapalekInput.value = 0;
            kolej--;
            startInfo.style.display = "block";
            rozpocznijGrePrzycisk.style.display = "inline";
        } else {
            kolejInfo.innerHTML = "Przegrywa gracz: <b>" + nazwaGracza1 + "<b />";
            liczbaZapalekInput.value = 0;
            kolej--;
            startInfo.style.display = "block";
            rozpocznijGrePrzycisk.style.display = "inline";
        }
    }
}

jedna.addEventListener("click", function () {
    odejmijZapalki(1);
});

dwie.addEventListener("click", function () {
    odejmijZapalki(2);
});

trzy.addEventListener("click", function () {
    odejmijZapalki(3);
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
