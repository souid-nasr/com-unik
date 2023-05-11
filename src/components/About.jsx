import React from "react";
import "../assets/css/style.css";

function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-end">
            <div className="col-lg-11">
              <div className="row justify-content-end">
                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="125"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="85"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Projects</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="35"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Years of experience</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="48"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-6 video-box align-self-baseline"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img src="/img/about.jpg" className="img-fluid" alt="" />
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="glightbox play-btn mb-4"
              ></a>
            </div>

            <div className="col-lg-6 pt-3 pt-lg-0 content">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Voluptate repellendus
                  pariatur reprehenderit corporis sint.
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-boxes" className="about-boxes">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <img
                  src="/img/about-boxes-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-icon">
                  <i className="ri-brush-4-line"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Our Mission</a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <img
                  src="/img/about-boxes-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-icon">
                  <i className="ri-calendar-check-line"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Our Plan</a>
                  </h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <img
                  src="/img/about-boxes-3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-icon">
                  <i className="ri-movie-2-line"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Our Vision</a>
                  </h5>
                  <p className="card-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                    fugit, sed quia magni dolores eos qui ratione voluptatem
                    sequi nesciunt Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
