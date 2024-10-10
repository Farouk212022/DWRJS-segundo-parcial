import { render, screen,prettyDOM } from "@testing-library/react";
import BreakfastCard from "../index";
import { MOCK_BREAKFAST } from "../../../mocks/breakfast.spec.aux";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom");

describe("BreakfastCard", () => {
  const mocknavigate = jest.fn();
  beforeEach(() => {
    useNavigate.mockReturnValue(mocknavigate);
  });

  it("GIVEN breakfast card component WHEN component is rendering with a breakfast THEN should render the breakfast", () => {
    render(<BreakfastCard breakfast={MOCK_BREAKFAST} />);
    expect(screen.getByText("Bakewell tart")).toBeInTheDocument();
    const image = screen.getByTestId("meal-image");
    const styles = window.getComputedStyle(image);
    expect(styles.backgroundImage).toContain(
      "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg"
    );
  });

  it("GIVEN click on card WHEN card is clicked THEN should navigate to detail page", () => {
    render(<BreakfastCard breakfast={MOCK_BREAKFAST} />);
    userEvent.click(screen.getByText("Bakewell tart"));
    expect(mocknavigate).toHaveBeenCalledWith("/detail/52767");
  });
});
