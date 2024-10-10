import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const BreakfastCard = ({ breakfast }) => {
  const navigate = useNavigate();
  const handleBreakfastClick=()=>{
    navigate(`/detail/${breakfast.idMeal}`);
  }
  return (
    <>
      {breakfast && (
        <section id="card-edge" onClick={handleBreakfastClick}>
          <div id="card-background">
            <div
              id="meal-image"
              data-testid="meal-image"
              style={{
                backgroundImage: `url(${breakfast.strMealThumb})`,
              }}
            >
            </div>
            <div id="tittle-card">
                <h1>{breakfast.strMeal}</h1>
              </div>
            </div>
        </section>
      )}
    </>
  );
}

export default BreakfastCard;