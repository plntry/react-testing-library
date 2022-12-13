/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
// import App from "../brokenComponents/App";

describe('App component', () => {
    beforeEach(() => {
        render(<App />);
    });

    test("should display only ImageCard when the first tab is selected", () => {
        const firstTab = screen.getByText(/Picture/i);

        userEvent.click(firstTab);
        
        const img = screen.queryByAltText(/.../i);
        expect(img).not.toBeNull();

        const evaluateBtn = screen.queryByText(/Evaluate/i);
        expect(evaluateBtn).toBeNull();

        const btnGroup = screen.queryByTestId('button-group');
        expect(btnGroup).toBeNull();
    });

    test("should display only Calculation component when the second tab is selected", () => {
        const secondTab = screen.getByText(/Calculations/i);

        userEvent.click(secondTab);
        
        const evaluateBtn = screen.queryByText(/Evaluate/i);
        expect(evaluateBtn).not.toBeNull();

        const img = screen.queryByAltText(/.../i);
        expect(img).toBeNull();

        const btnGroup = screen.queryByTestId('button-group');
        expect(btnGroup).toBeNull();
    });

    test("should display only ButtonGroup component when the third tab is selected", () => {
        const thirdTab = screen.getByText(/Group/i);

        userEvent.click(thirdTab);
        
        const btnGroup = screen.queryByTestId('button-group');
        expect(btnGroup).not.toBeNull();

        const img = screen.queryByAltText(/.../i);
        expect(img).toBeNull();

        const evaluateBtn = screen.queryByText(/Evaluate/i);
        expect(evaluateBtn).toBeNull();
    });
});