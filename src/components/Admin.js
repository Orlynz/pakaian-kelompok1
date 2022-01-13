import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import Judul from "./Judul.js";

const apiURL = "http://localhost:3004/users/";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [], // Untuk tampung Get all data
      totalData: 0, // Untuk Hitung All Data
    };
  }

  componentDidMount() {
    this.GetdataUsers();
  }

  GetdataUsers() {
    fetch(apiURL)
      .then((res) => {
        if (res.status === 200) return res.json();
        else return <p>No data Found</p>;
      })
      .then((resdata) => {
        console.log(resdata);
        // console.log('Numrow', resdata.length)
        this.setState({
          dataUser: resdata,
          totalData: resdata.length,
        });
      });
  }
  render() {
    return (
      <div className="body main">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="offcanvasExample"
            >
              <span
                className="navbar-toggler-icon"
                data-bs-target="#sidebar"
              ></span>
            </button>
            <a
              className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
              href="/#"
            >
              {this.state.dataUser.map((dataUser) => {
                return (
                  <Judul
                    key={dataUser.id}
                    data={dataUser}
                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                  />
                );
              })}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavBar"
              aria-controls="topNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="topNavBar">
              <form className="d-flex ms-auto my-3 my-lg-0"></form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-2"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-fill"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="/">
                        LogOut
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Sidebar*/}
        <div
          className="offcanvas offcanvas-start sidebar-nav bg-dark"
          tabIndex="-1"
          id="sidebar"
        >
          <div className="offcanvas-body p-0">
            <nav className="navbar-dark">
              <ul className="navbar-nav">
                <li>
                  <div className="text-muted small fw-bold text-uppercase px-3 mb-3 fs-6">
                    CORE
                  </div>
                </li>
                <li>
                  <a href="/Home" className="nav-link px-3 active">
                    <span className="me-2">
                      <i className="bi bi-speedometer2"></i>
                    </span>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/Setting" className="nav-link px-3 active">
                    <span className="me-2">
                      <i class="fas fa-sliders-h"></i>
                    </span>
                    <span>Setting App</span>
                  </a>
                </li>
                <li className="my-4">
                  <hr className="dropdown-divider bg-light" />
                </li>
                <li>
                  <div className="text-muted small fw-bold text-uppercase px-3 mb-3 fs-6">
                    Menu Master
                  </div>
                </li>
                <li>
                  <a href="/Kontak" className="nav-link px-3 active">
                    <span className="me-2">
                      <i class="bi bi-telephone-fill"></i>
                    </span>
                    <span>Kontak kami</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link px-3 sidebar-link active"
                    data-bs-toggle="collapse"
                    href="#layouts"
                  >
                    <span className="me-2">
                      <i class="bi bi-folder"></i>
                    </span>
                    <span>Data Master</span>
                    <span className="ms-auto">
                      <span className="right-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </span>
                  </a>
                  <div className="collapse" id="layouts">
                    <ul className="navbar-nav ps-3">
                      <li>
                        <a href="/Kategori" className="nav-link px-3">
                          <span className="me-2">
                            <i class="bi bi-dash-circle"></i>
                          </span>
                          <span>Kategori</span>
                        </a>
                      </li>
                      <li>
                        <a href="/DataPembeli" className="nav-link px-3">
                          <span className="me-2">
                            <i class="bi bi-dash-circle"></i>
                          </span>
                          <span>Tambah Produk</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Produk" className="nav-link px-3">
                          <span className="me-2">
                            <i class="bi bi-dash-circle"></i>
                          </span>
                          <span>Produk</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="my-4">
                  <hr className="dropdown-divider bg-light" />
                </li>
                <li>
                  <div className="text-muted small fw-bold text-uppercase px-3 mb-3 fs-6">
                    MENU TRANSAKSI
                  </div>
                </li>
                <li>
                  <a href="/Order" className="nav-link px-3 active">
                    <span className="me-2">
                      <i class="bi bi-phone"></i>
                    </span>
                    <span>Order</span>
                  </a>
                </li>
                <li className="my-4">
                  <hr className="dropdown-divider bg-light" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Crud;
