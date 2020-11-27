const c = require("../src/index.ts");

test("create an header with id", () => {
	let el = c("h1", { id: "mast" });

	expect(el).toMatchSnapshot();
});

test("create a paragraph with class", () => {
	let el = c("p", { class: "text-center" });

	expect(el).toMatchSnapshot();
});

test("create an input element", () => {
	let el = c("input", {
		type: "text",
		id: "fullname",
		name: "fullname",
		required: true,
		placeholder: "Your full name",
	});

	expect(el).toMatchSnapshot();
});

test("create a label element", () => {
	let el = c("label", { for: "fullname" });
	expect(el).toMatchSnapshot();
});

test("create a div element with multiple classes", () => {
	let el = c("div", { class: "text-right text-primary bg-dark" });
	expect(el).toMatchSnapshot();
});

test("create a button with listener handler", () => {
	let el = c("button", {
		type: "button",
		onclick: () => console.log("Hello World!"),
		class: "btn-success",
	});
	expect(el).toMatchSnapshot();
});
