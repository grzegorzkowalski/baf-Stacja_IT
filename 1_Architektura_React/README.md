# React architektura frameworka 
1. Zainstaluj w folderze `HTTPS` nową aplikację React za pomocą komendy `npm create vite@latest secure-comunication -- --template react`.
2. Przejdź do projektu.
3. Zainstaluj paczki.
4. Uruchom.

## JSX - testowanie bezpieczeństwa

### Ćwiczenie 1: Bezpieczne renderowanie danych użytkownika

#### Zadanie:

Stwórz komponent, który przyjmuje dane wejściowe od użytkownika (np. przez pole tekstowe formularza).
Wprowadź do tego pola tekstowego potencjalnie złośliwy kod JavaScript, taki jak `<script>alert('XSS');</script>`.
Wyświetl wprowadzone dane na stronie i zobacz, czy skrypt JavaScript zostanie wykonany.

### Ćwiczenie 2: Używanie dangerouslySetInnerHTML

#### Zadanie:

Stwórz komponent, który używa `dangerouslySetInnerHTML` do renderowania surowego HTML dostarczonego przez użytkownika.
Przetestuj komponent, wprowadzając zarówno zwykły tekst HTML, jak i złośliwy kod JavaScript.
Spróbuj zaimplementować prosty mechanizm dezynfekcji i sprawdź, czy zapobiega on wykonaniu złośliwego kodu.

### Ćwiczenie 3: Wstrzykiwanie skryptów w atrybutach

#### Zadanie:

Stwórz komponent, który pozwala użytkownikowi na ustawienie atrybutów elementu, np. href w linku `<a>` lub src w obrazku `<img>`.
Przetestuj wprowadzanie złośliwego kodu JavaScript jako wartości atrybutów, np. `javascript:alert('XSS')`.
Sprawdź, czy React pozwala na wykonanie takiego skryptu.

## Props - testowanie bezpieczeństwa

### Ćwiczenie 4: Testowanie sanityzacji danych wejściowych

1. Stwórz komponent, który przyjmuje dane użytkownika jako props i wyświetla je w interfejsie użytkownika.
1. Przetestuj komponent, przekazując różne rodzaje danych, w tym potencjalnie złośliwe skrypty JavaScript w formie ciągu znaków.

### Ćwiczenie 5: Walidacja typów za pomocą PropTypes

1. Zainstalu bibliotekę `npm install --save prop-types`.
1. Dodaj PropTypes do istniejącego komponentu, określając oczekiwane typy dla wszystkich props.
1. Przetestuj zachowanie w przypadku podania błędnego typu props. 