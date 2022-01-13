import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Admin, Menus } from "../components";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Jaket",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });

    this.update();
  }

  update = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };
  render() {
    const { menus } = this.state;
    return (
      <div className="body main">
        <Admin />
        {/* Content*/}
        <Container>
          <main className="pt-3 astaga">
            <div className="row">
              <div className="col-md-12">
                <h4>KATEGORI</h4>
              </div>
            </div>
            <div className="cardi1">
              <div className="containere">
                <Container fluid>
                  <Row>
                    <Col className="mt-3">
                      <center>
                        <h3>
                          <strong>Jaket</strong>
                          <hr width=" 15%" />
                        </h3>
                      </center>
                      <Row className="overflow-auto menu">
                        {menus &&
                          menus.map((menu) => (
                            <Menus key={menu.id} menu={menu} />
                          ))}
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
