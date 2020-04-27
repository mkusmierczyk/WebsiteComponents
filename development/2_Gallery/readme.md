<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; warsztaty
## Galeria

Napisz prostą galerię. Po naciśnięciu miniatury zdjęcia powinno się ono pokazywać w trybie pełnego ekranu.
Będzie się to działo przez dodanie nowego elementu w chwili, w której ktoś kliknie na daną miniaturę.
Zadanie podzielone jest na punkty. Pamiętaj, żeby trzymać się dokładnie treści punktów i robić je po kolei.
Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia galerii zazwyczaj używany odpowiednio wystylowanej listy, w której znajdują się obrazki.
Lista zazwyczaj spełnia następujące zależności:

1. Nie ma żadnych styli.
2. Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka.
3. Wszystkie obrazki mają tę samą szerokość i wysokość.
5. Wszystkie obrazki są widoczne.

W kodzie HTML dodaj (ręcznie) w odpowiednie miejsce klasę ```gallery```.

## Punkt 2
Przygotuj do pracy plik **app.js**.
Następnie znajdź następujące elementy i zapisz je do zmiennych:
1. Wszystkie elementy listy (zapisz do tablicy).
2. **Tag** ```body``` (będzie nam potrzebny do dodania elementu, który pokaże się na pełnym ekranie).

Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.

## Punkt 3
Do wszystkich obrazków dodaj event reagujący na kliknięcie. Najpierw może wypisywać "działa" w konsoli.

## Punkt 4
Zmodyfikuj event w taki sposób, żeby w konsoli wypisywał adres URL klikniętego obrazka. Uzyj do tego ```this```.

## Punkt 5
Zauważ, że na górze pliku **app.js** jest zakomentowany kawałek kodu HTML. Jest to wzór elementu, który ma zostać dodany do strony.
Przeanalizuj go, a następnie zmodyfikuj event dla obrazków w taki sposób, żeby tworzyć takie elementy i dodawały go do **tagu** ```body```.
Pamiętaj o tym, żeby pod adres URL obrazka podłożyć odpowiednie dane.

## Punkt 6
Po kliknięciu na obrazek powinien nam się wyświetlać powiększony obrazek + guzik. Musisz teraz dopisać event reagujący na kliknięcie w guzik. Ma on spowodować usunięcie nowo stworzonego elementu z drzewa DOM.

## Punkt 7
Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
