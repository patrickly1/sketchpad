document.getElementById("createGrid").addEventListener("click", function() {
    const numSides = parseInt(document.getElementById("numSides").value);
    if (!isNaN(numSides) && numSides > 0 && numSides < 101) {
        createGrid(numSides);
    } else {
        alert("Please enter a valid numbner of sides (1-100)");
    }
});

function createGrid(numSides) {
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${numSides}, 1fr)`;

    for (let i = 0; i < numSides; i++) {
        for (let j = 0; j < numSides; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }
    }

    const gridItems = document.querySelectorAll(".grid-item");
    let isMouseDown = false;

    function handleMouseDown() {
        isMouseDown = true;
        this.style.backgroundColor = "black";
    }

    function handleMouseUp() {
        isMouseDown = false;
    }

    function handleMouseMove(event) {
        if(isMouseDown) {
            event.target.style.backgroundColor = "black";
        }
    }

    gridItems.forEach(item => {
        item.addEventListener("mousedown", handleMouseDown);
        item.addEventListener("mouseup", handleMouseUp);
        item.addEventListener("mousemove", handleMouseMove);
    })

}


