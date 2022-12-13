import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculations from "../components/Calculations";
// import Calculations from "../brokenComponents/Calculations";

describe("Calculations", () => {
  test("renders correctly", () => {
    render(<Calculations />);
    const firstNumber = screen.getByRole("spinbutton", {
      name: "first number",
    });
    expect(firstNumber).toBeInTheDocument();
    const cardTitle = screen.getByText("Result");
    expect(cardTitle).toBeInTheDocument();
  });
  test("renders result heading with value 0", () => {
    render(<Calculations />);
    const resultHeader = screen.getByRole("heading", { name: 0 });
    expect(resultHeader).toHaveTextContent(0);
  });
  test("check for adding numbers", () => {
    render(<Calculations />);
    const resultHeader = screen.getByRole("heading", { name: 0 });
    const firstNumberInput = screen.getByRole("spinbutton", {
      name: "first number",
    });
    userEvent.type(firstNumberInput, "1");
    const secondNumberInput = screen.getByRole("spinbutton", {
      name: "second number",
    });
    userEvent.type(secondNumberInput, "2");
    const evaluateBtn = screen.getByRole("button", {
      name: /evaluate/i,
    });
    userEvent.click(evaluateBtn);
    expect(resultHeader).toHaveTextContent(3);
  });
  test("plus to minus change", () => {
    render(<Calculations />);
    const operation = screen.getByRole("button", { name: "operation" });
    const dropdownItem = screen.getByText("-");
    userEvent.click(dropdownItem);
    expect(operation).toHaveTextContent("-");
  });
  test("check for subtraction numbers", () => {
    render(<Calculations />);
    const dropdownItem = screen.getByText("-");
    userEvent.click(dropdownItem);
    const resultHeader = screen.getByRole("heading", { name: 0 });
    const firstNumberInput = screen.getByRole("spinbutton", {
      name: "first number",
    });
    userEvent.type(firstNumberInput, "145");
    const secondNumberInput = screen.getByRole("spinbutton", {
      name: "second number",
    });
    userEvent.type(secondNumberInput, "45");
    const evaluateBtn = screen.getByRole("button", {
      name: /evaluate/i,
    });
    userEvent.click(evaluateBtn);
    expect(resultHeader).toHaveTextContent(100);
  });
});
