import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Button, Dropdown } from "react-bootstrap";
import Judul from "./Judul.js";
const apiURL = "http://localhost:3004/users/";

class NavbarComponent extends Component {
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
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand href="/" className="bc">
            <strong>
              {this.state.dataUser.map((dataUser) => {
                return (
                  <Judul
                    key={dataUser.id}
                    data={dataUser}
                    update={this.HendelUpdate} // Pemanggilan Hendel Update
                  />
                );
              })}
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text>
              <a href="/OrderCart">
                <Button
                  variant="outline-light"
                  style={{ padding: "15px", borderRadius: "20px" }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <u> Cart Orderan</u>
                </Button>
              </a>
            </Navbar.Text>
            &nbsp;&nbsp;
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" variant="dark">
                <i class="fas fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Login">Login</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavbarComponent;
