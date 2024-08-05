import React from "react";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="uk-section uk-section-default">
          <div className="uk-container uk-text-secondary uk-text-500">
            <div className="uk-child-width-1-2@s" data-uk-grid>
              <div>
                <a href="#" className="uk-logo">
                  Kocina
                </a>
              </div>
            </div>
            <div className="uk-margin-medium-top uk-text-small uk-text-muted">
              <div>
                Made by{" "}
                <a
                  className="uk-link-muted"
                  href="https://unbound.studio/"
                  target="_blank"
                >
                  Unbound Studio
                </a>{" "}
                in Guatemala City.
              </div>
            </div>
          </div>
        </footer>
        <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
          <div className="uk-offcanvas-bar">
            <a className="uk-logo" href="index.html">
              Kocina
            </a>
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close="ratio: 1.2"
            />
            <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
              <li className="uk-active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="recipe.html">Recipe</a>
              </li>
              <li>
                <a href="search.html">Search</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="sign-in.html">Sign In</a>
              </li>
              <li>
                <a href="sign-up.html">Sign Up</a>
              </li>
            </ul>
            <div className="uk-margin-medium-top">
              <a
                className="uk-button uk-width-1-1 uk-button-primary"
                href="sign-up.html"
              >
                Sign Up
              </a>
            </div>
            <div className="uk-margin-medium-top uk-text-center">
              <div
                data-uk-grid
                className="uk-child-width-auto uk-grid-small uk-flex-center"
              >
                <div>
                  <a
                    href="https://twitter.com/"
                    data-uk-icon="icon: twitter"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/"
                    data-uk-icon="icon: facebook"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/"
                    data-uk-icon="icon: instagram"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://vimeo.com/"
                    data-uk-icon="icon: vimeo"
                    className="uk-icon-link"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
