const createNewElement = require("../src/index.ts");

// Create an input element with name property and other attr
test("create an input element with name property", () => {
  let newElement = createNewElement({
    elementType: "input",
    elementName: "username",
    elementId: "username",
    otherAttr: {
      type: "text",
      placeholder: "Username",
    },
  });

  expect(newElement).toMatchInlineSnapshot(`
    <input
      id="username"
      name="username"
      placeholder="Username"
      type="text"
    />
  `);
});
