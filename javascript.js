const GRID_WIDTH = 640;
const GRID_HEIGHT = 640;

const grid = document.querySelector("#grid");
const new_grid_btn = document.querySelector("#new_grid");

new_grid_btn.addEventListener("click", () => {
    let width = prompt("Enter new width: ");
    let height = prompt("Enter new height: ");
    
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    createNewGrid(width, height);
});

function createNewGrid(width = 16, height = 16) {
    let square_width = GRID_WIDTH/width;
    let square_height = GRID_HEIGHT/height;
    console.log(square_height);
    console.log(square_width);
    
    i = 0;
    while (i < height) {
        const new_row = document.createElement("div");
        new_row.className = "row";
        j = 0;
        while (j < width) {
            const new_div = document.createElement("div");
            new_div.className = "square";

            new_div.style.width = square_width + "px";
            new_div.style.height = square_height + "px";

            if ((i+j)%2 == 0) {
                new_div.style.backgroundColor = 'gray';
            } else {
                new_div.style.backgroundColor = 'black';
            };

            new_div.addEventListener("mouseover", () => {
                new_div.style.backgroundColor = 'red';
            });
            new_div.addEventListener("mouseout", () => {
                new_div.style.backgroundColor = 'blue';
            });

            new_row.appendChild(new_div);
            j++;
        };
        grid.appendChild(new_row);
        i++;
    };
};

createNewGrid();