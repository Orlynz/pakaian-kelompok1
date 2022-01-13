import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  tambah,
  kurang,
  handleSubmit,
  totalHarga,
  hapusPesanan,
}) => {
  if (keranjangDetail) {
    return (
      <Modal variant="dark" bg="dark" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}{" "}
            <strong>
              (Rp. {numberWithCommas(keranjangDetail.product.harga)})
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga :</Form.Label>
              <p>
                <strong>Rp. {numberWithCommas(totalHarga)}</strong>
              </p>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button
                variant="dark"
                size="sm"
                className="mr-2"
                onClick={() => kurang()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              &nbsp;
              <strong>{jumlah}</strong>
              &nbsp;
              <Button
                variant="dark"
                size="sm"
                className="ml-2"
                onClick={() => tambah()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group>
            <hr />
            <Button variant="dark" type="submit">
              Simpan
            </Button>
            <Button
              variant="dark"
              style={{ float: "right" }}
              onClick={() => hapusPesanan(keranjangDetail.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
