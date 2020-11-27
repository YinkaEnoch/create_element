const createHTMLElement = (
  elemType: string = "div",
  attr?: {} = {},
  children?: string | []
) => {
  //  Create HTML element
  let newElement = document.createElement(elemType);

  // Create SVG or path element
  if (elemType.toLowerCase() === "svg" || elemType.toLowerCase() === "path") {
    newElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      elemType
    );
  }

  // Add attributes
  if (attr) {
    for (let [key, value] of Object.entries(attr)) {
      typeof value === "function"
        ? newElement.addEventListener(key.substring(2), value)
        : newElement.setAttribute(key, value);
    }
  }

  // Add text
  if (typeof children === "string") {
    newElement.textContent = children;
  }

  // Add children element
  if (children instanceof Array) {
    children.forEach((child) => newElement.appendChild(child));
  }

  return newElement;
};

// export default createHTMLElement;
module.exports = createHTMLElement;
