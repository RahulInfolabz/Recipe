import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo" href="index.html">
                Kocina
              </a>
              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/recipes">Recipe</Link>
                </li>
                <li>
                  <Link to="/searchrecipe">Search Recipe</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div> 
            </div>
        </div>
      </nav>
    </>
  );
}
