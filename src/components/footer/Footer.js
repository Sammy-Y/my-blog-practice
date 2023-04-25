import React from "react";

import classes from "./Footer.module.css";

import instragram from "./img/instagram.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.hor_line}>
        <hr />
      </div>
      <div className={classes.right}>
        <div>
          <span>Copyright © SAMMY YANG 2023</span>
        </div>
        <div>
          <a
            type="botton"
            title="Instagram"
            href="https://www.instagram.com/_baby.net_/"
          >
            <img src={instragram} width="25" height="25" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
