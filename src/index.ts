interface ElementInterface {
  elementType: string;
  elementText?: string;
  elementClass?: string | string[];
  elementId?: string;
  elementName?: string;
  innerHTML?: string;
  otherAttr?: object;
  listener?: [{ on: string; callback: any }];
  svgPath?: string;
  viewBox?: string;
  svgWidth?: string;
}

const createHTMLElement = (params: ElementInterface) => {
  //  destructure params
  const {
    elementType,
    elementClass,
    elementId,
    elementName,
    elementText,
    innerHTML,
    otherAttr,
    listener,
    svgPath,
    viewBox,
    svgWidth,
  } = params;

  //  Element variable
  let newElement;

  //  Create HTML element
  if (elementType && elementType.toLowerCase() !== "svg") {
    newElement = document.createElement(elementType);
  }

  // Create SVG Element
  if (elementType && elementType.toLowerCase() === "svg") {
    newElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // SVG ViewBox
    if (viewBox) {
      newElement.setAttribute("viewBox", viewBox);
    }

    // SVG Path
    if (svgPath) {
      let _path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      _path.setAttribute("d", svgPath);
      newElement.appendChild(_path);
    }

    // SVG Width
    svgWidth
      ? newElement.setAttribute("width", svgWidth)
      : newElement.setAttribute("width", "1em");
  }

  // Append ID
  if (elementId) newElement.id = elementId;

  // Append Name
  if (elementName) newElement.setAttribute("name", elementName);

  // Append Text Content
  if (elementText) newElement.textContent = elementText;

  // Append Inner HTML
  if (innerHTML) newElement.innerHTML = innerHTML;

  // Append other attributes
  // Correct and appropriate HTML attribute must be used
  if (otherAttr) {
    for (let [key, value] of Object.entries(otherAttr)) {
      newElement.setAttribute(key, value);
    }
  }

  // Append Class(es)
  if (elementClass) {
    if (typeof elementClass === "object") {
      elementClass.forEach((_class: string | string[]) => {
        // check if child is also an array
        if (typeof _class === "object") {
          _class.forEach((innerClass: string) => {
            newElement.classList.add(innerClass);
          });
        } else {
          newElement.classList.add(_class);
        }
      });
    } else {
      newElement.className = elementClass;
    }
  }

  // Attach event listener(s)
  if (listener) {
    listener.forEach((event) => {
      if (event.on && (typeof event.callback).toLowerCase() === "function") {
        const { on, callback } = event;
        newElement.addEventListener(`${on}`, callback);
      } else {
        console.error(new Error("Wrong parameters."));
      }
    });
  }

  return newElement;
};

export default createHTMLElement;
