export function getNoisedData(idt, option) {
    switch (option) {
        case "gaussian_noise":
            return applyGaussianNoise(idt);
        case "salt_and_pepper":
            return applySaltAndPepper(idt);
        case "none":
            return applyOriginal(idt);
        default:
            console.log("none");
    }
}

function applyOriginal(idt) {
    return idt;
}

function applyGaussianNoise(idt) {
    const data = idt.data;
    const noiseIntensity = 50;

    for (let i = 0; i < data.length; i += 4) {
        const gaussianNumber = getGaussianNumber(
            -noiseIntensity,
            noiseIntensity,
            1
        );

        data[i] += gaussianNumber;
        data[i + 1] += gaussianNumber;
        data[i + 2] += gaussianNumber;
    }

    return idt;
}

function applySaltAndPepper(idt) {
    const data = idt.data;

    const spRatio = 200;
    const white = 255;
    const black = 0;
    let color, rn;
    let b;

    for (let i = 0; i < data.length; i += 4) {
        rn = Math.floor(Math.random() * spRatio);

        if (rn === 0) color = black;
        else if (rn === spRatio - 1) color = white;
        else continue;

        if (color === black) b = i;
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
    }

    return idt;
}

function getGaussianNumber(min, max, skew) {
    let u = 0,
        v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = getGaussianNumber(min, max, skew);
    else {
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min
    }
    return num;
}
