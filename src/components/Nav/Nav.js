import React from "react";
import { Link } from "react-router-dom";

import navHome from "../../assets/icon-nav-home.svg";
import navMovies from "../../assets/icon-nav-movies.svg";
import navTV from "../../assets/icon-nav-tv-series.svg";
import navBookmark from "../../assets/icon-nav-bookmark.svg";
import navAvatar from "../../assets/image-avatar.png";
import Logo from "../../logo.svg";
import "../../styles/nav.scss";

const Nav = () => {
  return (
    <nav className="Nav">
      <img src={Logo} alt="logo" />
      {/* Tab Links */}
      <ul>
        <li>
          <Link to="/">
            <img src={navHome} alt="home" />
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <img src={navMovies} alt="movies" />
          </Link>
        </li>
        <li>
          <Link to="/tv">
            <img src={navTV} alt="tv series" />
          </Link>
        </li>
        <li>
          <Link to="/bookmark">
            <img src={navBookmark} alt="Bookmark" />
          </Link>
        </li>
      </ul>
      <img src={navAvatar} alt="avatar" />
    </nav>
  );
};

export default Nav;
