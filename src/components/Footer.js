import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Judul from "./Judul.js";
import Deskripsi from "./Deskripsi.js";
import Kontak from "./Kontak.js";
const apiURL = "http://localhost:3004/users/";

class Footer extends Component {
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
      <MDBFooter
        style={{ backgroundColor: "rgb(48, 48, 48)", color: "white" }}
        className="font-small pt-4 mt-4"
      >
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Kontak</h6>
              {this.state.dataUser.map((dataUser) => {
                return (
                  <Kontak
                    key={dataUser.id}
                    data={dataUser}
                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                  />
                );
              })}
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                {this.state.dataUser.map((dataUser) => {
                  return (
                    <Judul
                      key={dataUser.id}
                      data={dataUser}
                      update={this.HendelUpdate} // Pemanggilan Hendel Update
                    />
                  );
                })}
              </h6>
              <p>
                {this.state.dataUser.map((dataUser) => {
                  return (
                    <Deskripsi
                      key={dataUser.id}
                      data={dataUser}
                      update={this.HendelUpdate} // Pemanggilan Hendel Update
                    />
                  );
                })}
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Location</h6>
              <p>
                Jl. Kemantren Raya, Wonosari, Ngaliyan, Kota Semarang, Jawa
                Tengah, Indonesia
              </p>
              <p style={{ fontSize: "25px" }}>
                <i class="fas fa-mail-bulk"> 50181</i>
              </p>
            </MDBCol>
          </MDBRow>
          <hr style={{ width: "1100px" }} />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p
                className="text-center text-md-left grey-text"
                style={{ marginLeft: "300px" }}
              >
                &copy; {new Date().getFullYear()} Copyright: Orlynz Sambora
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul
                  className="list-unstyled list-inline"
                  style={{ fontSize: "30px", marginRight: "30px" }}
                >
                  <li className="list-inline-item">
                    <i className="fab fa-whatsapp" />
                  </li>
                  <li className="list-inline-item">
                    <li className="fab fa-facebook-f" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-instagram" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-twitter" />
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );
  }
}
export default Footer;
