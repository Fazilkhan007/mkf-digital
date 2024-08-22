import React from "react";
import "./footer.css";

export default function Footer() {
  const footerItems = ["Home", "About Us", "Services", "Price"];

  return (
    <footer className="footer">
      <h2 className="text-center">Growing businesses since 2005</h2>
      <p className="text-center">
        Made with &hearts; in 25 cities around the world
      </p>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p className="me-5">
              MFK Marketing Agency is a full-service digital marketing agency.
              Attract, Impress, and Convert more leads online and get results
              with Thrive.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              {footerItems.map((item) => (
                <li key={item}>
                  <a href="/">{item}</a>
                </li>
              ))}
              {/* <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/price">Price</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <ul>
              <li>Lucknow, UttarPradesh, India</li>
              <li>+91 8707220233</li>
              <li>coolfazil28@gmail.com</li>
              <li>+3214569870</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="text-center">
            © 2024 - MFK Marketing Agency / Locations / Write For Us / Refer
            Thrive / Terms / Privacy Policy / Scam Alert / Sitemap
          </p>

          <div className="footericons text-center d-flex">
            <div className="ms-3">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="ms-3">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="ms-3">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="ms-3">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div className="ms-3">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className="ms-3">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
