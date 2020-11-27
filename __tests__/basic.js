const c = require("../src/index.ts");

test("create basic div element", () => {
	let el = c("div");

	expect(el).toMatchInlineSnapshot(`<div />`);
});

test("create simple svg element", () => {
	let el = c("svg");

	expect(el).toMatchInlineSnapshot(`<svg />`);
});
