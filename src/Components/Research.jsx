import React from "react";
import "./style.css";

const Research = (props) => {
  return (
    <div id="research" class="container">
      <section class="text-center rs">
        <h4 class="mb-5">
          <strong>{props.title}</strong>
        </h4>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Post title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Post title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Post title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
