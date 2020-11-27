const c = require("../src/index.ts");

test("create a button with listener handler", () => {
	const mockCallback = jest.fn();
	let el = c("button", {
		type: "button",
		// onclick: () => console.log("Hello World!"),
		class: "btn-success",
		onclick: mockCallback,
	});

	document.body.appendChild(el);
	document.querySelector(".btn-success").click();

	expect(mockCallback).toHaveBeenCalled();
});
