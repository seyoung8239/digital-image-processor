export function applyNoise(idt, option) {
    switch (option) {
        case "gaussian_noise":
            return applyGaussianNoise(idt);
        case "salt_and_pepper":
            return applySaltAndPepper(idt);
        default:
            console.log("none");
    }
}

function applyGaussianNoise(idt) {
    console.log(idt);
}

function applySaltAndPepper(idt) {}
