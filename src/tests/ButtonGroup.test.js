/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonGroup from "../components/ButtonGroup";
// import ButtonGroup from "../brokenComponents/ButtonGroup";

describe('ButtonGroup component', () => {
    test("should render text with left align when left button is clicked", () => {
        render(<ButtonGroup />);

        const leftBtn = screen.getByRole('radio', { name: 'left' });

        userEvent.click(leftBtn);

        const text = screen.getByTestId('text');
        expect(text.align).toBe('left');
    });

    test("should render text with center align when center button is clicked", () => {
        render(<ButtonGroup />);

        const centerBtn = screen.getByRole('radio', { name: 'center' });

        userEvent.click(centerBtn);

        const text = screen.getByTestId('text');
        expect(text.align).toBe('center');
    });

    test("should render text with right align when right button is clicked", () => {
        render(<ButtonGroup />);
        
        const rightBtn = screen.getByRole('radio', { name: 'right' });

        userEvent.click(rightBtn);

        const text = screen.getByTestId('text');
        expect(text.align).toBe('right');
    });
});