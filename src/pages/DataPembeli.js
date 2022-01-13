import React from "react";
import "../assets/css/Sidebar.css";
import { Admin } from "../components";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
const Header = ({ setRefresh, isRefresh }) => {
  const [nama, setnama] = useState("");
  const [harga, setharga] = useState("");
  const [gambar, setgambar] = useState("");
  const [category, setcategory] = useState("");

  const addTodo = () => {
    const newTodo = { nama, gambar, harga, category, is_ready: true };

    fetch("http://localhost:3004/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      setnama("");
      setharga("");
      setgambar("");
      setcategory("");
      setRefresh(true);
    });
  };
  const [perpus, setperpus] = useState([]);
  useEffect(() => {
    if (isRefresh) {
      fetch("http://localhost:3004/categories")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false);
          setperpus(data);
        })
        .catch((err) => {
          setRefresh(false);
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [isRefresh, setRefresh]);
  return (
    <div className="body main">
      <Admin />
      {/* Content*/}
      <Container>
        <main className="pt-3 astaga">
          <div className="row">
            <div className="col-md-12">
              <h4>TAMBAH PRODUK</h4>
            </div>
          </div>
          <Card className="shadow">
            <Card.Header className="bg-dark text-white">
              <h6 className="pt-2">
                <i class="fas fa-plus-circle"></i> Tambah Produk
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
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Nama Produk
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Nama Produk..."
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setnama(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Kategori
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    name="category"
                    placeholder="Kategori..."
                    required
                    id="category"
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                  >
                    <option value="" disabled>
                      Kategori
                    </option>
                    {perpus.map((todo) => (
                      <option>{todo.nama}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Harga
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="number"
                    placeholder="Masukan Harga..."
                    id="harga"
                    name="harga"
                    value={harga}
                    onChange={(e) => setharga(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Upload Foto
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="file"
                    placeholder="Masukan Deskripsi"
                    id="gambar"
                    name="gambar"
                    value={gambar}
                    onChange={(e) => setgambar(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Col>
                <Button
                  variant="outline-dark"
                  style={{
                    padding: "5px",
                    borderRadius: "10px",
                    float: "right",
                  }}
                  onClick={addTodo}
                  type="submit"
                >
                  <strong>SIMPAN</strong>
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
