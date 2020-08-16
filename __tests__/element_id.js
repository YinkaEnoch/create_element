const createNewElement = require("../src/index.ts");

// Check if element has an id
test("Element has an id", () => {
  let newElement = createNewElement({
    elementType: "span",
    elementId: "container",
  });

  expect(newElement.id).toEqual("container");
});
