const sketchpad = document.querySelector(".sketchpad");

// var fragment = document.createDocumentFragment();
const makeGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const pix = document.createElement("div");
    pix.setAttribute("class", "pix");
    pix.addEventListener(
      "mouseover",
      () => (pix.style.backgroundColor = "black")
    );
    sketchpad.appendChild(pix);
    console.log("adding div");
  }
};

makeGrid(16);
// sketchpad.appendChild(fragment);
