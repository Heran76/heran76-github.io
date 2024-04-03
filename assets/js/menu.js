document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".layout__menu-toggle");
    let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (event) => {
        // Verificar si el menú está visible o no
        let isVisible = aside.classList.contains("layout__aside--visible");

        // Si no está visible, lo mostramos, si está visible, lo ocultamos
        if (!isVisible) {
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity=0;
            icon_xmark.style.opacity=1;

        } else {
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity=1;
            icon_xmark.style.opacity=0;
        }
    });
    window.addEventListener("resize",()=>{
        let size = parseInt(document.body.clientWidth);
         if(size <= 1060){
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity=1;
            icon_xmark.style.opacity=0;

         }
    })
});
