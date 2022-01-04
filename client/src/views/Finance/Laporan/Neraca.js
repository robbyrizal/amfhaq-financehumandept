import React, { Component } from 'react';
import {

  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
} from 'reactstrap';
import YearPicker from "react-year-picker";

class Neraca extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    console.log(date);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
           <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Neraca - Februari 2020

              </CardHeader>
              <CardBody>
              <Form>
                  <FormGroup>
                    <Label htmlFor="name">Filter Tanggal</Label>
                    <YearPicker onChange={this.handleChange} />
                  </FormGroup>
                </Form>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th colspan="2">Aktiva</th>
                    <th colspan="2">Utang & Modal</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="font-weight-bold">
                    <td colspan="2">Aset Lancar :</td>
                    <td colspan="2">Utang :</td>
                  </tr>
                  <tr>
                    <td>Kas</td>
                    <td className="text-right">142.000.000</td>
                    <td>Utang Usaha</td>
                    <td className="text-right">0</td>
                  </tr>
                  <tr className="font-weight-bold">
                    <td colspan="2">Aset Tetap :</td>
                    <td colspan="2">Modal :</td>
                  </tr>
                  <tr>
                    <td>Perlengkapan</td>
                    <td className="text-right">0</td>
                    <td>Modal Disetor</td>
                    <td className="text-right">200.000.000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Laba</td>
                    <td className="text-right">- 58.000.000</td>
                  </tr>
                  </tbody>
                  <tfoot className="font-weight-bold">
                    <tr>
                    <td>Total Aset</td>
                    <td className="text-right">142.000.000</td>
                    <td>Total Utang dan Modal</td>
                    <td className="text-right">142.000.000</td>
                    </tr>
                  </tfoot>
                </Table>
              </CardBody>
            </Card>
          </Col>


        </Row>
      </div>

    );
  }
}

export default Neraca;
