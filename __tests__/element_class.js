const createNewElement = require("../src/index.ts");

// Check if element has a class attribute
test("Element has a class attribute", () => {
  let newElement = createNewElement({
    elementType: "span",
    elementClass: "red-text",
  });

  // First class property
  let classProps = newElement.classList[0];

  expect(classProps).toEqual("red-text");
});

// Check for multiple classes
test("Element has a class attribute", () => {
  let newElement = createNewElement({
    elementType: "span",
    elementClass: ["red-text", "blue-bg", "bold", "underline"],
  });

  expect(newElement.classList.toString()).toEqual(
    "red-text blue-bg bold underline"
  );
});
