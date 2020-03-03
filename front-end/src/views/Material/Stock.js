import React, { Component } from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Pagination, 
  PaginationItem, 
  PaginationLink, 
  Row, 
  Table, 
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class Stock extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Stock Material
                <Button size="sm" className="float-right mb-0">
                  <i className="fa fa-cloud-download"></i> Unduh
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Material</th>
                    <th>Nama Material</th>
                    <th>Jumlah</th>
                    <th>Satuan</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>M003</td>
                    <td>Batako</td>
                    <td>500</td>
                    <td>Buah</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>M004</td>
                    <td>Seng</td>
                    <td>50</td>
                    <td>Lembar</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>M002</td>
                    <td>Pipa</td>
                    <td>20</td>
                    <td>Buah</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>M006</td>
                    <td>Genteng</td>
                    <td>100</td>
                    <td>Buah</td>
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
          <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-plus-square"></i> Form Tambah Material
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="name">Nama Material</Label>
                <Input type="text" id="name" placeholder="Masukkan Nama Material" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jumlah</Label>
                <Input type="number" id="jumlah" placeholder="Masukkan Jumlah Material" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Satuan</Label>
                <Input type="select" name="satuan" id="satuan">
                  <option value="Kg">Kg</option>
                  <option value="Buah">Buah</option>
                  <option value="Meter">Meter</option>
                  <option value="Lembar">Lembar</option>
                </Input>
              </FormGroup>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Stock;
