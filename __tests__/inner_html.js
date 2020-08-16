const createNewElement = require("../src/index.ts");

// Create a simple div element with span element
test("create a div element", () => {
  let newElement = createNewElement({
    elementType: "div",
    innerHTML: "<span>Hello World</span>",
  });

  expect(newElement).toMatchInlineSnapshot(`
    <div>
      <span>
        Hello World
      </span>
    </div>
  `);
});
