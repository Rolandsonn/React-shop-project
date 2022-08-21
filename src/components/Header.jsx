import React from "react";

export default function Header() {
  return (
    <nav className="blue-grey darken-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React-Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Rolandsonn/React-shop-project"
              target="blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
