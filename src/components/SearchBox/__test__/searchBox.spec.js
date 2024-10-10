import React from "react";
import {render,screen} from "@testing-library/react";
import SearchBox from "../index";
import userEvent from '@testing-library/user-event';
import { FilterProvider } from "../../../context/filterCtx";

describe("SearchBox", () => {
  const renderSearchBoxComponent = (searchBox) => {
    return render(
      <FilterProvider>
        {searchBox}
      </FilterProvider>
    );
  }

  it("GIVEN SearchBox component WHEN renders THEN renders correctly", () => {
    renderSearchBoxComponent(<SearchBox />);
    const input = screen.getByRole("textbox");
    const inputLabel = screen.getByPlaceholderText("Buscar receta");
    expect(input).toBeInTheDocument();
    expect (inputLabel).toBeInTheDocument();
  });

  it("GIVEN an input text WHEN type on the SearchBox THEN update the contex", () => {
    renderSearchBoxComponent(<SearchBox />);
    const inputField = screen.getByPlaceholderText("Buscar receta");
    userEvent.type(inputField, "Test Meal");
    expect(inputField).toHaveValue("Test Meal");
  });
})