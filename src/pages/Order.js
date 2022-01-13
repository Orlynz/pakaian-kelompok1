import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import { Table, Button, Card, Container } from "react-bootstrap";
import { Admin } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../utils/constants";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesanans: [],
    };
  }

  componentDidMount() {
    axios.get(API_URL + "pesanans").then((res) => {
      const pesanans = res.data;
      this.setState({ pesanans });
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
                <h4>ORDER</h4>
              </div>
            </div>
            <Card>
              <Card.Header className="bg-dark text-white">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faListAlt} size="md" />
                  {"  "}
                  Daftar Order
                </h6>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover className="text-center">
                  <thead>
                    <tr>
                      <th>?</th>
                      <th>No</th>
                      <th>Nama Pembeli</th>
                      <th>Alamat</th>
                      <th>Keterangan</th>
                      <th>Konfirm</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.pesanans.map((pesanans, index) => (
                      <tr>
                        <td>
                          {" "}
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{ margin: "7px 7px" }}
                          />
                        </td>
                        <td>
                          <b>{index + 1}</b>
                        </td>
                        <td>
                          <b>{pesanans.user}</b>
                        </td>
                        <td>
                          <b>{pesanans.alamat}</b>
                        </td>
                        <td>
                          <b>{pesanans.keterangan}</b>
                        </td>
                        <td>
                          <Button variant="success">KONFIRM</Button>
                        </td>
                        <td>
                          <Button variant="success">BAYAR</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </main>
        </Container>
      </div>
    );
  }
}
export default App;
