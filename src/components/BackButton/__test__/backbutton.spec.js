import BackButton from "../index";
import BreakFastProvider from "../../context/breakfastCtx";
const { render, screen } = require("@testing-library/react");


const wrapper = ({ children }) => {
  return (<BreakFastProvider>{children}</BreakFastProvider>);
};

describe("BackButton", () => {
  it("render Button", async () => {
    render(<BackButton />, {wrapper});
    const homeButton = screen.getByRole("link", { name: /volver/i });
    expect(homeButton).toBeInTheDocument();
  });
});
