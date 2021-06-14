import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ExpenseTotal from './components/ExpenseTotal';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders total amount", () => {
    act(() => {
        render(<ExpenseTotal total="0" />, container);
    });
    expect(container.textContent).toBe("Total: £0");

    act(() => {
        render(<ExpenseTotal total="100" />, container);
    });
    expect(container.textContent).toBe("Total: £100");

});