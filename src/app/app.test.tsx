import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("Should main tag exist", () => {
  render(<Home />);

  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});
