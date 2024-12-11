// odliczanie.js
document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const christmas = new Date(currentYear, 11, 25); // 25 grudnia (miesiące są zerobazowe)

        // Jeśli data już minęła, ustaw na przyszły rok
        if (now > christmas) {
            christmas.setFullYear(currentYear + 1);
        }

        const timeRemaining = christmas - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `Do Świąt Bożego Narodzenia pozostało: ${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund.`;
    }

    // Aktualizacja co sekundę
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Wywołanie na start
});
