import Test_brick from "../react-bricks/bricks/test_brick";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("verify h1 text", () => {
  render(<Test_brick />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
