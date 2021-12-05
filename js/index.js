const UiSelectors = {
    pencilColorSelector: 'pencil-color',
    canvasColorSelector: 'background-color',
    pencilSizeSelector: 'pencil-size',
    clearBtnSelector: '[data-clear-btn]',
    saveBtnSelector: '[data-save-btn]',
};

const pencilColor = document.getElementById(UiSelectors.pencilColorSelector);
const canvasColor = document.getElementById(UiSelectors.canvasColorSelector);
const pencilSize = document.getElementById(UiSelectors.pencilSizeSelector);
const clearBtn = document.querySelector(UiSelectors.clearBtnSelector);
const saveBtn = document.querySelector(UiSelectors.saveBtnSelector);

const paths = [];
const currentPath = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(canvasColor.value)
}

function draw() {
    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            color: pencilColor.value,
            size: pencilSize.value
        }
        currentPath.push(point);
    }
    
    paths.forEach((path) => {
        beginShape();
        path.forEach(({x, y, color, size}) => {
            vertex(x, y);
            strokeWeight(size);
            stroke(color);
        })
        endShape();
    })
    noFill();
}

function mousePressed() {
    currentPath.length = 0

    paths.push(currentPath);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

canvasColor.addEventListener('change', () => {
    background(canvasColor.value);
});

clearBtn.addEventListener('click', () => {
    clear();
    background(canvasColor.value);
});

saveBtn.addEventListener('click', () => {
    save('myCanvas.jpg');
})