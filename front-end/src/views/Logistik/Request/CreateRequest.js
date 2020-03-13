import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getDivisisQuery, getRequestsQuery,getListRequestsQuery, addRequestMutation, addListRequestMutation} from '../queries/queries';
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
      div_id:'',
      redirect: true,
    }
  }

  displayDivisi(){
    var data = this.props.getDivisisQuery;
    if(data.loading){
      return (<div>Loading Divisi...</div>);
    } else {
      return data.divisis.map(divisi => {
        return(
          <option key={divisi.id} value={divisi.id}>{divisi.nama}</option>
        );
      });
    }
  }

  addItem(e){
    e.preventDefault();
    const newItem = { nama: this.state.nama, jumlah: this.state.jumlah, satuan: this.state.satuan, jenis: this.state.jenis};
    
    this.setState(state => {
      state.requestItems.push(newItem);
    });
     console.log(this.state.id);
  }

  submitDivisi(e){
    e.preventDefault();
    this.props.addRequestMutation({
      variables:{
        tanggal: '03-11-2020',
        status: this.state.status,
        divisi_id: this.state.div_id,
      },
      refetchQueries:[{query:getRequestsQuery}],
    });
  }

  submitRequest(e){
    var data = this.props.getRequestsQuery;
    var request_id = '';
    data.requests.map(request => {
        return(
           request_id = request.id,
           console.log(request_id)
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
                Form Request
                <Link to="/request/request" className={'float-right mb-0'}>
                  <Button label color="danger">
                      Batal
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
               <Form onSubmit={(e) => {this.addItem(e)}}>
                <Row form>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name" hidden>Nama Divisi</Label>
                      <Input type="select" name="nama" onChange={(e) =>this.setState({div_id:e.target.value})} id="satuan">
                        <option >Nama Divisi</option>
                        {this.displayDivisi()}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <Button onClick={(e) => {this.submitDivisi(e)}} size="sm" color="success"><i className="fa fa-plus-circle"></i> Add</Button>
                  </Col>
                </Row>
                <Row form>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name" hidden>Nama Barang</Label>
                      <Input type="text" id="nama" onChange={(e) =>this.setState({nama:e.target.value})} placeholder="Masukkan Nama Barang" required />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Label htmlFor="name" hidden>Jumlah</Label>
                      <Input type="number" id="jumlah" onChange={(e) =>this.setState({jumlah:e.target.value})} placeholder="Jumlah Material" required />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Label htmlFor="name" hidden>Satuan</Label>
                      <Input type="select" name="satuan" onChange={(e) =>this.setState({satuan:e.target.value})} id="satuan">
                        <option >Pilih Satuan</option>
                        <option value="Kg">Kg</option>
                        <option value="Kardus">Kardus</option>
                        <option value="Buah">Buah</option>
                        <option value="Meter">Meter</option>
                        <option value="Lembar">Lembar</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Label htmlFor="name" hidden>Jenis Barang</Label>
                      <Input type="select" name="jenis" onChange={(e) =>this.setState({jenis:e.target.value})} id="satuan">
                        <option >Pilih Jenis</option>
                        <option value="ATK">ATK</option>
                        <option value="Alat Konstruksi">Alat Konstruksi</option>
                        <option value="Elektronik">Elektronik</option>
                        <option value="Material">Material</option>
                        <option value="Material Alam">Material Alam</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col >
                    <Button type="Submit" size="sm" color="success"><i className="fa fa-plus-circle"></i> Add</Button>
                  </Col>
                  </Row>
                </Form>
                <hr />
                <h5>Daftar Request</h5>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                    <tr>
                      <th>Nama Barang</th>
                      <th>Jumlah</th>
                      <th>Satuan</th>
                      <th>Jenis Barang</th>
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
                            </tr>
                          ) 
                         })
                      }
                    </tbody>
                  </Table>
                <Button onClick={(e) => {this.submitRequest(e)}} color="primary">Submit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default compose(
  
  graphql(getDivisisQuery, {name:"getDivisisQuery"}),
  graphql(getRequestsQuery, {name:"getRequestsQuery"}),
  graphql(getListRequestsQuery, {name:"getListRequestsQuery"}),
  graphql(addRequestMutation, {name:"addRequestMutation"}),
  graphql(addListRequestMutation, {name:"addListRequestMutation"}),
  
)(CreateRequest);
