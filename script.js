let color;

function getGridSize() {    
    let input;
    input = prompt("Enter cavans size (number between 1 and 100)");
    if (input === null) {
        return;
    }
    else if (isNaN(input) || input == "" || input > 100 || input <= 0) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        return input;
    }
}

function createGrid(size) {
    // if divs were previously colored, turn them white again
    reset();
    // get reference to canvasDiv to add grid
    let canvas = document.querySelector("#canvas");
    // add amount of columns and rows
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // add divs to the grid
    let divNum = size * size;
    for (let i = 0; i < divNum; i++) {
        let div = document.createElement("div");
        canvas.appendChild(div);

        // add color on mouseover
        div.addEventListener("mouseover", colorDiv);
    }
}

function colorDiv() {
    if (click) {
        switch (color) {
            case "white":
                this.style.backgroundColor = "white";
                break;
            case "rainbow":
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                break;
            case "red":
                this.style.backgroundColor = "red";
                break;
            case "green":
                this.style.backgroundColor = "green";
                break;
            case "yellow":
                this.style.backgroundColor = "yellow";
                break;
            case "brown":
                this.style.backgroundColor = "brown";
                break;
            case "blue":
                this.style.backgroundColor = "blue";
                break;
            default:
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

// create variable to toggel drawing 
let click = false;

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        let draw = document.querySelector("#draw");
        if (click) {
            draw.innerHTML = "Painting!";
            draw.style.color = "Lightgreen";
        }
        else {
            draw.innerHTML = "Not painting!";
            draw.style.color = "Coral";
        }
    }
})


// UI buttons

// canvas size
const gridSizeBtn = document.querySelector("#gridSizeBtn");
gridSizeBtn.addEventListener("click", () => {
    const size = getGridSize();
    createGrid(size);
})

// color buttons
const colorBtns = document.querySelectorAll(".color");
colorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        color = e.target.id;
    })
})

// reset button
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    reset();
})

// create default 16x16 canvas
createGrid(16);