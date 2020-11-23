const createHTMLElement = (elemType = "div", attr?, children?) => {
  //  Create HTML element
  let newElement = document.createElement(elemType);

  // Create SVG or path element
  if (elemType.toLowerCase() === "svg" || elemType.toLowerCase() === "path") {
    newElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      elemType
    );
  }

  return newElement;
};

// export default createHTMLElement;
module.exports = createHTMLElement;
