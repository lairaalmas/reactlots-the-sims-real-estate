import { Link, NavLink } from "react-router-dom";

import "../../../styles/css/Header.min.css";

const Header: React.FC = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="Header">
      <nav className="navbar navbar-expand-lg navbar-light px-5 border-bottom">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <h1>
            <Link className="navbar-brand" to="/">
              <i className="bi bi-house-fill text-success" />
              &nbsp;REACTLOTS
            </Link>
          </h1>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => {
              return (
                <li key={link.title}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={link.path}
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
