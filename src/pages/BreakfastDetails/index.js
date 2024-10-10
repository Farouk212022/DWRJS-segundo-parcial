import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import "./index.css";
import BackButton from "../../components/BackButton";
import { FetchMealById } from "../../services/mealtService";
import HomeButton from "../../components/HomeButton";
import SearchBox from "../../components/SearchBox";

const BreakfastDetails = () => {
  const { idBreakfast } = useParams();
  const [breakfast, setBreakfast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBreakfast = async () => {
      try {
        setBreakfast(await FetchMealById(idBreakfast));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getBreakfast();
  }, [idBreakfast]);

  return (
    <>
      <header className="header">
        <HomeButton />
        <div className="search-bar-container">
          <SearchBox />
        </div>
      </header>
      <main className="App">
        {loading && <p>Cargando...</p>}
        {!loading && breakfast && (
          <body id="recipe-body">
            <div>
              <h1 id="tittle">{breakfast.strMeal}</h1>
            </div>
            <div id="recipe">
              <div
                id="recipe-image"
                style={{
                  backgroundImage: `url(${breakfast.strMealThumb})`,
                }}
              ></div>
              <div id="recipe-description">
                <p>{breakfast.strInstructions}</p>
              </div>
            </div>
          </body>
        )}
        {!loading && !breakfast && <p>Breakfast not found 404 Unu</p>}
      </main>
      <BackButton />
    </>
  );
};

export default BreakfastDetails;
