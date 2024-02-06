import { render, screen, cleanup,fireEvent  } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import Button from "../components/buttons";

// afterEach function runs after each test suite is executed
afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
})

describe("Button Component", () => {
  const checkClick = jest.fn();
  render(<Button type={'button'} label="signin" isFetching={false} onClick={checkClick} />);

	const button = screen.getByTestId("button");
	// Test 1
	test("Button Rendering", () => {
		expect(button).toBeInTheDocument();
	})

	// Test 2 
    test("Button Text", () => {
		let btnText = "signin"
        expect(button).toHaveTextContent(btnText);
    });
	//test 3
	test("Button call with", ()=>{
		render(<Button type={'submit'} label="signin" isFetching={true} onClick={checkClick} />);
		let button =screen.getByTestId("button");
		expect(button).toHaveTextContent("Loading ...");
	})
})
