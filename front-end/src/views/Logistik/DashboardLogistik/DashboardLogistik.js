import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardHeader,
  Table,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,

} from 'reactstrap';


class DashboardLogistik extends Component {
  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Penerimaan Barang
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Order</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Pengambilan Barang
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Request</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Purchase Order
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Order</th>
                    <th>Tanggal</th>
                    <th>Vendor</th>
                    <th>Jenis Barang</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardLogistik;
