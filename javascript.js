const GRID_SIZE = 640;

const grid = document.querySelector("#grid");
const new_grid_btn = document.querySelector("#new_grid");

new_grid_btn.addEventListener("click", () => {
    let size = prompt("Enter new square size (1-100): ");
    while (size < 1 || size > 100) {
        size = prompt("Invalid Entry! \n Enter new square size (1-100): ")
    };
    
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    createNewGrid(size);
});

function createNewGrid(size = 16) {
    let square_size = GRID_SIZE/size;

    i = 0;
    while (i < size) {
        const new_row = document.createElement("div");
        new_row.className = "row";
        j = 0;
        while (j < size) {
            const new_div = document.createElement("div");
            new_div.className = "square";

            new_div.style.width = square_size + "px";
            new_div.style.height = square_size + "px";
            new_div.style.opacity = 0.1;

            if ((i+j)%2 == 0) {
                new_div.style.backgroundColor = 'gray';
            } else {
                new_div.style.backgroundColor = 'black';
            };

            new_div.addEventListener("mouseover", () => {
                new_div.style.backgroundColor = 'rgb(255,0,0)';
                new_div.style.opacity = +new_div.style.opacity + 0.1;
            });
            new_div.addEventListener("mouseout", () => {
                let r = Math.random()*255;
                let g = Math.random()*255;
                let b = Math.random()*255;
                let rgb = "rgb("+r+","+g+","+b+")";
                
                new_div.style.backgroundColor = rgb;
            });

            new_row.appendChild(new_div);
            j++;
        };
        grid.appendChild(new_row);
        i++;
    };
};

createNewGrid();