import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class MaterialRequest extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Material Request
              </CardHeader>
              <CardBody>
              <Row>
                <Col sm="5">
                  <Card>
                    <CardBody>
                      <h6>Nama Project : Project Renovasi Rumah</h6>
                      <h6>Status : On Progres</h6>
                      <h6>
                        <Link to="/request/toolRequest" className="ml-auto">
                          Lihat Tool Request
                        </Link>
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
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
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default MaterialRequest;
