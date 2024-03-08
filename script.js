

const makeGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const pix = document.createElement("div");
    pix.setAttribute("class", "pix");
    pix.addEventListener(
      "mouseover",
      () => (pix.style.backgroundColor = "black")
    );
    grid.appendChild(pix);
    console.log("adding div");
  }
};


const sketchpad = document.querySelector(".sketchpad");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");
sketchpad.appendChild(grid);

// Make control panel for buttons and stuff
const controls = document.createElement("div");
controls.setAttribute("class", "controls");
sketchpad.appendChild(controls);

// Make reset button
const reset = document.createElement("button");
reset.textContent = "RESET";
controls.appendChild(reset);

makeGrid(16);