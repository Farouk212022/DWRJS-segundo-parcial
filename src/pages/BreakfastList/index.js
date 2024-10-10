import "./index.css";
import SearchBox from "../../components/SearchBox";
import BreakfastCard from "../../components/BreakfastCard";
import HomeButton from "../../components/HomeButton";
import { useBreakfastContext } from "../../context/breakfastCtx";
import useBreakfast from "../../hooks/useBreakfast";
import React, { useState } from "react";

const BreakfastList = () => {
  useBreakfast();
  const { breakfastList, loading } = useBreakfastContext();
  const [search, setSearch] = useState(0);

  return (
    <>
      <header className="header">
        <HomeButton />
        <div className="search-bar-container">
          <SearchBox />
        </div>
      </header>
      <main className="App">
        {loading ? (
          <div className="loading-letters">
            <p>Cargando...</p>
          </div>
        ) : breakfastList=== null ? (
          <div className="loading-letters">
            <p>No se encontraron desayunos</p>
          </div>
        ) : (
          breakfastList.map((breakfast) => (
            <BreakfastCard key={breakfast.id} breakfast={breakfast} />
          ))
        )}
      </main>
    </>
  );
};
export default BreakfastList;
