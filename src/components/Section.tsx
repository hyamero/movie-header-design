/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import titlecard from "../img/title-card.jpg";
import scene0 from "../img/scene0.jpg";
import scene1 from "../img/scene1.png";
import scene2 from "../img/scene2.png";

export const Section: React.FC = () => {
  return (
    <div
      className="flex-section"
      css={css`
        display: flex;

        .section-left,
        .section-right {
          height: 88vh;
          width: 50vw;
        }

        .section-left {
          display: grid;
          grid-template-columns: 1fr;
        }

        .card-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          top: 1rem;

          p {
            font-size: 1.8rem;
            text-transform: uppercase;
            background: -webkit-linear-gradient(#e6cb6e, #d1a449);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            top: 1.3rem;
          }
        }

        .title-card {
          mix-blend-mode: screen;
          height: 250px;
          width: 444.44px;
          margin: 0 auto;
          position: relative;
          right: 1rem;
        }

        .overview {
          text-align: center;
          width: 65%;
          margin: auto;
          position: relative;
          bottom: 1rem;

          p {
            color: #fff;
            font-size: 0.87rem;
            font-weight: 300;
            font-family: "Oswald", sans-serif;
          }
        }

        .pseudo-h5 {
          position: relative;
          left: 3rem;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: inline-block;
          z-index: 3;
          background: #000;
        }

        .line {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          font-weight: 100;
          position: relative;
          display: inline-block;
          left: -2.94rem;

          &::after {
            content: "";
            width: 3rem;
            height: 3px;
            background: #c2852b;
            display: inline-block;
            position: absolute;
            left: 20%;
            right: 50%;
            transform: translate(-50%, -50%);
            transform: rotate(-60deg);
            top: 0.7rem;
          }
        }

        .gallery {
          text-align: center;

          .pseudo-h5 {
            left: 1rem;
          }

          .img-clips {
            display: flex;
            justify-content: center;

            img {
              height: 80px;

              &:not(:last-child) {
                margin-right: 10px;
              }
            }
          }
        }

        .flex-cast {
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 40px;
          padding-bottom: 10px;
          margin-bottom: 20px;
          padding-left: 0;

          .long-text {
            width: 350px;
          }

          .staff {
            color: #fff;

            .title {
              font-size: 1.1rem;
              font-weight: 300;
              letter-spacing: 1px;
              text-transform: uppercase;
              color: #9c9a9a;
            }

            p {
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              font-weight: 400;
              font-size: 0.72rem;
            }
          }
        }

        .section-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      `}
    >
      <section className="section-left">
        <div className="card-title">
          <p>April 25, 2018</p>
          <img className="title-card" src={titlecard} alt="title card" />
        </div>
        <div className="overview">
          <h5 className="pseudo-h5">Movie Overview</h5>
          <h5 className="line">Movie Overview</h5>
          <p>
            Iron Man, Thor, the Hulk and the rest of the Avengers unite to
            battle their most powerful enemy yet -- the evil Thanos. On a
            mission to collect all six Infinity Stones, Thanos plans to use the
            artifacts to inflict his twisted will on reality. The fate of the
            planet and existence itself has never been more uncertain as
            everything the Avengers have fought for has led up to this moment.
          </p>
        </div>
        <div className="gallery">
          <h5 className="pseudo-h5">Gallery</h5>
          <h5 className="line">Gallery</h5>
          <div className="img-clips">
            <img src={scene0} alt="clip0" />
            <img src={scene1} alt="clip1" />
            <img src={scene2} alt="clip2" />
          </div>
        </div>
      </section>
      <section className="section-right">
        <div className="flex-cast">
          <div className="staff">
            <h5 className="title">Directors</h5>
            <p>Anthony, Joe Russo</p>
          </div>
          <div className="staff">
            <h5 className="title">Writers</h5>
            <p>
              Christopher Markus, <br /> Stephen McFeely
            </p>
          </div>
          <div className="staff long-text">
            <h5 className="title">Starring</h5>
            <p>
              Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans,
              Scarlett Johansson, Benedict Cumberbatch, Don
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
