import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getRequestsQuery} from '../queries/queries';
import { Badge, Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Request extends Component {

   constructor(props){
    super(props);
    this.state = {
      requestItems: [],
      nama:'',
      jumlah:'',
      satuan:'',
      div_id:'',
      request_id:'',
      }
  }

  displayRequest(){
    var data1 = this.props.getRequestsQuery;
    var no = 0;
    if(data1.loading){
      return (<div>Loading Divisi...</div>);
    } else {
      return data1.requests.map(request => {
        no++;
        return(
          <tr>
            <td key={request.id}>{no}</td>
            <td key={request.id}>{request.divisi.nama}</td>
            <td key={request.id}>{request.tanggal}</td>
            <td key={request.id}>
              <Link to="/request/detailRequest">
                <i className="fa fa-file"></i>
              </Link>
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
                  <h4>List Request</h4>
                </Col>
                <Col>
                  <Link to="/request/createRequest" className={'float-right mb-0'}>
                    <Button label color="primary">
                        Buat Request
                    </Button>
                  </Link>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Divisi</th>
                    <th>Tanggal</th>
                    <th>Detail</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                  {this.displayRequest()}
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
  graphql(getRequestsQuery, {name:"getRequestsQuery"}),
)(Request);
