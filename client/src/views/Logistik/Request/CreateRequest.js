import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { hapusRequestMutation, getRequestsQuery, getBarangsQuery, getListRequestsQuery, addListRequestMutation} from '../queries/queries';
import {  
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Button, 
  Row, 
  Table,
  FormGroup,
  Form,
  Label,
  Input,
  Modal,
  ModalHeader, 
  ModalBody,
} from 'reactstrap';

class CreateRequest extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestItems: [],
      nama:'',
      status: 'Active',
      jumlah:'',
      satuan:'',
      jenis:'',
      req_id:'',
      redirect: true,
      selected: null,
    }
  }

  displayNewRequest(){
    var data = this.props.getRequestsQuery;
    var request_id = '';
    var status = '';
    data.requests.map(request => {
      return(
        request_id = request.id,
        status = request.status
      );
    });
    return(
      <div>
        <h5>{status}</h5>
        <h5>{request_id}</h5>
      </div>
    );
  }

  onDelete(){
    var data = this.props.getRequestsQuery;
    var request_id = '';
    data.requests.map(request => {
      return(
        request_id = request.id
      );
    });
    this.props.hapusRequestMutation({
      variables:{
        id: request_id,        
      },
      refetchQueries:[{query:getRequestsQuery}],
    });
  }


  displayBarang(){
    var data = this.props.getBarangsQuery;
    if(data.loading){
      return (<div>Loading Barang...</div>);
    } else {
      return data.barangs.map(barang => {
        return(
          <option key={barang.id} value={barang.nama_barang}>{barang.nama_barang}</option>
        );
      });
    }
  }

  toggleModal(){
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    });
  }

  addItem(e){
    e.preventDefault();
    this.toggleModal();
    const newItem = { nama: this.state.nama, jumlah: this.state.jumlah, satuan: this.state.satuan, jenis: this.state.jenis, status: this.state.status};
    this.setState(state => {
      state.requestItems.push(newItem);
    });
  }


  submitRequest = (e) => {
      var data = this.props.getRequestsQuery;
      var request_id = '';
      data.requests.map(request => {
          return(
             request_id = request.id
          );
      });
      this.state.requestItems.map(item => {
        return(
          this.props.addListRequestMutation({
            variables:{
              nama_barang: item.nama,
              jumlah_barang: parseInt(item.jumlah),
              satuan: item.satuan,
              jenis: item.jenis,
              request_id: request_id,
            },
            refetchQueries:[{query:getListRequestsQuery}],
          })
        );
      });
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Form Permintaan Barang
                <Link to="/request/request" className={'float-right mb-0'}>
                  <Button label color="danger" onClick={this.onDelete.bind(this)}>
                      Batal
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
               <Form onSubmit={(e) => {this.addItem(e)}}>
                <Row form>
                  <Col md="4">
                    {this.displayNewRequest()}
                  </Col>
                  <Col md="2">
                    
                  </Col>
                </Row>
                
                </Form>
                <hr />
                <Row>
                  <Col>
                    <h5>Daftar Barang</h5>
                  </Col>
                  <Col >
                    <Button onClick={this.toggleModal.bind(this)} size="sm" color="success" className={'float-right mb-0'}><i className="fa fa-plus-circle"></i> Tambah Barang</Button>
                  </Col>
                </Row>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                    <tr>
                      <th>Nama Barang</th>
                      <th>Jumlah</th>
                      <th>Satuan</th>
                      <th>Jenis Barang</th>
                      <th>status</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                         this.state.requestItems.map(item => {
                          return(
                            <tr>
                              <td>{item.nama}</td>
                              <td>{item.jumlah}</td>
                              <td>{item.satuan}</td>
                              <td>{item.jenis}</td>
                              <td>{item.status}</td>
                            </tr>
                          ) 
                         })
                      }
                    </tbody>
                  </Table>
                  <br />
                  <Link to="/request/request">
                    <Button onClick={(e) => {this.submitRequest(e)}} color="primary">Submit</Button>
                  </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader>Form Tambah Barang</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.addItem(e)}}>
              <FormGroup>
                <Label htmlFor="name">Nama Barang</Label>
                <Input type="select" name="nama" onChange={(e) =>this.setState({nama:e.target.value})} id="nama" required>
                  <option>Nama Barang</option>
                  {this.displayBarang()}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jenis Barang</Label>
                <Input type="select" id="jenis" onChange={(e) =>this.setState({jenis:e.target.value})} required>
                  <option>Jenis</option>
                  <option value="Bahan Alam">Bahan Alam</option>
                  <option value="Besi">Besi</option>
                  <option value="Cat">Cat</option>
                  <option value="Kayu">Kayu</option>
                  <option value="Keramik">Keramik</option>
                  <option value="Material">Material</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Satuan</Label>
                <Input type="select" name="satuan" id="satuan" onChange={(e) =>this.setState({satuan:e.target.value})}>
                  <option>Satuan</option>
                  <option value="Kg">Kg</option>
                  <option value="Buah">Buah</option>
                  <option value="Meter">Meter</option>
                  <option value="Lembar">Lembar</option>
                  <option value="Liter">Liter</option>
                  <option value="Sak">Sak</option>
                  <option value="m3">m3</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jumlah Barang</Label>
                <Input type="number" id="jumlah" onChange={(e) =>this.setState({jumlah:e.target.value})} placeholder="Jumlah Barang" required />
              </FormGroup>
              <Button type="submit" color="primary">Tambah</Button>
              <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>  
        </Modal>
      </div>
    );
  }
}

export default compose( 
  graphql(getBarangsQuery, {name:"getBarangsQuery"}),
  graphql(getRequestsQuery, {name:"getRequestsQuery"}),
  graphql(getListRequestsQuery, {name:"getListRequestsQuery"}),
  graphql(addListRequestMutation, {name:"addListRequestMutation"}),
  graphql(hapusRequestMutation, {name:"hapusRequestMutation"}),
  
)(CreateRequest);
