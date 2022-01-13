import { useState } from "react";
import React from "react";
import { Admin } from "../components";
import { Form, Button, Col, Row, Card, Container } from "react-bootstrap";
import swal from "sweetalert";

const Header = ({ isRefresh, setRefresh }) => {
  const [nama, setNama] = useState("");

  const addTodo = () => {
    const newTodo = { nama };

    fetch("http://localhost:3004/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setNama("");
      setRefresh(true);
      setTimeout(() => {
        // alert("Kalimat Berhasil Ditambahkan");
        swal({
          title: "Sukses Ditambahkan",
          text: "Produk Sukses Ditambahkan",
          icon: "success",
          button: false,
          timer: 2000,
        });
      }, 500);
    });
  };
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //     if (isRefresh) {
  //         fetch("http://localhost:9000/categories")
  //             .then((res) => {
  //                 return res.json();
  //             })
  //             .then((data) => {
  //                 setRefresh(false)
  //                 setList(data);
  //             })
  //             .catch((err) => {
  //                 setRefresh(false)
  //                 if (err.name === "AbortError") {
  //                     console.log("fetch aborted")
  //                 }
  //             })
  //     }
  // }, [isRefresh, setRefresh])
  return (
    <div className="body main">
      <Admin />

      {/* Content*/}
      <Container>
        <main className="pt-3 astaga">
          <div className="row">
            <div className="col-md-12">
              <h4>TAMBAH KATEGORI</h4>
            </div>
          </div>
          {/* <Card bg="dark" className="text-light">
            <Row>
              <Col>
                <br />
                <h4 className="text-center">Tambah Data Kategori</h4>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label>Kategori</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        name="nama"
                        placeholder="Masukan Nama Kategori..."
                        required
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <br />
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2"></Form.Label>
                    <Col sm="10">
                      <Button
                        variant="outline-light"
                        onClick={addTodo}
                        type="submit"
                        style={{ float: "right" }}
                      >
                        Tambah
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card> */}
          <Card className="shadow">
            <Card.Header className="bg-dark text-white">
              <h6 className="pt-2">
                <i class="fas fa-plus-circle"></i> Tambah Kategori
              </h6>
            </Card.Header>
            <Form
              style={{
                padding: "10px",
              }}
            >
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Kategori
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name="nama"
                    placeholder="Masukan Nama Kategori..."
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Col>
                <Button
                  variant="outline-dark"
                  type="submit"
                  style={{
                    padding: "5px",
                    borderRadius: "10px",
                    float: "right",
                    marginLeft: "10px",
                  }}
                  onClick={addTodo}
                >
                  <strong>Tambah</strong>
                </Button>
              </Col>
            </Form>
          </Card>
        </main>
      </Container>
    </div>
  );
};

export default Header;
