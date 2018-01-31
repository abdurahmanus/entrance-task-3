const startH = 7;
const startM = 31;
const endH = 23;
const endM = 12;
const totalM = (endH * 60 + endM) - (startH * 60 + startM);

const calcPosition = (h, m) => {
    const curM = (h * 60 + m) - (startH * 60 + startM);
    return curM / totalM * 100;
}

const toPosition = (h, m) => {
    return 100 - calcPosition(h, m)
}

export {
    calcPosition,
    toPosition
};