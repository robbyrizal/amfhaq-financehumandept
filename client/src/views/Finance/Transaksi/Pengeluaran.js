import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  Button,
  PaginationLink,
  Row,
  Table,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from "reactstrap";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { Link } from "react-router-dom";
import {
  getPengeluaransQuery,
  getKlienTagihansQuery,
  addPengeluaranMutation,
  hapusPengeluaranMutation,
  getAkunDebitKreditsQuery,
} from "../queries/queries";
import "./index.css";

class Pengeluaran extends Component {
  constructor(props) {
    super(props);
    var curr = new Date();
    var date = curr.toISOString().substr(0, 10);
    curr.setDate(curr.getDate() + 30);
    var tempo = curr.toISOString().substr(0, 10);
    this.state = {
      kode: "",
      tanggal_transaksi: date,
      nama_vendor: "",
      keterangan: "",
      jatuh_tempo: tempo,
      jumlah_dana: "",
      jumlah_bayar: "",
      akun_debit: "",
      akun_kredit: "",
      modalIsOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }
  getKodeBaru() {
    var newKode = "EXP-";
    var kodeku = "";
    var nomor = 1;
    var data = this.props.getPengeluaransQuery; // eslint-disable-next-line
    data.pengeluarans.map((request) => {
      if (request.kode !== "") {
        kodeku = request.kode;
      }
    });
    if (kodeku !== "") {
      nomor = parseInt(kodeku.substring(4, 7)) + 1;
    }
    if (nomor < 10) {
      kodeku = newKode + "00" + nomor;
    } else if (nomor >= 10 && nomor < 100) {
      kodeku = newKode + "0" + nomor;
    } else {
      kodeku = newKode + "" + nomor;
    }
    return kodeku;
  }

  submitForm(e) {
    e.preventDefault();
    this.toggleModal();
    this.props.addPengeluaranMutation({
      variables: {
        kode: this.getKodeBaru(),
        tanggal_transaksi: this.state.tanggal_transaksi,
        klientagihan_id: this.state.nama_vendor,
        keterangan: this.state.keterangan,
        jatuh_tempo: this.state.jatuh_tempo,
        akun_debit: this.state.akun_debit,
        akun_kredit: this.state.akun_kredit,
        jumlah_dana: parseInt(this.state.jumlah_dana),
        jumlah_bayar: parseInt(this.state.jumlah_dana),
      },
      refetchQueries: [{ query: getPengeluaransQuery }],
    });
  }

  onDelete(pengeluaran_id) {
    this.props.hapusPengeluaranMutation({
      variables: {
        id: pengeluaran_id,
      },
      refetchQueries: [{ query: getPengeluaransQuery }],
    });
  }

  displayAkunDebit() {
    var data = this.props.getAkunDebitKreditsQuery;
    if (data.loading) {
      return <div>Loading Data Divisi...</div>;
    } else {
      return data.akundebitkredits.map((akundebitkredit) => {
        return (
          <option key={akundebitkredit.id} value={akundebitkredit.id}>
            {" "}
            {akundebitkredit.nama_akun}{" "}
          </option>
        );
      });
    }
  }

  displayAkunKredit() {
    var data = this.props.getAkunDebitKreditsQuery;
    if (data.loading) {
      return <div>Loading Data Divisi...</div>;
    } else {
      return data.akundebitkredits.map((akundebitkredit) => {
        return (
          <option key={akundebitkredit.id} value={akundebitkredit.id}>
            {" "}
            {akundebitkredit.nama_akun}{" "}
          </option>
        );
      });
    }
  }

  displayPengeluaran() {
    var data = this.props.getPengeluaransQuery;
    var no = 0;
    if (data.loading) {
      return;
    } else {
      // eslint-disable-next-line
      return data.pengeluarans.map((pengeluaran) => {
        no++;
        return (
          <tr key={pengeluaran.id}>
            <td>{no}</td>
            <td>{pengeluaran.tanggal_transaksi}</td>
            <td>{pengeluaran.keterangan}</td>
            <td>{pengeluaran.kode}</td>
            <td>{pengeluaran.jumlah_dana}</td>
            <td>{pengeluaran.klien.nama_klien}</td>
            {/* <td>Tunai / Cicilan</td>
            <td>Lunas / Belum Lunas</td> */}
            <td>
              <Link to={`/pengeluaran/editDataPengeluaran/${pengeluaran.id}`}>
                <Button color="success" size="sm">
                  <i className="fa fa-pencil"></i>
                </Button>
              </Link>
            </td>
            <td>
              <Button
                onClick={this.onDelete.bind(this, pengeluaran.id)}
                color="danger"
                size="sm"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        );
      });
    }
  }

  displayKlien() {
    var data = this.props.getKlienTagihansQuery;
    if (data.loading) {
      return <div>Loading Data Klien...</div>;
    } else {
      return data.klientagihans.map((klientagihan) => {
        return (
          <option key={klientagihan.id} value={klientagihan.id}>
            {" "}
            {klientagihan.nama_klien}{" "}
          </option>
        );
      });
    }
  }
  setGaji() {
    var harga = 0;
    var data = this.props.getKlienTagihansQuery;
    if (data.loading) {
      return <div>Loading Data Klien...</div>;
    } else {
      // eslint-disable-next-line
      data.klientagihans.map((klientagihan) => {
        if (klientagihan.id === this.state.nama_vendor && this.state.nama_vendor === "5fedc812f3d4210c78a7decc") {
          harga = parseInt("15000000");
        } 
      });
    }
    return harga;
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Pengeluaran
                <Button
                  size="sm"
                  color="primary"
                  className="float-right mb-0"
                  onClick={this.toggleModal.bind(this)}
                >
                  <i className="fa fa-plus-square"></i> Buat Transaksi
                  Pengeluaran Baru
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tanggal Transaksi</th>
                      <th>Keterangan</th>
                      <th>Kode Invoice</th>
                      <th>Nilai</th>
                      <th>Klien / Vendor</th>
                      {/* <th>Tipe Pembayaran</th>
                      <th>Status</th> */}
                      <th colSpan="2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody align="center">{this.displayPengeluaran()}</tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button">
                        Prev
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader>Form Tambah Data Pengeluaran</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(e) => {
                this.submitForm(e);
              }}
            >
              <FormGroup>
                <Label htmlFor="name">Klien / Vendor</Label>
                <Input
                  type="select"
                  id="vendor"
                  onChange={(e) =>
                    this.setState({ nama_vendor: e.target.value })
                  }
                  required
                >
                  <option value="">Pilih Klien / Vendor</option>
                  {this.displayKlien()}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Keterangan</Label>
                <Input
                  type="textarea"
                  name="Keterangan"
                  id="keterangan"
                  placeholder="Keterangan"
                  onChange={(e) =>
                    this.setState({ keterangan: e.target.value })
                  }
                  required
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jumlah Biaya</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                  <Input
                    type="number"
                    id="jumlahbiaya"
                    defaultValue={this.setGaji()}
                    placeholder="Masukkan Jumlah Biaya"
                    className="text-align-right"
                    onChange={(e) =>
                      this.setState({ jumlah_dana: e.target.value })
                    }
                    required
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
              </FormGroup>
              {/* <FormGroup>
                <Label htmlFor="name">Jumlah Terbayar</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                  <Input
                    type="number"
                    id="terbayar"
                    placeholder="Masukkan Jumlah Terbayar"
                    className="text-align-right"
                    onChange={(e) =>
                      this.setState({ jumlah_bayar: e.target.value })
                    }
                    required
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
              </FormGroup> */}
              <FormGroup>
                <Label htmlFor="name">Tanggal Transaksi</Label>
                <Input
                  type="date"
                  defaultValue={this.state.tanggal_transaksi}
                  id="tgltrans"
                  placeholder="Masukkan Tanggal Transaksi"
                  onChange={(e) =>
                    this.setState({ tanggal_transaksi: e.target.value })
                  }
                  required
                />
              </FormGroup>
              {/* <FormGroup>
                <Label htmlFor="name">Jatuh Tempo</Label>
                <Input
                  type="date"
                  defaultValue={this.state.jatuh_tempo}
                  id="jatuh_tempo"
                  placeholder="Masukkan Tanggal Jatuh Tempo"
                  onChange={(e) =>
                    this.setState({ jatuh_tempo: e.target.value })
                  }
                  required
                />
              </FormGroup> */}
              <FormGroup>
                <Label htmlFor="name">Akun Debit</Label>
                <Input
                  type="select"
                  name="akun_deb"
                  id="akun_kre"
                  onChange={(e) =>
                    this.setState({ akun_debit: e.target.value })
                  }
                  required
                >
                  <option value="">Pilih Akun Debit</option>
                  {this.displayAkunDebit()}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Akun Kredit</Label>
                <Input
                  type="select"
                  name="akun_kre"
                  id="akun_kre"
                  onChange={(e) =>
                    this.setState({ akun_kredit: e.target.value })
                  }
                  required
                >
                  <option value="">Pilih Akun Kredit</option>
                  {this.displayAkunKredit()}
                </Input>
              </FormGroup>

              <Button type="submit" color="primary">
                Submit
              </Button>
              <Button color="danger" onClick={this.toggleModal.bind(this)}>
                Batal
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default compose(
  graphql(getPengeluaransQuery, { name: "getPengeluaransQuery" }),
  graphql(getKlienTagihansQuery, { name: "getKlienTagihansQuery" }),
  graphql(addPengeluaranMutation, { name: "addPengeluaranMutation" }),
  graphql(hapusPengeluaranMutation, { name: "hapusPengeluaranMutation" }),
  graphql(getAkunDebitKreditsQuery, { name: "getAkunDebitKreditsQuery" })
)(Pengeluaran);
