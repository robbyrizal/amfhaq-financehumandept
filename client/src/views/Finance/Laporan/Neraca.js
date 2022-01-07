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
                <i className="fa fa-align-justify"></i> Neraca - Desember 2020

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
                      <th>Kode Akun</th>
                      <th>Nama Akun</th>
                      <th>Debet</th>
                      <th>Kredit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
              <td>1111</td>
              <td>Kas</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 148.200.000
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 0
              </td>
            </tr>
                    <tr>
              <td>1112</td>
              <td>Bank</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 200.000
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 0
              </td>
            </tr>
                    <tr>
              <td>2221</td>
              <td>Utang</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 0
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 200.000
              </td>
            </tr>
                    <tr>
              <td>4411</td>
              <td>Pendapatan Proyek	</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 0
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 150.000.000
              </td>
            </tr>
                    <tr>
              <td>5512</td>
              <td>Beban Gaji	</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 1.500.000
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 0
              </td>
            </tr>
                    <tr>
              <td>5513</td>
              <td>Beban Internet, Listrik, Air	</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 300.000
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Rp 0
              </td>
            </tr>
            <tr>
                      <td colSpan="2"></td>
                      <td
                        style={{
                          textAlign: "right",
                        }}
                      >
                        Rp 150.200.000
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                        }}
                      >
                        {" "}
                        Rp 150.200.000
                      </td>
                    </tr></tbody>
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
