import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import {getVendorsQuery} from '../queries/queries';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem,Button, PaginationLink, Row, Table } from 'reactstrap';

class ListVendor extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  displayVendors(){
    var data = this.props.data;
    var no = 0;
   
    if(data.loading){
      console.log(data);
      return (<div>Loading books...</div>);
    } else {
      return data.vendors.map(vendor => {
         no++;
        return(
          <tr>
            <td key={vendor.id}>{no}</td>
            <td key={vendor.id}>{vendor.nama}</td>
            <td key={vendor.id}>{vendor.jenis_usaha}</td>
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
                Daftar Vendor
                <Link to="/order/createOrder" className={'float-right mb-0'}>
                  <Button label color="primary">
                      Tambah Vendor
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Vendor</th>
                    <th>jenis_usaha</th>
                  </tr>
                  </thead>
                  <tbody>
                    {this.displayVendors()}
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
      </div>

    );
  }
}

export default graphql(getVendorsQuery)(ListVendor);
