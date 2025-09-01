import React from "react";
import "./NavBar.css";

const CATEGORIES = [
  { key: "technology", label: "Technology" },
  { key: "business", label: "Business" },
  { key: "health", label: "Health" },
  { key: "sports", label: "Sports" },
  { key: "entertainment", label: "Entertainment" },
];

export default function NavBar({ setCategory, activeCategory }) {
  return (
    <nav className="navbar navbar-expand-lg nav-elevated" data-bs-theme="dark">
      <div className="container">
        {/* text logo */}
        <a
          href="/"
          className="navbar-brand brand-wordmark"
          onClick={(e) => e.preventDefault()}
        >
          <span className="brand-pill">News</span>
          <span className="brand-pill brand-accent">Mag</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-underline">
            {CATEGORIES.map(({ key, label }) => (
              <li className="nav-item" key={key}>
                <button
                  type="button"
                  className={`nav-link px-3 ${
                    activeCategory === key ? "active" : ""
                  }`}
                  onClick={() => setCategory?.(key)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
