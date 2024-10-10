import { render, screen } from "@testing-library/react";
import HomeButton from "../index";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom");

describe("HomeButton", () => {
  const mocknavigate = jest.fn();
  beforeEach(() => {
    useNavigate.mockReturnValue(mocknavigate);
  });

  it("GIVEN breakfast card component WHEN component is rendering with a breakfast THEN should render the breakfast", () => {

  });

  it("GIVEN click on home icon WHEN icon is clicked THEN should navigate to main page", () => {
  });
});
