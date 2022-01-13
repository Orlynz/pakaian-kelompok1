import { useEffect, useState } from "react";
import React from "react";
import { Form, Button, Col, Row, Card, Container } from "react-bootstrap";

import { API_URL } from "../utils/constants";
import { Admin } from "../components";

const TodoItem = ({ setRefresh, isRefresh }) => {
  const [pesanans, setform] = useState([]);
  useEffect(() => {
    if (isRefresh) {
      fetch(API_URL + "categories/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false);
          setform(data);
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
              <h4>KATEGORI</h4>
            </div>
          </div>
          {/* <div>
            <p
              class="bi bi-list"
              style={{
                backgroundColor: "grey",
                padding: "10px",
                color: "white",
                textAlign: "left",
              }}
            >
              Daftar Kategori{" "}
              <span style={{ float: "right" }}>
                <a href="/Formkat">
                  <button type="button" class="btn btn-light">
                    Tambah
                  </button>
                </a>
              </span>
            </p>
            <div className="on">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "80px" }}></th>
                    <th scope="col" style={{ width: "50px" }}>
                      No
                    </th>
                    <th scope="col">Keterangan</th>
                    <th scope="col" style={{ textAlign: "right" }}>
                      Icon
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pesanans.map((todos) => (
                    <tr>
                      <th scope="row">
                        <i class="bi bi-pencil"></i>
                        <i class="bi bi-x-circle"></i>
                      </th>
                      <td>{todos.id}</td>
                      <td>{todos.nama}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}
          <Card className="shadow">
            <Card.Header className="bg-dark text-white">
              <Row>
                <Col>
                  <h6 className="pt-2">Kategori</h6>
                </Col>
                <Col>
                  <a href="/Formkat">
                    <Button
                      variant="outline-light"
                      type="submit"
                      style={{
                        padding: "5px",
                        borderRadius: "10px",
                        float: "right",
                      }}
                    >
                      <strong>Tambah</strong>
                    </Button>
                  </a>
                </Col>
              </Row>
            </Card.Header>
            <Form
              style={{
                padding: "10px",
              }}
            >
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "80px" }}></th>
                    <th scope="col" style={{ width: "50px" }}>
                      No
                    </th>
                    <th scope="col">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {pesanans.map((todos) => (
                    <tr>
                      <th scope="row">
                        <i class="bi bi-pencil"></i>
                        <i class="bi bi-x-circle"></i>
                      </th>
                      <td>{todos.id}</td>
                      <td>{todos.nama}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Form>
          </Card>
        </main>
      </Container>
    </div>
  );
};

export default TodoItem;
