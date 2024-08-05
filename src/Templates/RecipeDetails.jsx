import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RecipeDetails() {
  let [reciepedetails, setReciepeDetails] = useState({});
  let [recieInstructions, setRecieInstructions] = useState([]);
  let [ingredients, setIngredients] = useState([]);

  const Recipe = useLocation();
  let id = Recipe.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReciepeDetails(data);
        setIngredients(data["ingredients"]);
        setRecieInstructions(data["instructions"]);
      });
  }, []);

  return (
    <>
      <div>
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-2@s">
              <div>
                <img
                  className="uk-border-rounded-large"
                  src={reciepedetails.image}
                  alt="Image alt"
                />
              </div>
            </div>
            <div className="uk-width-expand@s uk-flex uk-flex-middle">
              <div>
                <h1>{reciepedetails.name}</h1>
                <h5>Ingredients : </h5>
                <ol>
                  {ingredients.map((value) => {
                    return (
                      <li>
                        <h6>{value}</h6>
                      </li>
                    );
                  })}
                </ol>
                <div
                  className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
                  data-uk-grid
                >
                  <div>
                    <span data-uk-icon="icon: clock; ratio: 1.4" />
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                      Active Time
                    </h5>
                    <span className="uk-text-small">
                      {reciepedetails.prepTimeMinutes} MINS
                    </span>
                  </div>
                  <div>
                    <span data-uk-icon="icon: future; ratio: 1.4" />
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                      Total Time
                    </h5>
                    <span className="uk-text-small">
                      {reciepedetails.cookTimeMinutes} mins
                    </span>
                  </div>
                  <div>
                    <span data-uk-icon="icon: users; ratio: 1.4" />
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                      Yield
                    </h5>
                    <span className="uk-text-small">
                      Serves {reciepedetails.servings}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-section-default">
          <div className="uk-container uk-container-small">
            <div className="uk-grid-large" data-uk-grid>
              <div className="uk-width-expand@m">
                <div className="uk-article">
                  <h3>How to Make It</h3>

                  {recieInstructions.map((value, index) => {
                    return (
                      <div
                        id="step-1"
                        className="uk-grid-small uk-margin-medium-top"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <a
                            href="#"
                            className="uk-step-icon"
                            data-uk-icon="icon: check; ratio: 0.8"
                            data-uk-toggle="target: #step-1; cls: uk-step-active"
                          />
                        </div>
                        <div className="uk-width-expand">
                          <h5
                            className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                            data-uk-leader="fill:—"
                          >
                            {index + 1}. Step
                          </h5>
                          <div className="uk-step-content">{value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
