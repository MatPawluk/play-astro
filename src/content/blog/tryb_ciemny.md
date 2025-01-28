---
draft: false
title: "Dodawanie trybu ciemnego do strony w mniej niż 5 minut"
description: "Dowiedz się, jak dodać tryb ciemny do swojej strony bez użycia frameworków."
snippet: "Prosty sposób na dodanie trybu ciemnego do strony w mniej niż 5 minut. Przykładowy kod HTML, CSS i JavaScript."
image: { src: '/assets/blog/dark-mode.webp', alt: 'Ilustracja nocnego krajobrazu z księżycem, lasem i namiotem, z napisem Dark Mode dla Twojej Strony.' }
publishDate: "2025-01-28"
category: "Frontend"
author: "Mateusz Pawluk"
bigImg: { src: '/assets/blog/dark-mode-big.webp', alt: 'Ilustracja nocnego krajobrazu z księżycem, lasem i namiotem, z napisem Dark Mode dla Twojej Strony.' }
authorImg: { src: '/assets/blog/author-01.jpg', alt: 'Zdjęcie autora Mateusza Pawluk' }
comments: '03'
views: '15'
tags: ["dark mode", "frontend", "JavaScript", "CSS"]
---

# Jak dodać tryb ciemny na stronę internetową i dlaczego to ma znaczenie?

Jeśli kiedykolwiek zdarzyło Ci się przeglądać internet w środku nocy i nagle poczułeś, jak ekran bije Ci po oczach niczym latarka z horroru – wiesz, o czym mówię. Tryb ciemny, czyli tak zwany *dark mode*, to jeden z tych elementów, które naprawdę potrafią poprawić komfort korzystania ze stron internetowych, a w dzisiejszych czasach jest wręcz oczekiwany przez użytkowników. Ale jak właściwie to działa i dlaczego warto go dodać do swojej strony? W tym artykule pokażę Ci, jak łatwo możesz wprowadzić tryb ciemny, bazując na prostym kodzie, a przy okazji pogadamy, dlaczego tryb dark mode jest czymś więcej niż tylko modą.

## Dlaczego tryb ciemny jest ważny?

1. **Oszczędność energii**  
   Chociaż to może nie być oczywiste od razu, tryb ciemny ma wpływ na baterię – szczególnie na urządzeniach z ekranami OLED. Im mniej pikseli musi świecić na biało, tym mniej energii zużywa ekran. Dla użytkowników przeglądających Twoją stronę na smartfonach to ogromna zaleta.

2. **Ulga dla oczu**  
   Wspomniana już wcześniej "latarka z horroru" to doświadczenie, którego nie chcesz serwować swoim odbiorcom. Tryb ciemny zmniejsza zmęczenie oczu, szczególnie podczas nocnego przeglądania treści. A im wygodniej użytkownikom, tym dłużej będą na Twojej stronie.

3. **Styl i estetyka**  
   Dark mode po prostu wygląda świetnie! Często kojarzy się z nowoczesnością i profesjonalizmem. Zmiana kolorystyki strony na ciemniejszą potrafi nadać jej zupełnie innego charakteru, a dla wielu użytkowników ciemne interfejsy są bardziej atrakcyjne wizualnie.

## Jak działa tryb ciemny?

Zanim przejdziemy do kodu, zrozummy, jak to w ogóle działa. Zasadniczo, tryb ciemny polega na dynamicznej zmianie kolorystyki strony internetowej. Na przykład: jasne tło zamieniasz na ciemne, ciemne teksty stają się jasne – proste, prawda? Aby to działało, potrzebujesz **przełącznika** (takiego jak przycisk), który zamieni klasy CSS w kodzie HTML i przechowa wybór użytkownika, aby pamiętać go nawet po odświeżeniu strony.

## Prosty sposób na tryb ciemny – kod w praktyce

Zobaczmy, jak dodać tryb ciemny do strony krok po kroku, bazując na poniższym kodzie:

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Definicje zmiennych kolorów dla trybu jasnego i ciemnego */
        :root {
            --background-light: #ffffff;
            --background-dark: #121212;
            --text-light: #000000;
            --text-dark: #ffffff;
            --button-light-bg: #ffffff;
            --button-dark-bg: #000000;
            --button-light-border: #000000;
            --button-dark-border: #ffffff;
        }

        /* Stylizacja dla całego ciała dokumentu */
        body {
            font-family: 'Arial', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            transition: background-color 0.5s, color 0.5s;
        }

        /* Stylizacja dla trybu ciemnego */
        .dark-mode {
            background-color: var(--background-dark);
            color: var(--text-dark);
        }

        /* Stylizacja dla trybu jasnego */
        .light-mode {
            background-color: var(--background-light);
            color: var(--text-light);
        }

        /* Stylizacja dla przycisków */
        button {
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.5s, color 0.5s, border 0.5s;
        }

        /* Stylizacja dla przycisku w trybie ciemnym */
        .dark-mode-button {
            background-color: var(--button-dark-bg);
            color: var(--text-dark);
            border: 1px solid var(--button-dark-border);
        }

        /* Stylizacja dla przycisku w trybie jasnym */
        .light-mode-button {
            background-color: var(--button-light-bg);
            color: var(--text-light);
            border: 1px solid var(--button-light-border);
        }

        /* Obrót ikony w trybie ciemnym */
        .dark-mode .mode-icon {
            transform: rotate(180deg);
        }
    </style>
</head>
<body class="light-mode">
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
    <a href="#">This is a link.</a>
    <button id="mode-toggle" class="light-mode-button" onclick="toggleMode()">
        <i class="fas fa-moon mode-icon"></i>Dark Mode
    </button>

    <script>
        // Funkcja przełączająca tryb jasny i ciemny
        function toggleMode() {
            const body = document.body;
            const button = document.getElementById('mode-toggle');

            // Przełączanie klas trybu ciemnego i jasnego dla ciała dokumentu
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            // Zmiana stylu i tekstu przycisku w zależności od aktualnego trybu
            if (button.classList.contains('light-mode-button')) {
                button.classList.remove('light-mode-button');
                button.classList.add('dark-mode-button');
                button.innerHTML = '<i class="fas fa-sun mode-icon"></i>Light Mode';
            } else {
                button.classList.remove('dark-mode-button');
                button.classList.add('light-mode-button');
                button.innerHTML = '<i class="fas fa-moon mode-icon"></i>Dark Mode';
            }
        }
    </script>
</body>
</html>
```

## Co tu się dzieje?

1. **Zmienne CSS** – Deklarujemy kilka zmiennych, które będą odpowiedzialne za kolory w trybie jasnym i ciemnym.
2. **Klasy `dark-mode` i `light-mode`** – Przypisujemy odpowiednie kolory tła i tekstu dla każdego trybu.
3. **Przycisk przełączający tryb** – Mamy prosty przycisk, który przełącza się między trybami, zmieniając tekst i ikonę.
4. **Funkcja JS** – Używamy JavaScriptu do dynamicznego dodawania klas `dark-mode` i `light-mode`, a także do zmiany treści przycisku.

## Co można dodać?

Ten kod to prosta implementacja, ale możliwości są nieograniczone. Możesz dodać przechowywanie preferencji użytkownika w `localStorage`, dzięki czemu po odświeżeniu strony ich wybór będzie pamiętany. Możesz również rozbudować przełącznik o animacje, które płynnie przełączają między ikonami słońca i księżyca. 

Dobrze jest również pamiętać o dostępności – upewnij się, że kontrast kolorów jest wystarczający, aby spełniać standardy WCAG, szczególnie w trybie ciemnym.

## Na koniec: czy warto?

Krótko mówiąc: **tak!** Dodanie trybu ciemnego to łatwy sposób na poprawienie UX (User Experience) Twojej strony. Użytkownicy oczekują tego jako standardu, a Ty możesz w prosty sposób poprawić dostępność i wygląd swojego projektu. W końcu każdy z nas chce czuć się dobrze, przeglądając strony, niezależnie od tego, czy siedzimy w ciemnym pokoju, czy w świetle dnia.

**PS**. Jeśli Twoja strona tego nie ma – czas na aktualizację!