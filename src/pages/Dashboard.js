import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import { Admin } from "../components";
import { Container } from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <div className="body main">
        <Admin />
        {/* Content*/}
        <Container>
          {" "}
          <main className="pt-3 astaga">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <h5>
                    <i className="bi bi-speedometer2"></i> Dashboard
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card bg-light text-dark h-100">
                    <div className="card-body py-5 text-center">Pakaian</div>
                    <a href="/Pakaian">
                      <div className="card-footer d-flex">
                        View Details
                        <span className="ms-auto">
                          <i className="bi bi-chevron-right"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-light text-dark h-100">
                    <div className="card-body py-5 text-center">Jaket</div>
                    <a href="/Jaket">
                      <div className="card-footer d-flex">
                        View Details
                        <span className="ms-auto">
                          <i className="bi bi-chevron-right"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-light text-dark h-100">
                    <div className="card-body py-5 text-center">Celana</div>
                    <a href="/Celana">
                      <div className="card-footer d-flex">
                        View Details
                        <span className="ms-auto">
                          <i className="bi bi-chevron-right"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </div>
    );
  }
}
export default Navbar;
