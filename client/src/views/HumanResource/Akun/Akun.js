import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {getAkunsQuery, addAkunMutation, hapusAkunMutation,getKaryawansQuery, editAkunMutation} from '../queries/queries';
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

class Akun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      karyawan_id: '',
      akun_id: '',
      password_lama:'',
      password_baru: '',
      modalIsOpen: false,
      modalEditIsOpen: false,
    };
    
  }

  // createNotification = (type) => {
  //   return () => {
  //     switch (type) {
  //       case 'info':
  //         NotificationManager.info('Info message');
  //         break;
  //       case 'success':
  //         NotificationManager.success('Success message', 'Title here');
  //         break;
  //       case 'warning':
  //         NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  //         break;
  //       case 'error':
  //         NotificationManager.error('Error message', 'Click me!', 5000, () => {
  //           alert('callback');
  //         });
  //         break;
  //     }
  //   };
  // };

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
    toggleModalEdit(id,username1,password1){
      this.setState({
        modalEditIsOpen: ! this.state.modalEditIsOpen,
        akun_id : id,
        username: username1,
        password_lama: password1,
      });
    }

      submitForm(e){
        e.preventDefault();
        this.toggleModal();
        this.props.addAkunMutation({
          variables:{
            username: this.state.username,
        	password: this.state.password,
            karyawan_id: this.state.karyawan_id,
          },
          refetchQueries:[{query:getAkunsQuery},{query:getKaryawansQuery}]
        });
      }

      submitEditForm(e){
        e.preventDefault();
        this.toggleModalEdit();
        if(this.state.password === this.state.password_lama){
            this.props.editAkunMutation({
                variables:{
                  id:this.state.akun_id,
                  username: this.state.username,
                  password: this.state.password_baru,
                },
                refetchQueries:[{query:getAkunsQuery}]
              });
        } else {
            alert("Password Lama Tidak Cocok!")
        }
        
      }

      onDelete(akun_id){
        this.props.hapusAkunMutation({
          variables:{
            id: akun_id,
          },
          refetchQueries:[{query:getAkunsQuery},{query:getKaryawansQuery}]
        });
        NotificationManager.success('Data berhasil dihapus.', 'Notifikasi', 3000);
      
      }

  displayKaryawan(){
    var data = this.props.getKaryawansQuery;
    if(data.loading){
      return (<div>Loading Data Karyawan...</div>);
    } else {  // eslint-disable-next-line
      return data.karyawans.map(karyawan => {
        if (karyawan.getAkun === null){
            return(
                <option key={karyawan.id} value={karyawan.id}> {karyawan.nama} </option>
              );
        }
        
      });
    }
  }
  
  displayAkun(){
    var data = this.props.getAkunsQuery;
    var no = 0;
    if(data.loading){
      return
    } else {
      return data.akuns.map(akun => {
        no++;
        return(
          <tr key={akun.id}>
            <td>{no}</td>
            <td>{akun.username}</td>
            <td>{akun.password}</td>
            <td>{akun.karyawan.nama}</td>
            <td>
              
              <Button onClick={this.toggleModalEdit.bind(this, akun.id, akun.username, akun.password)} color="success" size="sm">
                <i className="fa fa-pencil"></i>
              </Button>
            
            </td>
            <td>
              <Button onClick={this.onDelete.bind(this, akun.id)} color="danger" size="sm">
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
                  <i className="fa fa-align-justify"></i> Daftar Akun
                </Col>
                <Col>
                  <Button size="sm" color="primary" className="float-right mb-0" onClick={this.toggleModal.bind(this)}>
                        <i className="fa fa-plus"></i> Tambah Akun
                    </Button>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
            
                <Table hover bordered striped responsive size="sm">
                  <thead align="center">
                  <tr>
                    <th>No</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Nama Karyawan</th>
                    <th colSpan="2">Aksi</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                  {this.displayAkun()}
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
          <ModalHeader>Form Tambah Data Akun</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitForm(e)}}>
            <FormGroup>
              <Label htmlFor="name">Username</Label>
              <Input type="text" placeholder="Username" onChange={(e) =>this.setState({username:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Password</Label>
              <Input type="password" onChange={(e) =>this.setState({password:e.target.value})} required />
            </FormGroup>
           
            <FormGroup>
              <Label htmlFor="name">Karyawan</Label>
              <Input type="select" onChange={(e) =>this.setState({karyawan_id:e.target.value})} required >
              <option value="">Pilih Karyawan</option>
              {this.displayKaryawan()}
              </Input>
            </FormGroup>
            
              <Button type="submit" color="primary">Submit</Button>
              <Button color="danger" onClick={this.toggleModal.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modalEditIsOpen}>
          <ModalHeader>Form Edit Data Akun</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitEditForm(e)}}>
            <FormGroup>
              <Label htmlFor="name">Username</Label>
              <Input type="text" defaultValue={this.state.username}  placeholder="Username" onChange={(e) =>this.setState({username:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Password Lama</Label>
              <Input type="password" onChange={(e) =>this.setState({password:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Password Baru</Label>
              <Input type="password" onChange={(e) =>this.setState({password_baru:e.target.value})} required />
            </FormGroup>
           
            
            
              <Button type="submit" color="primary">Submit</Button>
              <Button color="danger" onClick={this.toggleModalEdit.bind(this)}>Batal</Button>
            </Form>
          </ModalBody>
        </Modal>
        <NotificationContainer/>
      </div>

    );
  }
}


export default compose(
  graphql(getAkunsQuery, {name:"getAkunsQuery"}),
  graphql(addAkunMutation, {name:"addAkunMutation"}),
  graphql(hapusAkunMutation, {name:"hapusAkunMutation"}),
  graphql(editAkunMutation, {name:"editAkunMutation"}),
  graphql(getKaryawansQuery, {name:"getKaryawansQuery"}),
)(Akun);
