//set default color
let color = "black";

function getGridSize() {    
    let input;  
    while (isNaN(input) || input == "" || input > 100 || input <= 0) {
        input = (prompt("Enter canvas size (number between 1 and 100"));  
    }
    return input;
}

function createGrid(size) {
    //if divs were previously colored, turn them white again
    reset();
    //get reference to canvasDiv to add grid
    let canvas = document.querySelector("#canvas");
    //add amount of columns and rows
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //add divs to the grid
    let divNum = size * size;
    for (let i = 0; i < divNum; i++) {
        let div = document.createElement("div");
        canvas.appendChild(div);

        //add color on mouseover
        div.addEventListener("mouseover", colorDiv);
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function reset() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
}

let click = false;

//UI buttons

//canvas size
const gridSizeBtn = document.querySelector("#gridSizeBtn");
gridSizeBtn.addEventListener("click", () => {
    const size = getGridSize();
    createGrid(size);
})

//reset button
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    reset();
})

//color button
const colorBtn = document.querySelector("#black");
colorBtn.addEventListener("click", () => {
    color = "black";
})

//random color button
const colorRandomBtn = document.querySelector("#randomColor");
colorRandomBtn.addEventListener("click", () => {
    color = "random";
})


createGrid(16);