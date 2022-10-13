import { getNoisedData } from "./noise.js";
import { getFilteredData } from "./filter.js";

const img = new Image();

function setHandler() {
    const $imgInput = document.querySelector("#fileInput");
    const $noiseForm = document.querySelector("#noiseForm");
    const $filterForm = document.querySelector("#filterForm");
    const $cvs = document.querySelector("#canvas");
    const ctx = $cvs.getContext("2d");

    $imgInput.addEventListener("change", (e) => {
        const [file] = e.target.files;
        if (file) {
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                ctx.canvas.width = img.width;
                ctx.canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
        }
    });

    $noiseForm.addEventListener("change", (e) => {
        if (!img) return;
        const noiseOption = e.target.value;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const noisedImageData = getNoisedData(imageData, noiseOption);
        ctx.putImageData(noisedImageData, 0, 0);
    });

    $filterForm.addEventListener("change", (e) => {
        if (!img) return;
        const filterOption = e.target.value;

        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const filteredImageData = getFilteredData(imageData, filterOption);
        ctx.putImageData(filteredImageData, 0, 0);
    });
}

setHandler();
