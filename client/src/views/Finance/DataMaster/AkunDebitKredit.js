import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import {getAkunDebitKreditsQuery, addAkunDebitKreditMutation, updateAkunDebitKreditMutation, hapusAkunDebitKreditMutation} from '../queries/queries';
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

class AkunDebitKredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kode_akun: '',
      nama_akun: '',
      akundebitkredit_id: '',
      modalIsOpen: false,
      modalEditIsOpen: false,
    };
  }

    toggleModal(){
      this.setState({
        modalIsOpen: ! this.state.modalIsOpen
      });
    }

    toggleModalEdit(){
      this.setState({
        modalEditIsOpen: ! this.state.modalEditIsOpen
      });
    }
 // eslint-disable-next-line
    toggleModalEdit(id,kode_akun1,nama_akun1){
      this.setState({
        modalEditIsOpen: ! this.state.modalEditIsOpen,
        akundebitkredit_id : id,
        kode_akun: kode_akun1,
        nama_akun: nama_akun1,
      });
    }

      submitForm(e){
        e.preventDefault();
        this.toggleModal();
        this.props.addAkunDebitKreditMutation({
          variables:{
            kode_akun: this.state.kode_akun,
            nama_akun: this.state.nama_akun,
          },
          refetchQueries:[{query:getAkunDebitKreditsQuery}]
        });
      }

      
      submitEditForm(e){
        e.preventDefault();
        this.toggleModalEdit();
            this.props.updateAkunDebitKreditMutation({
                variables:{
                  id:this.state.akundebitkredit_id,
                  kode_akun: this.state.kode_akun,
                  nama_akun: this.state.nama_akun,
                },
                refetchQueries:[{query:getAkunDebitKreditsQuery}]
              });
       
        
      }

      onDelete(akundebitkredit_id){
        this.props.hapusAkunDebitKreditMutation({
          variables:{
            id: akundebitkredit_id,
          },
          refetchQueries:[{query:getAkunDebitKreditsQuery}],
        });
      }

  displayAkunDebitKredit(){
    var data = this.props.getAkunDebitKreditsQuery;
    var no = 0;
    if(data.loading){
      return (<div>Loading Daftar AkunDebitKredit...</div>);
    } else {
      return data.akundebitkredits.map(akundebitkredit => {
        no++;
        return(
          <tr>
            <td key={akundebitkredit.id}>{no}</td>
            <td key={akundebitkredit.id}>{akundebitkredit.kode_akun}</td>
            <td key={akundebitkredit.id}>{akundebitkredit.nama_akun}</td>
            <td key={akundebitkredit.id}>
            <Button onClick={this.toggleModalEdit.bind(this, akundebitkredit.id,akundebitkredit.kode_akun, akundebitkredit.nama_akun)} color="success" size="sm">
                <i className="fa fa-pencil"></i>
              </Button>
            </td>
            <td>
              <Button onClick={this.onDelete.bind(this, akundebitkredit.id)} color="danger" size="sm">
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
                  <i className="fa fa-align-justify"></i> Daftar Akun Debit Kredit
                </Col>
                <Col>
                  <Button size="sm" color="primary" className="float-right mb-0" onClick={this.toggleModal.bind(this)}>
                        <i className="fa fa-plus"></i> Tambah Akun Debit Kredit
                    </Button>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Kode Akun</th>
                    <th>Nama Akun</th>
                    <th colspan="2">Aksi</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                  {this.displayAkunDebitKredit()}
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
          <ModalHeader>Form Tambah Akun Debit Kredit</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitForm(e)}}>
            <FormGroup>
              <Label htmlFor="name">Kode Akun</Label>
              <Input type="text" id="kode_akun" placeholder="Kode Akun" onChange={(e) =>this.setState({kode_akun:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Nama Akun</Label>
              <Input type="text" id="nama_akun" placeholder="Nama Akun" onChange={(e) =>this.setState({nama_akun:e.target.value})} required />
            </FormGroup>

              <Button type="submit" color="primary">Submit</Button>
              <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modalEditIsOpen}>
          <ModalHeader>Form Edit Akun Debit Kredit</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitEditForm(e)}}>
            <FormGroup>
              <Label htmlFor="name">Kode Akun</Label>
              <Input type="text" defaultValue={this.state.kode_akun} id="kode_akun" placeholder="Kode Akun" onChange={(e) =>this.setState({kode_akun:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Nama Akun</Label>
              <Input type="text" defaultValue={this.state.nama_akun} id="nama_akun" placeholder="Nama Akun" onChange={(e) =>this.setState({nama_akun:e.target.value})} required />
            </FormGroup>
            
              <Button type="submit" color="primary">Submit</Button>
              <Button color="danger" onClick={this.toggleModalEdit.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>

    );
  }
}


export default compose(
  graphql(getAkunDebitKreditsQuery, {name:"getAkunDebitKreditsQuery"}),
  graphql(addAkunDebitKreditMutation, {name:"addAkunDebitKreditMutation"}),
  graphql(updateAkunDebitKreditMutation, {name:"updateAkunDebitKreditMutation"}),
  graphql(hapusAkunDebitKreditMutation, {name:"hapusAkunDebitKreditMutation"})
)(AkunDebitKredit);
