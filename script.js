//get reference for gridSizeBtn to add eventListener
const gridSizeBtn = document.querySelector("#gridSizeBtn");
gridSizeBtn.addEventListener("click", () => {
    getGridSize();
})

function getGridSize() { 
    let input = (prompt("Enter canvas size"));       
        while (isNaN(input)) {
            input = (prompt("Enter canvas size")); 
        }
        return parseInt(input);
}
