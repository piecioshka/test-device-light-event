const MAX_LUX_VALUE = 7000;
const MAX_COLOR_VALUE = 255;

function getContrast(r, g, b) {
    let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

function setColor(color) {
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    document.body.style.color = getContrast(color, color, color);
}

window.addEventListener('devicelight', (evt) => {
    let t = evt.value;
    let d = t * 100 / MAX_LUX_VALUE;
    let p = d * MAX_COLOR_VALUE;
    console.log(t);
    setColor(p);
});
