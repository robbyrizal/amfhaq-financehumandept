import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class ToolRequest extends Component {
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
                        <Link to="/request/materialRequest" className="ml-auto">
                          Lihat Material Request
                        </Link>
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                    <tr>
                      <th>Nama Tool</th>
                      <th>Jumlah</th>
                      <th>Satuan</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Helmet</td>
                      <td>80</td>
                      <td>Buah</td>
                    </tr>
                    <tr>
                      <td>Rompi</td>
                      <td>80</td>
                      <td>Buah</td>
                    </tr>
                    <tr>
                      <td>Sepatu Safety</td>
                      <td>80</td>
                      <td>Pasang</td>
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

export default ToolRequest;
