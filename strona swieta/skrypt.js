// skrypt.js
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
        alert("Kliknąłeś w nagłówek!");
    });

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "red";
        });

        link.addEventListener("mouseout", function () {
            link.style.color = ""; // Powrót do domyślnego stylu
        });
    });
});