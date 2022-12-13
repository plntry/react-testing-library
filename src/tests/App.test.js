import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
// import App from "../brokenComponents/App";

describe('App component', () => {
    test("should display image when the first tab is selected", () => {
        render(<App />);

        const firstTab = screen.getByText(/Picture/i);

        userEvent.click(firstTab);
        
        const img = screen.queryByAltText(/.../i);
        expect(img).not.toBeNull();
    });

    test("should display Calculation component when the second tab is selected", () => {
        render(<App />);

        const secondTab = screen.getByText(/Calculations/i);

        userEvent.click(secondTab);
        
        const evaluateBtn = screen.getByText(/Evaluate/i);
        expect(evaluateBtn).toBeInTheDocument();
    });

    test("should display ButtonGroup component when the third tab is selected", () => {
        render(<App />);

        const thirdTab = screen.getByText(/Group/i);

        userEvent.click(thirdTab);
        
        const btnGroup = screen.getByTestId('button-group');
        expect(btnGroup).toBeInTheDocument();
    });

    test("shouldn't display ImageCard component when the second tab is selected", () => {
        render(<App />);

        const secondTab = screen.getByText(/Calculations/i);

        userEvent.click(secondTab);
        
        const img = screen.queryByAltText(/.../i);
        expect(img).toBeNull();
    });

    test("shouldn't display ImageCard component when the third tab is selected", () => {
        render(<App />);

        const thirdTab = screen.getByText(/Group/i);

        userEvent.click(thirdTab);
        
        const img = screen.queryByAltText(/.../i);
        expect(img).toBeNull();
    });

    test("shouldn't display Calculation component when the first tab is selected", () => {
        render(<App />);

        const firstTab = screen.getByText(/Picture/i);

        userEvent.click(firstTab);
        
        const evaluateBtn = screen.queryByText(/Evaluate/i);
        expect(evaluateBtn).toBeNull();
    });

    test("shouldn't display Calculation component when the third tab is selected", () => {
        render(<App />);

        const thirdTab = screen.getByText(/Group/i);

        userEvent.click(thirdTab);
        
        const evaluateBtn = screen.queryByText(/Evaluate/i);
        expect(evaluateBtn).toBeNull();
    });

    test("shouldn't display ButtonGroup component when the first tab is selected", () => {
        render(<App />);

        const firstTab = screen.getByText(/Picture/i);

        userEvent.click(firstTab);
        
        const btnGroup = screen.queryByTestId('button-group');
        expect(btnGroup).toBeNull();
    });

    test("shouldn't display ButtonGroup component when the second tab is selected", () => {
        render(<App />);

        const secondTab = screen.getByText(/Calculations/i);

        userEvent.click(secondTab);
        
        const btnGroup = screen.queryByTestId('button-group');
        expect(btnGroup).toBeNull();
    });
});