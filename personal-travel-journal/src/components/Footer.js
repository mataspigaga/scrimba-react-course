import React from "react";
import { SiInstagram, SiTwitter, SiGmail, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="footer--content">
        <div className="footer--name">
          <span>
            Project by <a href="https://matas.io/">Matas Pigaga</a>
          </span>
        </div>
        <div className="footer--social">
          <a href="https://www.twitter.com/mataspigaga/">
            <SiTwitter />
          </a>
          <a href="https://www.instagram.com/mataspigaga/">
            <SiInstagram />
          </a>
          <a href="mailto:hello@matas.io">
            <SiGmail />
          </a>
          <a href="https://www.github.com/mataspigaga/">
            <SiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
