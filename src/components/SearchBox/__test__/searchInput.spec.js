import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import SearchInput from "../searchInput";

jest.useFakeTimers();
describe("SearchInput", () => {
  const mockSetFilters = jest.fn();
  it("GIVEN change in SearchInput WHEN type on textfield THEN update filters", () => {
    jest.spyOn(require('../../../context/filterCtx'), 'useFilterContext').mockReturnValue({
      filters: { search: '' },
      setFilters: mockSetFilters,
    });
    render(<SearchInput />);
    const inputField = screen.getByPlaceholderText('Buscar receta');
    userEvent.type(inputField, 'Test Meal');
    jest.advanceTimersByTime(500);
    expect(mockSetFilters).toHaveBeenCalledWith({ search: 'Test Meal' });
  });
});
