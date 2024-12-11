// swiateczne_swiatelka.js
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    function createLight() {
        const light = document.createElement("div");
        light.classList.add("light");

        // Losowa pozycja
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        light.style.left = `${x}px`;
        light.style.top = `${y}px`;

        // Losowy rozmiar i kolor
        const size = Math.random() * 10 + 5; // Wielkość od 5px do 15px
        light.style.width = `${size}px`;
        light.style.height = `${size}px`;
        light.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

        body.appendChild(light);

        // Animacja rozmywania i zanikania
        setTimeout(() => {
            light.style.opacity = 0;
            light.style.transform = "scale(2)";
        }, 100);

        // Usuwanie elementu po zakończeniu animacji
        setTimeout(() => {
            light.remove();
        }, 3000);
    }

    // Tworzenie światełek co 300ms
    setInterval(createLight, 300);
});
