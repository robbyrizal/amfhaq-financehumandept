import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class DetailRequest extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
               <Row>
                <Col>
                  Detail Request
                </Col>
                <Col>
                  <Link to="/request/request" className={'float-right mb-0'}>
                    <Button label color="primary" size="sm">
                        Kembali
                    </Button>
                  </Link>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <Row>
                <Col md="5">
                  <h5>Divisi : Manajemen Proyek</h5>
                </Col>
                <Col md="5">
                  <h5>Tanggal Request : 3-11-2019</h5>
                </Col>
              </Row>
              <hr />
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                    <tr>
                      <th>Nama Material</th>
                      <th>Jumlah</th>
                      <th>Satuan</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Pasir</td>
                      <td>10</td>
                      <td>Truk</td>
                    </tr>
                    <tr>
                      <td>Paku</td>
                      <td>10</td>
                      <td>Kg</td>
                    </tr>
                    <tr>
                      <td>Seng</td>
                      <td>80</td>
                      <td>Lembar</td>
                    </tr>
                    <tr>
                      <td>Semen</td>
                      <td>50</td>
                      <td>Sak</td>
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

export default DetailRequest;
