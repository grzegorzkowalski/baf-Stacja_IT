# Dobre praktyki

## HTTPS - dodanie obsługi SSL dla środowiska lokalnego 
1. Stwórz nową aplikację React za pomocą komendy `npm create vite@latest secure-comunication -- --template react`.
2. Przejdź do projektu.
3. Zainstaluj paczki.
4. Uruchom `npm run dev`.
5. Domyślnie projekt uruchomi się po Http.
4. Zainstaluj paczkę `npm i vite-plugin-mkcert -D`.
5. Zmodyfikuj plik konfiguracyjny vite.config.js na następującą treść:
```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import mkcert from'vite-plugin-mkcert'

    export default defineConfig({
        server: {
         https: true
        },
        plugins: [mkcert(), react()],
    })
```
6. Uruchom ponownie projekt.
7. Https skonfigurowany.

## localStorage i sessionStorage
1. W wybranym projekcie dodaj do localStorage `token: "Bardzo tajny token"`.
1. W wybranym projekcie dodaj do sessionStorage `token: "Bardzo tajny token 2"`.
1. Zajrzyj do zakładki `Application` i sprawdź czy dane się zapisały.
1. Zamknij przeglądarkę.
1. Uruchom ponownie.
1. Zweryfikuj czy dane wciąż są obecne.

## Wskaźnik siły hasła.
1. Stwórz nowy projekt lub skorzystaj już z istniejącego. 
2. Dodaj formularz logowania, który będzie mierzył siłę hasła.
3. Możesz skorzystać z tej biblioteki `https://github.com/mmw/react-password-strength-example`.
4. Lub np. z poniższego kodu.
```js
function checkPasswordStrength(password) {
  // Initialize variables
  var strength = 0;
  var tips = "";

  // Check password length
  if (password.length < 8) {
    tips += "Make the password longer. ";
  } else {
    strength += 1;
  }

  // Check for mixed case
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
  } else {
    tips += "Use both lowercase and uppercase letters. ";
  }

  // Check for numbers
  if (password.match(/\d/)) {
    strength += 1;
  } else {
    tips += "Include at least one number. ";
  }

  // Check for special characters
  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    tips += "Include at least one special character. ";
  }

  // Return results
  if (strength < 2) {
    return "Easy to guess. " + tips;
  } else if (strength === 2) {
    return "Medium difficulty. " + tips;
  } else if (strength === 3) {
    return "Difficult. " + tips;
  } else {
    return "Extremely difficult. " + tips;
  }
}
```
5. Oraz biblioteki styli typu `Material UI` `https://mui.com/material-ui/react-progress/`.
6. Zapoznaj się z następującym projektem, żeby bliżej zrozumieć znaczenie siły hasła `https://lowe.github.io/tryzxcvbn/`.

## Wzorzec private route
1. Stwórz aplikację.
2. Dodaj routing dla 3 dowolnych podstron.
3. Dodaj `security context`, w którym będziesz trzymał informację o tym czy użytkownik jest zalogowany.
```js  
<SecurityContext.Provider
        value={{
            login: (username, password) => {
                // Note to engineering team:
                // Maybe make this more secure...
                if (username === 'fred' && password === 'password') {
                    setLoggedIn(true);
                }
            },
            logout: () => setLoggedIn(false),
            loggedIn
        }}>
        {props.children}
    </SecurityContext.Provider>
```
4. Opakuj wszystkie routy w komponenty, które będą sprawdzać czy użytkownik jest zalogowany. Jeśli tak zwracaj komponent jeśli nie stronę logowania.
```js
export default (props) => {
    const {loggedIn} = useSecurity();

    return <Route {...props}>
        {loggedIn ? props.children : <Login/>}
    </Route>;
}
```
## Firebase
1. Zamień `dummy logowanie` na implementację usługi `firebase/auth`. 

## Captcha
1. Do ekranu logowania dodaj zabezpieczenie `reCaptcha` lub podobne.


