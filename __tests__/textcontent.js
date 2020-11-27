const c = require("../src/index.ts");

test("add text to a span element", () => {
	let el = c(
		"span",
		{ id: "author", class: "red-text" },
		"Yinka Enoch Adedokun"
	);

	expect(el).toMatchSnapshot();
});
