const createNewElement = require("../src/index.ts");

// Check if element has an id
test("Element has an id", () => {
  let newElement = createNewElement({
    elementType: "span",
    elementId: "anchor",
  });

  expect(newElement.id).toEqual("anchor");
});
