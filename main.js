document.addEventListener("DOMContentLoaded", () => {

    const zoomableImages = document.querySelectorAll(".zoomable");

    // Als er geen afbeeldingen gevonden zijn, stoppen we.
    if (zoomableImages.length === 0) {
        console.warn("Geen .zoomable afbeeldingen gevonden.");
        return;
    }


    // --------------------------------------------------
    // Lightbox maken
    // --------------------------------------------------

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <div class="lightbox__dialog">

            <button
                class="lightbox__close"
                aria-label="Afbeelding sluiten"
            >
                &times;
            </button>

            <img
                class="lightbox__image"
                src=""
                alt=""
            >

            <div class="lightbox__caption"></div>

        </div>
    `;

    document.body.appendChild(lightbox);


    // --------------------------------------------------
    // Elementen ophalen
    // --------------------------------------------------

    const dialog = lightbox.querySelector(".lightbox__dialog");
    const image = lightbox.querySelector(".lightbox__image");
    const caption = lightbox.querySelector(".lightbox__caption");
    const closeButton = lightbox.querySelector(".lightbox__close");


    // --------------------------------------------------
    // Afbeelding openen
    // --------------------------------------------------

    zoomableImages.forEach((zoomableImage) => {

        zoomableImage.addEventListener("click", () => {

            image.src = zoomableImage.src;
            image.alt = zoomableImage.alt;

            caption.textContent = zoomableImage.alt;

            lightbox.classList.add("lightbox--visible");

            document.body.style.overflow = "hidden";

        });

    });


    // --------------------------------------------------
    // Sluiten
    // --------------------------------------------------

    function closeLightbox() {

        lightbox.classList.remove("lightbox--visible");

        document.body.style.overflow = "";

    }


    // Klik op X

    closeButton.addEventListener("click", closeLightbox);


    // Klik op donkere achtergrond

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    // Escape

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

});
