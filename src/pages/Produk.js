import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import Produk from "../components/Produk.js";
import { Admin } from "../components";
import { Container, Row, Col } from "react-bootstrap";

const apiURL = "http://localhost:3004/products/";

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
        <Admin />
        {/* Content*/}
        <Container>
          <main className="pt-3 astaga">
            <div className="row">
              <div className="col-md-12">
                <h4>PRODUK</h4>
              </div>
            </div>
            <div className="cardi1">
              <div className="containere">
                <Container fluid>
                  <Row>
                    <Col className="mt-3">
                      <center>
                        <h3>
                          <strong>Daftar Produk</strong>
                          <hr width=" 15%" />
                        </h3>
                      </center>
                      <Row className="overflow-auto menu">
                        {this.state.dataUser.map((dataUser) => {
                          return (
                            <Produk
                              key={dataUser.id}
                              data={dataUser}
                              update={this.HendelUpdate} // Pemanggilan Hendel Update
                            />
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </main>
        </Container>
      </div>
    );
  }
}

export default Crud;
