import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <Fragment>
      <div className={classes.nav_container}>
        <div className={classes.navhome}>
          <Link to="/" style={{ fontWeight: "bold", fontSize: "1.75rem" }}>
            SAMMY
          </Link>
        </div>
        <nav className={classes.navbar}>
          <Link to="/posts">Posts</Link>

          <Link to="/about">About</Link>

          <Link to="/travel">Travel</Link>
        </nav>
      </div>
      <div className={classes.hor_line}>
        <hr />
      </div>
    </Fragment>
  );
};

export default Navigation;
