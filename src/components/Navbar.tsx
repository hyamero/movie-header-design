/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

import logo from "../img/Marvel_Logo.png";

export const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState<string>("home");

  return (
    <nav className="Navbar">
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 90%;
          margin: 0 auto;
          padding: 20px 0;

          ul {
            display: flex;
            list-style: none;
            font-size: 1.5rem;

            li {
              color: #9c9a9a;
              text-transform: uppercase;
              cursor: pointer;

              &:not(:last-child) {
                margin-right: 2.4rem;
              }
            }

            .clicked-btn {
              color: #fff;

              &::after {
                content: "";
                display: block;
                width: 7px;
                height: 7px;
                position: relative;
                bottom: 4px;
                border-radius: 50%;
                background: #ed1d24;
                margin: 0 auto;
              }
            }
          }

          .icons {
            display: flex;

            .icon {
              display: flex;
              color: #fff;
              font-size: 1.9rem;
              margin-left: 2rem;
              cursor: pointer;
            }

            .icon-search {
              font-size: 1.7rem;
              color: #9c9a9a;
            }
          }

          .marvel-logo {
            height: 2.4rem;
            margin-right: 3rem;
          }
        `}
      >
        <ul>
          <img className="marvel-logo" src={logo} alt="Marvel Logo" />
          <li
            className={clicked === "home" ? "clicked-btn" : ""}
            onClick={() => setClicked("home")}
          >
            home
          </li>
          <li
            className={clicked === "videos" ? "clicked-btn" : ""}
            onClick={() => setClicked("videos")}
          >
            videos
          </li>
          <li
            className={clicked === "comics" ? "clicked-btn" : ""}
            onClick={() => setClicked("comics")}
          >
            comics
          </li>
          <li
            className={clicked === "movies" ? "clicked-btn" : ""}
            onClick={() => setClicked("movies")}
          >
            movies
          </li>
          <li
            className={clicked === "shows" ? "clicked-btn" : ""}
            onClick={() => setClicked("shows")}
          >
            tv shows
          </li>
        </ul>
        <div className="icons">
          <FiSearch className="icon icon-search" />
          <CgMenuRight className="icon icon-menu" />
        </div>
      </div>
    </nav>
  );
};
