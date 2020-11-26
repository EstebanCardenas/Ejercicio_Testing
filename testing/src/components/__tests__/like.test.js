import '@testing-library/jest-dom'
import React from "react"
import ReactDOM from 'react-dom'
import { act } from "react-dom/test-utils"
import Like from '../like'

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <Like/>,
        container
      );
    });
});
  
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Testing Like component", () => {

	it("Defaults to 0 likes", () => {
	  const likes = container.querySelector("p");
	  expect(likes.textContent).toBe("Likes: 0");
	});
    it("Like increases when liked", () => {
        const likeBut = document.getElementById("increment");
        const likes = container.querySelector("p");
        act(() => {
          likeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(likes.textContent).toBe("Likes: 1");
    });
    it("Like decreases when disliked", () => {
        const dislikeBut = document.getElementById("decrement");
        const likes = container.querySelector("p");
        act(() => {
          dislikeBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(likes.textContent).toBe("Likes: -1");
    });

});