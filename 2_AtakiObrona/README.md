# Rodzaje ataków i obrona przed nimi

## XSS (Cross Site Scripting)

1. W konsoli przejdź do folderu `CSFR`.
2. Zainstaluj wszystkie zależności `npm i`.
3. Uruchom projekt.
4. Jeśli pojawiły się jakieś aktualizacje bezpieczeństwa zainstaluj je.
5. Uruchom projekt `npm run dev`.
6. Przed formularzem dodaj sekcję z komentarzami. 
7. Dodaj dwa pola `imię i nazwisko` oraz `komentarz`.
8. Po naciśnięciu przycisku dodaj komentarz powinien pojawiać się poniżej formularze.
9. Pozwól na wstawienie html do pola komentarz.
10. Dodaj w locaStorage klucz hasło o wartości "Bardzo ważne hasło".
11. Sprawdź czy uda Ci się wykraść to hasło za pomocą komentarza.
12. Zabezpiecz formularz za pomocą biblioteki `dompurify`.
13. Sprawdź różnicę.
14. Pomiń prace backendowe.

## CSFR (Cross Site Request Forgery)

1. W konsoli przejdź do folderu `CSFR`.
2. Zainstaluj wszystkie zależności `npm i`.
3. Uruchom projekt.
4. Uruchom projekt `npm run dev`.
5. Twój "znajomy" wysłał Ci maila. Poprosił, żebyś zobaczył jakiego ma ślicznego szczeniaczka pod tym linkiem [link](http://localhost:5174/csfr/Y3JlYXRlVXNlcj9uYW1lPWdyemVnb3J6JnBhc3dvcmQ9MTIzNA==).
6. Zdziwiłeś się bo otworzyła się Twoja strona gdzie byłeś zalogowany przed chwilą i dodawałeś nowy post.
7. Otwórzy narzędzia DevTools. Zajrzyj do zakładki `Network` i przejdź do filtra `Img`.
8. Zwróć uwagę jaki request wysłałeś i dlaczego to się udało.
9. Omów z prowadzącym scenariusz i omówcie sposób ochrony przed tym atakiem.