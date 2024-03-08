const makeGrid = (size) => {
  document.querySelectorAll(".pix").forEach((e) => e.remove());
  for (let i = 0; i < size * size; i++) {
    const pix = document.createElement("div");
    pix.setAttribute("class", "pix");
      pix.style.filter = "brightness(1)";
    pix.style.minWidth = 100 / size + "%";
    pix.addEventListener("mouseover", () => {
      pix.style.backgroundColor = getRandomColor();
      const regExp = /\(([^)]+)\)/;
      const currentFilterVal = regExp.exec(pix.style.filter);
      pix.style.filter = `brightness(${currentFilterVal[1] - 0.1})`;
    });
    grid.appendChild(pix);
    console.log("adding div");
  }
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
reset.setAttribute("class", "button");
reset.textContent = "RESET";
reset.addEventListener("click", () => {
  let newSize = prompt();
  makeGrid(newSize);
});
controls.appendChild(reset);

makeGrid(16);
