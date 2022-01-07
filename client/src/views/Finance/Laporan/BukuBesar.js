import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { getPemasukansQuery, getPengeluaransQuery } from "../queries/queries";

class BukuBesar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumlahnomor: 0,
      jumlahdebit: 0,
      jumlahkredit: 0,
      tanggal_jurnal: "2020-12",
    };
  }

  displayPemasukan() {
    var data = this.props.getPemasukansQuery;
    var no = 0;
    if (data.loading) {
      return;
    } else {
      // eslint-disable-next-line
      return data.pemasukans.map((pemasukan) => {
        no++;
        return (
          <tr key={pemasukan.id}>
            <td>{no}</td>
            <td>{pemasukan.tanggal_transaksi}</td>
            <td>{pemasukan.klien.nama}</td>
            <td>{pemasukan.proyek.nama}</td>
            <td>{pemasukan.kode}</td>
            <td>{pemasukan.keterangan}</td>
            <td>{pemasukan.total_harga}</td>
            <td>
              {pemasukan.akun_debit.kode_akun} ||{" "}
              {pemasukan.akun_kredit.kode_akun}
            </td>
            <td>
              {pemasukan.akun_debit.nama_akun} ||{" "}
              {pemasukan.akun_kredit.nama_akun}
            </td>
            <td>
              <Link to={`/pemasukan/editDataPemasukan/${pemasukan.id}`}>
                <Button color="success" size="sm">
                  <i className="fa fa-pencil"></i>
                </Button>
              </Link>
            </td>
            <td>
              <Button color="danger" size="sm">
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
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
            <td>
              {pengeluaran.akun_debit.nama_akun} ||{" "}
              {pengeluaran.akun_kredit.nama_akun}
            </td>
            <td>
              {pengeluaran.akun_debit.nama_akun} ||{" "}
              {pengeluaran.akun_kredit.nama_akun}
            </td>
            <td>
              <Link to={`/pengeluaran/editDataPengeluaran/${pengeluaran.id}`}>
                <Button color="success" size="sm">
                  <i className="fa fa-pencil"></i>
                </Button>
              </Link>
            </td>
            <td>
              <Button color="danger" size="sm">
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        );
      });
    }
  }

  // JurnalUmum() {
  displayJurnalUmum() {
    var pemasukan = this.props.getPemasukansQuery;
    var pengeluaran = this.props.getPengeluaransQuery;
    const jurnalumum = [];
    const neraca = [];
    var no = 0;
    var totaldebit = 0;
    var totalkredit = 0;
    var kode_akun = "";
    var nama_akun = "";
    var tanggal = this.state.tanggal_jurnal;
    if (pemasukan.loading) {
      return;
    } else {
      // eslint-disable-next-line
      pemasukan.pemasukans.map((pemasukan) => {
        
        if (pemasukan.tanggal_transaksi.includes(tanggal)) {
          no++;
          
          jurnalumum.push({
            nomor: no,
            tanggal: pemasukan.tanggal_transaksi,
            kode_akun: pemasukan.akun_debit.kode_akun,
            nama_akun: pemasukan.akun_debit.nama_akun,
            debit: pemasukan.dana_diterima,
            kredit: 0,
          });
          totaldebit += pemasukan.dana_diterima;
          totalkredit += 0;
          no++;
          jurnalumum.push({
            nomor: no,
            tanggal: pemasukan.tanggal_transaksi,
            kode_akun: pemasukan.akun_kredit.kode_akun,
            nama_akun: pemasukan.akun_kredit.nama_akun,
            debit: 0,
            kredit: pemasukan.dana_diterima,
          });
          totaldebit += 0;
          totalkredit += pemasukan.dana_diterima;
        }
      });
    }

    if (pengeluaran.loading) {
      return;
    } else {
      // eslint-disable-next-line
      pengeluaran.pengeluarans.map((pengeluaran) => {
        if (pengeluaran.tanggal_transaksi.includes(tanggal)) {
          no++;
          jurnalumum.push({
            nomor: no,
            tanggal: pengeluaran.tanggal_transaksi,
            kode_akun: pengeluaran.akun_debit.kode_akun,
            nama_akun: pengeluaran.akun_debit.nama_akun,
            debit: pengeluaran.jumlah_bayar,
            kredit: 0,
          });
          totaldebit += pengeluaran.jumlah_bayar;
          totalkredit += 0;
          no++;
          jurnalumum.push({
            nomor: no,
            tanggal: pengeluaran.tanggal_transaksi,
            kode_akun: pengeluaran.akun_kredit.kode_akun,
            nama_akun: pengeluaran.akun_kredit.nama_akun,
            debit: 0,
            kredit: pengeluaran.jumlah_bayar,
          });
          totaldebit += 0;
          totalkredit += pengeluaran.jumlah_bayar;
        }
      });
    }

    let sortedJurnal = jurnalumum.sort((c1, c2) =>
      c1.kode_akun < c2.kode_akun ? -1 : c1.kode_akun > c2.kode_akun ? 1 : 0
    );

    let pointer = "";
    //display data yg sudah di combine
    // return jurnalumum.map((jurnalumum) => {
    return sortedJurnal.map((jurnalumum) => {
      if (pointer !== "" && pointer !== jurnalumum.nama_akun) {
        pointer = jurnalumum.nama_akun;
        console.log("Ganti Akun");
        return (
          <tbody>
            {/* <tr>
              <td colSpan="5">Ganti Akun</td>
            </tr> */}
            <tr>
              <td>{jurnalumum.tanggal}</td>
              <td>{jurnalumum.kode_akun}</td>
              <td>{jurnalumum.nama_akun}</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp {jurnalumum.debit.toLocaleString("id")}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp {jurnalumum.kredit.toLocaleString("id")}
              </td>
            </tr>
          </tbody>
        );
      }

      console.log("pointer: " + pointer + " , Now: " + jurnalumum.nama_akun);
      pointer = jurnalumum.nama_akun;
      console.log(" Data yg ditampilkan: " + jurnalumum.nama_akun);
      return (
        <tr>
          <td>{jurnalumum.tanggal}</td>
          <td>{jurnalumum.kode_akun}</td>
          <td>{jurnalumum.nama_akun}</td>
          <td
            style={{
              textAlign: "right",
            }}
          >
            Rp {jurnalumum.debit.toLocaleString("id")}
          </td>
          <td
            style={{
              textAlign: "right",
            }}
          >
            Rp {jurnalumum.kredit.toLocaleString("id")}
          </td>
        </tr>
      );
    });
  }
  displaytanggal() {
    var months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    var tanggal_jurnal = this.state.tanggal_jurnal;
    return (
      months[parseInt(tanggal_jurnal.substr(5, 2) - 1)] +
      " " +
      tanggal_jurnal.substr(0, 4)
    );
  }
  render() {
    // console.log(this.displayPemasukan());
    // console.log(this.displaytanggal());
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                Buku Besar - {this.displaytanggal()}
                {/* Jurnal Umum - Desember 2020 */}
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="name">Filter Tanggal</Label>
                    <Input
                      type="month"
                      placeholder="Masukkan Tanggal Transaksi"
                      onChange={(e) =>
                        this.setState({
                          tanggal_jurnal: e.target.value,
                          jumlahdebit: 0,
                          jumlahkredit: 0,
                        })
                      }
                      required
                    />
                  </FormGroup>
                </Form>

                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Tanggal Transaksi</th>
                      <th>Kode Akun</th>
                      <th>Nama Akun</th>
                      <th>Debet</th>
                      <th>Kredit</th>
                    </tr>
                  </thead>
                  <tbody>{this.displayJurnalUmum()}</tbody>
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
      </div>
    );
  }
}

export default compose(
  graphql(getPemasukansQuery, { name: "getPemasukansQuery" }),
  graphql(getPengeluaransQuery, { name: "getPengeluaransQuery" })
)(BukuBesar);
