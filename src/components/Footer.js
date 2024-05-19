// src/components/Footer.js

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} GEOGREATOTECHNICS & GEODREELS LTD.
            All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook-icon"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon twitter-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin-icon"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p>Powered by Alivat Digitals</p>
      </div>
    </footer>
  );
}

export default Footer;
