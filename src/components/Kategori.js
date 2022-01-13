import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
class Menus extends Component {
  render() {
    const prmData = this.props.data;
    return (
      <Col md={3} xs={4} className="mb-4 text-center">
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={
              "assets/images/" +
              prmData.category.nama.toLowerCase() +
              "/" +
              prmData.gambar
            }
          />
          <Card.Body>
            <Card.Title>{prmData.nama}</Card.Title>
            <Card.Text>-Harga-</Card.Text>
            <Card.Text>
              <strong>Rp. {numberWithCommas(prmData.harga)}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default Menus;
