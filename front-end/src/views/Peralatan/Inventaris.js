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
  Collapse,
} from 'reactstrap';

class Inventaris extends Component {

   constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
           <Col md="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Inventaris
                <Button size="sm" className="float-right mb-0">
                  <i className="fa fa-cloud-download"></i> Unduh
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode</th>
                    <th>Nama Peralatan</th>
                    <th>Jumlah</th>
                    <th>Satuan</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>P001</td>
                    <td>Helmet</td>
                    <td>50</td>
                    <td>Buah</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>P002</td>
                    <td>Rompi</td>
                    <td>50</td>
                    <td>Buah</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>P003</td>
                    <td>Sepatu Safety</td>
                    <td>20</td>
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
            <div id="accordion">
              <Card className="mb-0">
                <CardHeader id="headingOne">
                  <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                    <h5 className="m-0 p-0">Form Tambah Peralatan</h5>
                  </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
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
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </CardBody>
                </Collapse>
              </Card>

              <Card className="mb-0">
                <CardHeader id="headingTwo">
                  <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                      <h5 className="m-0 p-0">Form Pendataan Alat Rusak</h5>
                  </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
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
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Inventaris;
