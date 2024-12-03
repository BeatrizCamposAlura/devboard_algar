document.addEventListener("DOMContentLoaded", function() {
    let iconeNoite = document.getElementById("icone-noite");
    let iconeDia = document.getElementById("icone-dia");
    let paginaCompleta = document.querySelector("body");
    let linksHeader = document.querySelectorAll(".links__header");

    iconeNoite.addEventListener("click", function(){
        paginaCompleta.classList.add("modo-dark");

        linksHeader.forEach(link => {
            link.classList.add("modo-dark-links");
        })

    })

    iconeDia.addEventListener("click", function(){
        paginaCompleta.classList.remove("modo-dark");

        linksHeader.forEach(link => {
            link.classList.remove("modo-dark-links");
        })
    })

})