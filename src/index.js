import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BreakfastList from "./pages/BreakfastList";
import BreakfastDetails from "./pages/BreakfastDetails";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BreakfastProvider } from "./context/breakfastCtx";
import { FilterProvider } from "./context/filterCtx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BreakfastList />,
  },
  {
    path: "/detail/:idBreakfast",
    element: <BreakfastDetails/>,
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BreakfastProvider>
      <FilterProvider>
        <RouterProvider router={router}/>
      </FilterProvider>
    </BreakfastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
