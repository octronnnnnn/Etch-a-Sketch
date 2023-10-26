//set default color
let color = "black";

//create variable to toggel drawing 
let click = false;

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        let draw = document.querySelector("#draw");
        if (click) {
            draw.innerHTML = "You can draw now!";
        }
        else {
            draw.innerHTML = "Click to start drawing!";
        }
    }
})

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
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if (color === "white") {
            this.style.backgroundColor = "white";
        }
        else {
            this.style.backgroundColor = "black";
        }
    }
    }

function reset() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
}


//UI buttons

//canvas size
const gridSizeBtn = document.querySelector("#gridSizeBtn");
gridSizeBtn.addEventListener("click", () => {
    const size = getGridSize();
    createGrid(size);
})

//black button
const colorBtn = document.querySelector("#black");
colorBtn.addEventListener("click", () => {
    color = "black";
})

//random color button
const colorRandomBtn = document.querySelector("#randomColor");
colorRandomBtn.addEventListener("click", () => {
    color = "random";
})

//erase button
const eraseBtn = document.querySelector("#erase");
eraseBtn.addEventListener("click", () => {
    color = "white";
})

//reset button
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    reset();
})


createGrid(16);