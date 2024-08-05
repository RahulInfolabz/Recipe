import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Templates/Home";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Recipes from "./Templates/Recipes";
import RecipeDetails from "./Templates/RecipeDetails";
import DishType from "./Templates/DishType";
import Contact from "./Templates/Contact";
import Search from "./Templates/Search";
import SearchRecipe from "./Templates/SearchRecipe";
import Breakfast from "./Templates/Breakfast";
import Lunch from "./Templates/Lunch";
import Snack from "./Templates/Snack";
import Dinner from "./Templates/Dinner";

function Base() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route path="" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/dishType/:type" element={<DishType />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/searchrecipe" element={<SearchRecipe />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/snack" element={<Snack />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/breakfast" element={<Breakfast />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
