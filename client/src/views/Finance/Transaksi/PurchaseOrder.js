import React, { Component } from 'react';
import * as compose from 'lodash.flowright';
import {graphql} from 'react-apollo';
import { getPurchaseOrdersQuery } from '../queries/queries';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem,Button, PaginationLink, Row, Table } from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class PurchaseOrder extends Component {
  
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          
        }
      ]
    });
  };

  displayAllPurchaseOrder(){
    var data = this.props.getPurchaseOrdersQuery;
    var no = 0;
    if(data.loading){
      return
    } else {
      return data.purchaseOrders.map(order => {
        no++;
        return(
          <tr key={order.id}>
            <td>{no}</td>
            <td>{order.id}</td>
            <td>{order.kode}</td>
            <td>{order.total_harga}</td>
            <td>{order.tanggal}</td>
            <td>{order.status}</td>
            <td>
              
              <Button onClick={this.submit}  color="primary" size="sm">
                <i className="fa fa-plus-square"></i>
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
                  Daftar Purchase Order
                </Col>
                <Col>
                 
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>ID PO</th>
                    <th>Kode</th>
                    <th>Total Harga</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                  {this.displayAllPurchaseOrder()}
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

export default compose(
  graphql(getPurchaseOrdersQuery, {name:"getPurchaseOrdersQuery"}),
) (PurchaseOrder);