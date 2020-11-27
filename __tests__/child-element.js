const c = require("../src/index.ts");

test("add items to an unordered list", () => {
	let el = c("ul", { id: "state-of-origin" }, [
		c("li", { class: "grey-text" }, "Oyo"),
		c("li", {}, "Osun"),
		c("li", {}, "Ogun"),
		c("li", {}, "Ondo"),
	]);

	expect(el).toMatchSnapshot();
});
