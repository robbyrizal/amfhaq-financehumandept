import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem,Button, PaginationLink, Row, Table } from 'reactstrap';

class ListVendor extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Daftar Vendor
                <Link to="/order/createOrder" className={'float-right mb-0'}>
                  <Button label color="primary">
                      Tambah Vendor
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Vendor</th>
                    <th>Alamat</th>
                    <th>Bidang</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>CV. Sumber Abadi</td>
                      <td>Jl. Veteran</td>
                      <td>Material Bangunan</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>CV. Sumber Bangunan</td>
                      <td>Jl. Dipenogoro</td>
                      <td>Material Bangunan</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>CV. Tunggal Jaya</td>
                      <td>Jl. Mulawarman</td>
                      <td>Alat Konstruksi</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>CV. Bangunan Jaya</td>
                      <td>Jl. Panglegur</td>
                      <td>Alat Konstruksi</td>
                    </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
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

export default ListVendor;
