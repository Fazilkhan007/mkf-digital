import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Search from "./search";
import Home from "./hometag";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import "./navbar.css";

export default function NavBar() {
  const navbarItems = ["About", "Services", "Results", "Learn", "Contact Us"];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ height: "75px" }}>
          <LocalConvenienceStoreIcon />
          <a
            className="navbar-brand"
            style={{ fontWeight: 700, fontSize: "1.5rem" }}
            href="#"
          >
            MFK Marketing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav" style={{ fontWeight: 600 }}>
              <li className="nav-item">
                <Link
                  to="#About"
                  className="nav-link active"
                  aria-current="page"
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#Services"
                  className="nav-link active"
                  aria-current="page"
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#Results"
                  className="nav-link active"
                  aria-current="page"
                >
                  RESULTS
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  LEARN
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="#ContactUs"
                  className="nav-link active"
                  aria-current="page"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Search />
      <Home />
    </>
  );
}
