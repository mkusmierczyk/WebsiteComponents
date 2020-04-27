<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; warsztaty
# Slider

## Zadanie
Twoim zadaniem jest stworzenie prostego slidera. Realizacja podzielona jest na punkty. Pamiętaj, żeby trzymać się dokładnie ich treści i wykonywać je po kolei. Po skończeniu zadania pamiętaj o commicie.

### Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia slidera zazwyczaj używany odpowiednio ostylowanej listy, w której znajdują się obrazki.
Lista zazwyczaj spełnia następujące zależności:

1. Nie ma żadnych styli.
2. Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka.
3. Wszystkie obrazki mają tę samą szerokość i wysokość.
4. Wszystkie obrazki poza jednym są niewidoczne.

Dodaj w odpowiednie miejsce klasę ```slider``` w kodzie HTML.

### Punkt 2
Przygotuj do pracy plik **app.js**.
Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Guzik ```next```.
2. Guzik ```prev```.
3. Wszystkie elementy listy (zapisz do tablicy).

Dodaj też zmienną liczbową, która będzie określała indeks obrazka, który jest aktualnie widoczny (na początku będzie to pierwszy obrazek &ndash; czyli zmienna będzie wskazywała na indeks **0**).

Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.

### Punkt 3
Po dodaniu klasy ```slider``` zniknęły nam wszystkie obrazki. Dodaj do zerowego elementu naszej listy klasę ```visible```. Użyj odpowiednich zmiennych:
* tablicy z elementami listy,
* zmiennej, która określa widoczny element.
Po wejściu na stronę pierwszy obrazek powinien być widoczny.

### Punkt 4
Dodaj do guzików eventy reagujące na kliknięcie. Na początku mają tylko wypisywać w konsoli informacje o kliknięciu.

### Punkt 5
W evencie odpowiadającym za pokazanie następnego obrazka wykonaj nastepujące czynności:

1. Zabierz obecnie widocznemu obrazkowi klasę ```visible```.
2. Zwiększ zmienną trzymającą indeks obrazka, który jest aktualnie widoczny o jeden.
3. Dodaj obrazkowi, który powinien być widoczny, klasę ```visible```.
Użyj odpowiednich zmiennych (czyli tablicy z elementami listy oraz zmiennej, która określa, który element jest widoczny).

## Punkt 6
Wykonaj czynności w evencie dla guzika pokazującego poprzedni obrazek analogicznie do punktu 5.

## Punkt 7
Sprawdź, jak działa Twoja strona. Widzisz jakieś problemy związane ze sliderem? Napisz.

## Punkt 8
W poprzednim punkcie powinieneś zauważyć, że po wielokrotnym naciśnięciu guzika do przodu (albo do tyłu) obrazki znikają ze strony. Dzieje się tak dlatego, że zmienna określająca numer widocznego obrazka przyjmuje niepoprawną wartość (mniejszą od zera lub większą niż liczba elementów w naszej tablicy).
Jak temu zaradzić? W eventach dodaj **if-a**, który sprawdzi, czy wartość nie wyszła poza zakres. Jeżeli tak się stało, to program ma nastawić poprawną wartość:
* liczbą jest ujemna -> ostatni element,
* liczba równa się liczbie elementów lub jest większa -> **0**.
