/*
Użytkownik wprowadza 6 liczb.
Sprawdzamy, czy podane liczby się nie powtarzają - jeśli nie to wrzucamy je do tablicy.
Komputer losuje 6 liczb z zakresu od 1 do 49.
Sprawdzamy, czy podane liczby się nie powtarzają - jeśli nie to wrzucamy je do tablicy.
Wyświetlamy liczby użytkownika i liczby wylosowane przez komputer.
Porównujemy liczby podane przez użytkownika z liczbami wylosowanymi przez komputer - jeśli się powtarzają to je wyróżniamy.
*/

const lu1 = document.getElementById("pole1");
const lu2 = document.getElementById("pole2");
const lu3 = document.getElementById("pole3");
const lu4 = document.getElementById("pole4");
const lu5 = document.getElementById("pole5");
const lu6 = document.getElementById("pole6");

const liczbyUzytkownika = [lu1, lu2, lu3, lu4, lu5, lu6];

const lk1 = document.getElementById("pole2_1");
const lk2 = document.getElementById("pole2_2");
const lk3 = document.getElementById("pole2_3");
const lk4 = document.getElementById("pole2_4");
const lk5 = document.getElementById("pole2_5");
const lk6 = document.getElementById("pole2_6");

const liczbyKomputera = [lk1, lk2, lk3, lk4, lk5, lk6];

const ls0 = document.getElementById("pole3_1");
const ls1 = document.getElementById("pole3_2");
const ls2 = document.getElementById("pole3_3");
const ls3 = document.getElementById("pole3_4");
const ls4 = document.getElementById("pole3_5");
const ls5 = document.getElementById("pole3_6");
const ls6 = document.getElementById("pole3_7");
const nrGry = document.getElementById("pole3_8");

const liczbyStatystyki = [ls0, ls1, ls2, ls3, ls4, ls5, ls6, nrGry];

liczbyStatystyki.forEach((element) => {
    element.value = parseInt(0);
});

const wylosujBtn = document.getElementById("wylosujBtn");
const zatwierdzBtn = document.getElementById("zatwierdzBtn");

const wynik = document.getElementById("wynik");
const ileTrafiono = document.getElementById("ileTrafiono");

function resetStyli() {
    liczbyUzytkownika.forEach((element) => {
        element.style.backgroundColor = "#ffffff";
        element.style.borderWidth = "1px";
    });
    liczbyKomputera.forEach((element) => {
        element.style.backgroundColor = "#ffffff";
        element.style.borderWidth = "1px";
    });
    wynik.innerHTML = "Liczby, które się powtarzają: ";
    ileTrafiono.innerHTML = "Trafiono: ";
}

function reset() {
    resetStyli();
    liczbyUzytkownika.forEach((element) => {
        element.value = "";
    });
    liczbyKomputera.forEach((element) => {
        element.value = "";
    });
}

function resetStatystyk() {
    liczbyStatystyki.forEach((element) => {
        element.value = parseInt(0);
    });
}

function losujUzytkownika() {
    resetStyli();
    let wylosowaneLiczby = [];
    while (wylosowaneLiczby.length < 6) {
        let nowaLiczba = Math.floor(Math.random() * 49) + 1;
        if (!wylosowaneLiczby.includes(nowaLiczba)) {
            wylosowaneLiczby.push(nowaLiczba);
        }
    }
    wylosowaneLiczby.forEach((element, index) => {
        liczbyUzytkownika[index].value = element;
    });
}

function sprawdzPoprawnosc() {
    const liczby = [];
    for (let i = 1; i <= 6; i++) {
        const pole = document.getElementById("pole" + i);
        const wartosc = pole.value;

        if (liczby.includes(wartosc)) {
            alert("Błąd! Liczby nie mogą się powtarzać.");
            return false;
        }

        if (wartosc < 1 || wartosc > 49) {
            alert("Błąd! Wprowadź liczby w zakresie 1-49.");
            return false;
        }

        liczby.push(wartosc);
    }
    return true;
}

function losujKomputera() {
    let wylosowaneLiczby2 = [];
    while (wylosowaneLiczby2.length < 6) {
        let nowaLiczba = Math.floor(Math.random() * 49) + 1;
        if (!wylosowaneLiczby2.includes(nowaLiczba)) {
            wylosowaneLiczby2.push(nowaLiczba);
        }
    }
    wylosowaneLiczby2.forEach((element, index) => {
        liczbyKomputera[index].value = element;
    });
}

function porownajUzytkKomp() {
    var wartosciUzytkownika = [];
    var wartosciKomputera = [];

    liczbyUzytkownika.forEach((element, index) => {
        wartosciUzytkownika[index] = element.value;
    });

    liczbyKomputera.forEach((element, index) => {
        wartosciKomputera[index] = element.value;
    });

    nrGry.value = parseInt(nrGry.value) + 1;
    var suma = 0;

    resetStyli();

    for (var i = 0; i < wartosciUzytkownika.length; i++) {
        if (wartosciKomputera.includes(wartosciUzytkownika[i])) {
            wynik.innerHTML += wartosciUzytkownika[i] + " ";
            suma += 1;
            liczbyUzytkownika[i].style.backgroundColor = "#e9ff32";
            for (var j = 0; j < wartosciKomputera.length; j++) {
                if (liczbyUzytkownika[i].value == liczbyKomputera[j].value) {
                    liczbyKomputera[j].style.backgroundColor = "#e9ff32";
                }
            }
        }
    }
    if (suma == 0) {
        wynik.innerHTML += "Brak";
    }
    ileTrafiono.innerHTML += suma;

    if (suma == 0) {
        ls0.value = parseInt(ls0.value) + 1;
    } else if (suma == 1) {
        ls1.value = parseInt(ls1.value) + 1;
    } else if (suma == 2) {
        ls2.value = parseInt(ls2.value) + 1;
    } else if (suma == 3) {
        ls3.value = parseInt(ls3.value) + 1;
    } else if (suma == 4) {
        ls4.value = parseInt(ls4.value) + 1;
    } else if (suma == 5) {
        ls5.value = parseInt(ls5.value) + 1;
    } else if (suma == 6) {
        ls6.value = parseInt(ls6.value) + 1;
    }
}

function zatwierdz() {
    if (!sprawdzPoprawnosc()) {
        return;
    }
    losujKomputera();
    porownajUzytkKomp();
}
