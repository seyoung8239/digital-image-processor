import { applyNoise } from "./noise.js";

let idt;
let nidt;

function setHandler() {
    const $imgInput = document.querySelector("#fileInput");
    const $imgWrapper = document.querySelector("#imgPrevWrapper");
    const $noiseForm = document.querySelector("#noiseForm");

    $imgInput.addEventListener("change", (e) => {
        const [file] = e.target.files;
        if (file) {
            $imgWrapper.innerHTML = "";
            const $imgEl = createImg(file);
            $imgEl.onload = () => {
                idt = getImageData($imgEl);
            };
            $imgWrapper.appendChild($imgEl);
        }
    });

    $noiseForm.addEventListener("change", (e) => {
        if (!idt) return;
        const selectedOption = e.target.value;
        nidt = applyNoise(idt, selectedOption);
    });
}

function createImg(imgFile) {
    const $prevImg = new Image();
    $prevImg.src = URL.createObjectURL(imgFile);

    return $prevImg;
}

const getImageData = ($imgEl) => {
    const $cvs = document.createElement("canvas");
    [$cvs.width, $cvs.height] = [$imgEl.naturalWidth, $imgEl.naturalHeight];
    const ctx = $cvs.getContext("2d");
    ctx.drawImage($imgEl, 0, 0, $cvs.width, $cvs.height);

    return ctx.getImageData(0, 0, $cvs.width, $cvs.height);
};

setHandler();
