//get reference for gridSizeBtn to add eventListener
const gridSizeBtn = document.querySelector("#gridSizeBtn");
gridSizeBtn.addEventListener("click", () => {
    let size = getGridSize();
    createGrid(size);
    document.getElementById("gridSizeBtn").style.display = "none";
    addResetBtn();
})

function addResetBtn() {
    const startResetDiv = document.querySelector("#startReset");
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    startResetDiv.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        location.reload();
    })
}

function getGridSize() { 
    let input = (prompt("Enter canvas size"));       
        while (isNaN(input) || input == "") {
            input = (prompt("Enter canvas size")); 
        }
        return parseInt(input);
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
        const div = document.createElement("div");
        div.setAttribute("id", i + 1);
        div.setAttribute("class", "gridItem");
        canvas.appendChild(div);
    }
}

