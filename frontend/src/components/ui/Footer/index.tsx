import { Link } from "react-router-dom";

import "../../../styles/css/Footer.min.css";

const Footer: React.FC = () => {
  const otherLinks = [
    { title: "About", path: "/about" },
    { title: "Contact us", path: "/contact" },
  ];

  return (
    <footer className="Footer x-4 mt-auto pt-5 pb-4">
      <div className="d-flex align-items-center justify-content-between container">
        <span>
          <i className="bi bi-house-fill fs-3" />
          &nbsp;<span className="fs-4">REACTLOTS</span>
        </span>
        <ul className="list-inline d-flex gap-4">
          {otherLinks.map((link) => {
            return (
              <li className="m-0 p-0" key={link.title}>
                <Link className="link-light fw-bold" to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <hr />

      <p className="container">
        This fictional website uses screenshots and information from the game{" "}
        <em>The Sims 4</em>.
      </p>
      <p className="container">
        The copyright is believed to belong to the distributor of the game or
        the publisher of the video game or the developers:{" "}
        <a
          className="link-light"
          href="https://www.ea.com/ea-studios/maxis"
          target="_blank"
          rel="noreferrer"
        >
          Maxis
        </a>
        /
        <a
          className="link-light"
          href="https://www.ea.com/ea-studios"
          target="_blank"
          rel="noreferrer"
        >
          Eletronic Arts
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
