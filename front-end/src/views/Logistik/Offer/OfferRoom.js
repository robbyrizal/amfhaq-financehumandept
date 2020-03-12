import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getDivisisQuery, addDivisiMutation} from '../queries/queries';
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

class OfferRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      nama:'',
    }
  }

  displayDivisis(){
    var data = this.props.getDivisisQuery;
    if(data.loading){
      return (<div>Loading Divisi...</div>);
    } else {
      return data.divisis.map(divisi => {
        return(
          <tr>
            <td key={divisi.id}>{divisi.nama}</td>
          </tr>
        );
      });
    }
  }

  submitRequest(e){
   e.preventDefault();
    this.props.addDivisiMutation({
      variables:{
        nama:this.state.nama,
      },
      refetchQueries:[{query:getDivisisQuery}]
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
               <Form onSubmit={(e) => {this.submitRequest(e)}}>
                <Row form>
                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name" hidden>Nama Divisi</Label>
                      <Input type="text" id="nama" onChange={(e) =>this.setState({nama:e.target.value})} placeholder="Masukkan Nama Barang" required />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <Button type="Submit" size="sm" color="success"><i className="fa fa-plus-circle"></i> Submit</Button>
                  </Col>
                  </Row>
                </Form>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Nama</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.displayDivisis()}
                  </tbody>
                </Table>
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
  graphql(addDivisiMutation, {name:"addDivisiMutation"})
)(OfferRoom);
