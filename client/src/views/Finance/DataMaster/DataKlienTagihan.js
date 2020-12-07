import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import {getKlienTagihansQuery, addKlienTagihanMutation, hapusKlienTagihanMutation} from '../queries/queries';
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
  Modal,
  ModalHeader,
  ModalBody,
  Form
} from 'reactstrap';

class DataKlienTagihan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_klien: '',
      modalIsOpen: false,
    };
  }

    toggleModal(){
      this.setState({
        modalIsOpen: ! this.state.modalIsOpen
      });
    }

      submitForm(e){
        e.preventDefault();
        this.toggleModal();
        this.props.addKlienTagihanMutation({
          variables:{
            nama_klien: this.state.nama_klien,
          },
          refetchQueries:[{query:getKlienTagihansQuery}]
        });
      }

      onDelete(klientagihan_id){
        this.props.hapusKlienTagihanMutation({
          variables:{
            id: klientagihan_id,
          },
          refetchQueries:[{query:getKlienTagihansQuery}],
        });
      }

  displayKlienTagihan(){
    var data = this.props.getKlienTagihansQuery;
    var no = 0;
    if(data.loading){
      return (<div>Loading Daftar KlienTagihan...</div>);
    } else {
      return data.klientagihans.map(klientagihan => {
        no++;
        return(
          <tr>
            <td key={klientagihan.id}>{no}</td>
            <td key={klientagihan.id}>{klientagihan.nama_klien}</td>
            <td key={klientagihan.id}>
              <Link to={`/datamaster/editKlienTagihan/${klientagihan.id}`}>
              <Button color="success" size="sm">
                <i className="fa fa-pencil"></i>
              </Button>
              </Link>
            </td>
            <td>
              <Button onClick={this.onDelete.bind(this, klientagihan.id)} color="danger" size="sm">
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                <Col>
                  <i className="fa fa-align-justify"></i> Daftar Klien Tagihan
                </Col>
                <Col>
                  <Button size="sm" color="primary" className="float-right mb-0" onClick={this.toggleModal.bind(this)}>
                        <i className="fa fa-plus"></i> Tambah Data Klien Tagihan
                    </Button>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th colspan="2">Aksi</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                  {this.displayKlienTagihan()}
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

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader>Form Tambah Data Klien Tagihan</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitForm(e)}}>
            <FormGroup>
              <Label htmlFor="name">Nama Klien Tagihan</Label>
              <Input type="text" id="nama_klientagihan" placeholder="Nama Lengkap" onChange={(e) =>this.setState({nama_klien:e.target.value})} required />
            </FormGroup>

              <Button type="submit" color="primary">Submit</Button>
              <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>
        </Modal>

      </div>

    );
  }
}


export default compose(
  graphql(getKlienTagihansQuery, {name:"getKlienTagihansQuery"}),
  graphql(addKlienTagihanMutation, {name:"addKlienTagihanMutation"}),
  graphql(hapusKlienTagihanMutation, {name:"hapusKlienTagihanMutation"})
)(DataKlienTagihan);
