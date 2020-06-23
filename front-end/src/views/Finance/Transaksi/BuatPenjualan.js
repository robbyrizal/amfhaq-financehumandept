import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
} from 'reactstrap';

class BuatPenjualan extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>

          <Col>
            <Card>
              <CardHeader>
                Buat Transaksi Penjualan Baru
                <Link to="/transaksi/penjualan" className={'float-right mb-0'}>
                  <Button label color="danger">
                      Batal
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
              <FormGroup>
                <Label htmlFor="name">Nama Proyek</Label>
                <Input type="select" name="proyek" id="proyek">
                  <option value="">...</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Klien</Label>
                <Input type="select" name="klien" id="klien">
                  <option value="">...</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jumlah Dana</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                <Input type="number" id="jumlahdana" placeholder="Masukkan Jumlah Dana" required />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              </FormGroup>
              <FormGroup>
              <Label htmlFor="name">Jumlah Terbayar</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                <Input type="number" id="terbayar" placeholder="Masukkan Jumlah Terbayar" required />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Tanggal Transaksi</Label>
                <Input type="date" id="tgltrans" placeholder="Masukkan Tanggal Transaksi" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jatuh Tempo</Label>
                <Input type="date" id="tgltempo" placeholder="Masukkan Tanggal Jatuh Tempo" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Kategori</Label>
                <Input type="select" name="satuan" id="satuan">
                  <option value="Baru">Bangunan Baru</option>
                  <option value="Renovasi">Renovasi</option>
                </Input>
              </FormGroup>
                <Button type="Submit" size="sm" color="primary" className={'float-right mb-0'}><i className="fa fa-pencil"></i> Submit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default BuatPenjualan;
