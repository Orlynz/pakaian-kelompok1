import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
const Header = ({ setRefresh, isRefresh }) => {
  const [user, setuser] = useState("");
  const [alamat, setalamat] = useState("");
  const [keterangan, setketerangan] = useState("");

  const addTodo = () => {
    const newTodo = { user, keterangan, alamat, done: false };

    fetch("http://localhost:3004/pesanans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setuser("");
      setalamat("");
      setketerangan("");
      setRefresh(true);
    });
  };
  return (
    <div>
      <Col style={{ marginTop: "10px" }}>
        <h4>Detail Pemesan</h4>
        <hr
          size="5"
          style={{
            color: "black",
            width: "4cm",
          }}
        />
        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Nama Anda</Form.Label>
              <Form.Control
                className="fc"
                type="text"
                placeholder="Tulis Nama Anda..."
                required
                value={user}
                onChange={(e) => setuser(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                className="fc"
                type="text"
                placeholder="Alamat Rumah..."
                required
                value={alamat}
                onChange={(e) => setalamat(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <h4>Informasi Tambahan</h4>
        <hr size="5" style={{ color: "black", width: "5cm" }} />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              className="fc"
              as="textarea"
              rows={3}
              placeholder="Tuliskan Keterangan untuk Orderan Anda..."
              required
              value={keterangan}
              onChange={(e) => setketerangan(e.target.value)}
            />
          </Form.Group>
        </Form>
        <a href="/OrderCart">
          <Button className="mt-3 btn" size="md" variant="outline-dark">
            <i class="fas fa-caret-left"></i> <strong>BACK</strong>
          </Button>
        </a>
        <a href="/OrderDetail">
          <Button
            className="mt-3 btn"
            size="md"
            variant="outline-dark"
            style={{ float: "right" }}
            onClick={addTodo}
          >
            <strong>NEXT</strong> <i class="fas fa-caret-right"></i>
          </Button>
        </a>
      </Col>
    </div>
  );
};
export default Header;
