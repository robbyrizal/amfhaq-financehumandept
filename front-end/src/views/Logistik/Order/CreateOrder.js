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
} from 'reactstrap';

class CreateOrder extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
             <Card>
              <CardHeader>
                Project's Request
              </CardHeader>
              <CardBody>
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
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                Form Order
                <Link to="/order/listOrder" className={'float-right mb-0'}>
                  <Button label color="danger">
                      Batal
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Nama Peralatan</Label>
                  <Input type="text" id="name" placeholder="Masukkan Nama Peralatan" required />
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
                <FormGroup>
                  <Label htmlFor="name">Vendor</Label>
                  <Input type="text" id="name" placeholder="Masukkan Nama Vendor" required />
                </FormGroup>
                <Button type="Submit" size="sm" color="success"><i className="fa fa-plus-circle"></i> Add</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                <Button type="Submit" size="sm" color="primary" className={'float-right mb-0'}><i className="fa fa-pencil"></i> Submit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default CreateOrder;
