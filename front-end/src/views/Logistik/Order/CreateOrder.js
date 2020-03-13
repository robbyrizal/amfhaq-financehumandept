import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getVendorsQuery, getOrdersQuery, getListRequestsQuery, addRequestMutation, addListRequestMutation} from '../queries/queries';
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

class CreateOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      orderItems: [],
      kode:'',
      status: 'Active',
      satuan:'',
      jenis:'',
      vendor_id:'',
    }
  }

   displayVendor(){
    var data = this.props.getVendorsQuery;
    if(data.loading){
      return (<div>Loading Divisi...</div>);
    } else {
      return data.vendors.map(vendor => {
        return(
          <option key={vendor.id} value={vendor.id}>{vendor.nama}</option>
        );
      });
    }
  }

  displayListRequest(){
    var data = this.props.getListRequestsQuery;
    if(data.loading){
      return (<div>Loading Divisi...</div>);
    } else {
      return data.listrequests.map(listrequest => {
        return(
           <tr>
            <td key={listrequest.id}>{listrequest.nama_barang}</td>
            <td key={listrequest.id}>{listrequest.jumlah_barang}</td>
            <td key={listrequest.id}>{listrequest.satuan}</td>
            <td key={listrequest.id}>{listrequest.jenis}</td>
            <td key={listrequest.id}>
              <Button size="sm">ADD</Button>
            </td>
          </tr>
        );
      });
    }
  }

  /*addItem(e){
    e.preventDefault();
    const newItem = { nama: this.state.nama, jumlah: this.state.jumlah, satuan: this.state.satuan, jenis: this.state.jenis};
    
    this.setState(state => {
      state.requestItems.push(newItem);
    });
     console.log(this.state.id);
  }*/

  /*submitDivisi(e){
    e.preventDefault();
    this.props.addRequestMutation({
      variables:{
        tanggal: '03-11-2020',
        status: this.state.status,
        divisi_id: this.state.div_id,
      },
      refetchQueries:[{query:getRequestsQuery}],
    });
  }*/

  /*submitRequest(e){
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
        })
      );
    });
  }
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
                      }*/
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Form Create Order
                <Link to="/order/listOrder" className={'float-right mb-0'}>
                  <Button label color="danger">
                      Batal
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
               <Form onSubmit={(e) => {this.addItem(e)}}>
                <Row form>

                  <Col md="4" mr-3>
                     <FormGroup row>
                      <Label for="exampleEmail" sm={4}>Kode Order</Label>
                      <Col sm={8}>
                        <Input type="text" name="kode" id="kode" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={4}>Tanggal Order</Label>
                      <Col sm={8}>
                        <Input type="text" name="tanggal" id="tanggal" />
                      </Col>
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup row>
                      <Label htmlFor="name" sm={4} >Vendor</Label>
                      <Col sm={8}>
                        <Input type="select" name="vendor" id="vendor">
                        <option >Pilih Vendor</option>
                        {this.displayVendor()}
                      </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="name" sm={4}>Jenis Barang</Label>
                      <Col sm={8}>
                        <Input type="select" name="jenis" id="jenis" onChange={(e) =>this.setState({jenis:e.target.value})}>
                        <option >Pilih Jenis Barang</option>
                        <option value="ATK">ATK</option>
                        <option value="Alat Konstruksi">Alat Konstruksi</option>
                        <option value="Elektronik">Elektronik</option>
                        <option value="Material">Material</option>
                        <option value="Material Alam">Material Alam</option>
                      </Input>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label htmlFor="name" sm={4}>Status Order</Label>
                       <Col sm={8}>
                        <Input type="text" name="status" id="status" />
                      </Col>
                    </FormGroup>
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
                      <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.displayListRequest()}
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
  
  graphql(getVendorsQuery, {name:"getVendorsQuery"}),
  graphql(getOrdersQuery, {name:"getOrdersQuery"}),
  graphql(getListRequestsQuery, {name:"getListRequestsQuery"}),
  graphql(addRequestMutation, {name:"addRequestMutation"}),
  graphql(addListRequestMutation, {name:"addListRequestMutation"}),
  
)(CreateOrder);
