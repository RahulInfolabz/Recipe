import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [recipeTags, setRecipeTags] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipeTags(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      <div className="uk-width-1-4@m sticky-container">
        <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
          <h2>Recipes</h2>
          <ul
            className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
            data-uk-nav
          >
            <li className="uk-parent uk-open">
              <a href="#">Dish Type</a>
              <ul className="uk-nav-sub">
                {recipeTags.map((val) => {
                  return (
                    <li>
                      <a href={`/dishType/${val}`}>{val}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">Meal Type</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="/breakfast">Breakfast and Brunch</a>
                </li>
                <li>
                  <a href="/lunch">Lunch</a>
                </li>
                <li>
                  <a href="/snack">Snack</a>
                </li>
                <li>
                  <a href="/dinner">Dinners</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
