function toggleApartats() {
    const text = document.getElementById("apartats-text");
    text.style.display = (text.style.display === "block") ? "none" : "block";
}

function toggleText() {
    const text = document.getElementById("introduccio-text");
    text.style.display = (text.style.display === "block") ? "none" : "block";
}

function toggleProces() {
    const fotos = document.getElementById("proces-contenidor");

    fotos.style.display = (fotos.style.display === "flex") ? "none" : "flex";
}