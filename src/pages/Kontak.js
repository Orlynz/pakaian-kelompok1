import React, { Component } from "react";
import "../assets/css/Sidebar.css";
import ButKontak from "../components/ButKontak.js";
import { Admin } from "../components";
import swal from "sweetalert";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";

const apiURL = "http://localhost:3004/users/";

class Kontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [], // Untuk tampung Get all data
      totalData: 0, // Untuk Hitung All Data
      isUpdate: false, // Untuk Fileter Fungsi simpan / Update data
      Notif: {
        // Untuk Tampung respon Dari Server
        alertShow: false,
        actionType: "",
        responCode: 0,
      },
      DataUserNew: {
        // untuk Tampung data Update / New data
        id: 1,
        email: "",
        notel: "",
        alamat: "",
      },
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
  ClearForm = () => {
    this.setState({
      isUpdate: false,
      DataUserNew: {
        id: 1,
        email: "",
        notel: "",
        alamat: "",
      },
    });

    // Mengembalikan Nilai Awal Notif
    setInterval(() => {
      this.setState({
        Notif: {
          alertShow: false,
          actionType: "",
          responCode: 0,
        },
      });
    }, 4500);
  };
  SaveNewDataUSer = () => {
    const Newdata = this.state.DataUserNew;

    fetch(apiURL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Newdata),
    }).then((res) => {
      console.log(res);
      console.log("Status Create", res.status);

      // Untuk Tampung respon Dari Server
      this.setState({
        Notif: {
          alertShow: true,
          actionType: "created",
          responCode: res.status,
        },
      });

      this.GetdataUsers();
      this.ClearForm();
    });
  };
  UpdateDataUser = () => {
    const dataUpdate = this.state.DataUserNew;
    const id = dataUpdate.id;

    fetch(apiURL + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    }).then((res) => {
      console.log(res);
      console.log("Status Update", res.status);

      // Untuk Tampung respon Dari Server
      this.setState({
        Notif: {
          alertShow: true,
          actionType: "updated",
          responCode: res.status,
        },
      });

      this.GetdataUsers();
      this.ClearForm();
    });
  };

  HendelOnchange = (event) => {
    // console.log('Form Change')
    const NumberingId = this.state.totalData + 1; // Untuk ID New Data
    let prmInputUser = { ...this.state.DataUserNew }; // Copy State
    if (!this.state.isUpdate) {
      //Cek Jika Update Data Idnya Tidak Di Ubah
      prmInputUser["id"] = NumberingId;
    }
    prmInputUser[event.target.name] = event.target.value;
    this.setState({
      DataUserNew: prmInputUser,
    });
  };
  HendelSimpan = () => {
    if (this.state.isUpdate) {
      this.UpdateDataUser();
      swal({
        title: "Update Kontak!",
        text: "Sukses Update Kontak ",
        icon: "success",
        button: false,
        timer: 1500,
      });
    } else {
      this.SaveNewDataUSer();
    }
  };
  HendelUpdate = (data) => {
    console.log("Update id", data.id);
    console.log("Update arry", data);
    this.setState({
      DataUserNew: data,
      isUpdate: true,
    });
  };
  render() {
    return (
      <div className="body main">
        <Admin />
        {/* Content*/}
        <Container>
          <main className="pt-3 astaga">
            <div className="row">
              <div className="col-md-12">
                <h4>KONTAK KAMI</h4>
              </div>
            </div>
            <Card className="shadow">
              <Card.Header className="bg-dark text-white">
                <h6 className="pt-2">
                  <i class="bi bi-telephone-fill"></i> Kontak Kami
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
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      placeholder="Email Toko..."
                      type="text"
                      id="email"
                      name="email"
                      onChange={this.HendelOnchange}
                      value={this.state.DataUserNew.email}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column sm={2}>
                    Alamat
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      placeholder="Alamat..."
                      id="alamat"
                      name="alamat"
                      onChange={this.HendelOnchange}
                      value={this.state.DataUserNew.alamat}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={2}>
                    No.Telpon
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      placeholder="No.Telepon..."
                      id="notel"
                      name="notel"
                      onChange={this.HendelOnchange}
                      required
                      value={this.state.DataUserNew.notel}
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
                    onClick={this.HendelSimpan}
                  >
                    <strong>Simpan</strong>
                  </Button>
                </Col>
                <Col>
                  {this.state.dataUser.map((dataUser) => {
                    return (
                      <ButKontak
                        key={dataUser.id}
                        data={dataUser}
                        update={this.HendelUpdate} // Pemanggilan Hendel Update
                      />
                    );
                  })}
                </Col>
              </Form>
            </Card>
          </main>
        </Container>
      </div>
    );
  }
}

export default Kontak;
