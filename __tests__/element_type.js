const createNewElement = require("../src/index.ts");

// Create a simple div element with text
test("create a div element", () => {
  let newElement = createNewElement({
    elementType: "div",
    elementText: "Hello World",
  });

  expect(newElement).toMatchInlineSnapshot(`
    <div>
      Hello World
    </div>
  `);
});
