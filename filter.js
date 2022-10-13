let data, width, height, filter;
let cnt = 3;

export function getFilteredData(idt, option) {
    if (option === "none") return applyOriginal(idt);
    filter = selectKernel(option);
    let isConv = false;
    if (option === "box_filter" || option === "gaussian_filter") isConv = true;

    return applyFilter(idt, isConv);
}

function applyFilter(idt, isConv) {
    width = idt.width;
    height = idt.height;
    data = idt.data;

    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            // rgb
            for (let k = 0; k < 3; k++) {
                const curIdx = getIdxFromPos(i, j, k);
                const op = isConv ? convolution : median;
                data[curIdx] = op(i, j, k);
            }
        }
    }

    return idt;
}

function selectKernel(option) {
    switch (option) {
        case "box_filter":
            return boxKernel;
        case "gaussian_filter":
            return gaussianKernel;
        default:
            return;
    }
}

function convolution(curX, curY, k) {
    let d = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            d +=
                filter[i][j] *
                data[getIdxFromPos(curX + i - 1, curY + j - 1, k)];
        }
    }
    return d;
}

function median(curX, curY, k) {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr.push(data[getIdxFromPos(curX + i - 1, curY + j - 1, k)]);
        }
    }
    arr.sort();
    if (Math.floor(Math.random()*10000) === 4) {
        console.log(arr);
    }
    return arr[4];
}

function getIdxFromPos(i, j, k = 0) {
    return i * width * 4 + j * 4 + k;
}

function applyOriginal(idt) {
    return idt;
}

const boxKernel = [
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
];

const gaussianKernel = [
    [1 / 16, 1 / 8, 1 / 16],
    [1 / 8, 1 / 4, 1 / 8],
    [1 / 16, 1 / 8, 1 / 16],
];
