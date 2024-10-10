import React from "react";
import "./index.css";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { useFilterContext } from "../../context/filterCtx";
import { Link } from "react-router-dom";

const HomeButton = () => {
  const { filters, setFilters } = useFilterContext();
  const homeAction = () => {
    setFilters({ ...filters, search: "" });
  };
  return (
    <Link onClick={homeAction} to="/">
      <HomeIcon className="home-icon" data-testid="home-icon"/>
    </Link>
  );
};

export default HomeButton;