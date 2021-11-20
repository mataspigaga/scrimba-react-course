import React from "react";
import { SiInstagram, SiTwitter, SiGmail, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className='footer--social'>
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
    </footer>
  );
}
