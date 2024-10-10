import React from "react";
import { render, screen } from "@testing-library/react";
import BreakfastDetails from "../index";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import FetchMealById from "../../../services/mealtService.js";
import { MOCK_BREAKFAST } from "./breakfast.spec.aux.js";

jest.mock("../../../services/mealtService", () => ({
  FetchMealById: jest.fn().mockResolvedValue(MOCK_BREAKFAST),
}));


describe("BreakfastDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("GIVEN breakfast id WHEN component is rendering with a breakfast THEN should render the breakfast details", () => {
    const breakfastId = "52767";
    render(
      <MemoryRouter initialEntries={[`/detail/${breakfastId}`]}>
        <Routes>
          <Route
            path={[`/detail/:idBreakfast`]}
            element={<BreakfastDetails />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Bakewell tart")).toBeInTheDocument();
  });
});
