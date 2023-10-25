function getGridSize() {    
    let input;  
    while (isNaN(input) || input == "" || input > 100 || input <= 0) {
        input = (prompt("Enter canvas size (number between 1 and 100"));  
    }
    return input;
}

function createGrid(size) {
    //get reference to canvasDiv to add grid style to it
    let canvas = document.querySelector("#canvas");
    //add amount of columns and rows to grid
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //add divs to the grid
    let divNum = size * size;
    for (let i = 0; i < divNum; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "gridItem");
        div.style.backgroundColor = "lightgreen";
        canvas.appendChild(div);
    }
}

function addResetBtn() {
    const buttonsTop = document.querySelector("#buttonsTop");
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    buttonsTop.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        location.reload();
    })
}

function start() {
    //get reference for gridSizeBtn to add eventListener
    const gridSizeBtn = document.querySelector("#gridSizeBtn");
    gridSizeBtn.addEventListener("click", () => {
        const size = getGridSize();
        createGrid(size);
        document.getElementById("gridSizeBtn").style.display = "none";
        addResetBtn();
    })
}

createGrid(16);

start();
