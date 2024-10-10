import React from "react";
import "./index.css";

import { useFilterContext } from "../../context/filterCtx";

const SearchInput = () => {
  const { filters, setFilters } = useFilterContext();
  return (
    <input
      onChange={(e) =>
        setTimeout(
          () => setFilters({ ...filters, search: e.target.value }),
          250
        )
      }
      type="text"
      placeholder="Buscar receta"
    />
  );
};

export default SearchInput;