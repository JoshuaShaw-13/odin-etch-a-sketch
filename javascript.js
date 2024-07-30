const grid = document.querySelector("#grid");

i = 0;
while (i < 16) {
    const new_row = document.createElement("div");
    new_row.className = "row";
    j = 0;
    while (j < 16) {
        const new_div = document.createElement("div");
        new_div.className = "square";

        new_div.addEventListener("mouseover", () => {
            console.log("enter");
            new_div.style.backgroundColor = 'red';
        });
        new_div.addEventListener("mouseout", () => {
            console.log("leave");
            new_div.style.backgroundColor = 'blue';
        });

        new_row.appendChild(new_div);
        j++;
    };
    grid.appendChild(new_row);
    i++;
};