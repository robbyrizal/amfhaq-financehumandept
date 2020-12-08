import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import {getKaryawansQuery, addKaryawanMutation, hapusKaryawanMutation} from '../queries/queries';
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

class DataKaryawan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
    	tanggal_lahir: '',
      jenis_kelamin: 'Pria',
      agama: 'Islam',
    	kota_asal: '',
    	domisili: '',
    	no_kontak: '',
    	email: '',
      jabatan: 'HRD Staff',
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
        this.props.addKaryawanMutation({
          variables:{
            nama: this.state.nama,
        		tanggal_lahir: this.state.tanggal_lahir,
        		jenis_kelamin: this.state.jenis_kelamin,
        		agama: this.state.agama,
        		kota_asal: this.state.kota_asal,
        		domisili: this.state.domisili,
        		no_kontak: this.state.no_kontak,
        		email: this.state.email,
        		jabatan: this.state.jabatan
          },
          refetchQueries:[{query:getKaryawansQuery}]
        });
      }

      onDelete(karyawan_id){
        this.props.hapusKaryawanMutation({
          variables:{
            id: karyawan_id,
          },
          refetchQueries:[{query:getKaryawansQuery}],
        });
      }

  displayKaryawan(){
    var data = this.props.getKaryawansQuery;
    var no = 0;
    if(data.loading){
      return (<div>Loading Daftar Karyawan...</div>);
    } else {
      return data.karyawans.map(karyawan => {
        no++;
        return(
          <tr>
            <td key={karyawan.id}>{no}</td>
            <td key={karyawan.id}>{karyawan.nama}</td>
            <td key={karyawan.id}>{karyawan.tanggal_lahir}</td>
            <td key={karyawan.id}>{karyawan.jenis_kelamin}</td>
            <td key={karyawan.id}>{karyawan.agama}</td>
            <td key={karyawan.id}>{karyawan.kota_asal}</td>
            <td key={karyawan.id}>{karyawan.domisili}</td>
            <td key={karyawan.id}>{karyawan.no_kontak}</td>
            <td key={karyawan.id}>{karyawan.email}</td>
            <td key={karyawan.id}>{karyawan.jabatan}</td>
            <td key={karyawan.id}>
              <Link to={`/karyawan/editKaryawan/${karyawan.id}`}>
              <Button color="success" size="sm">
                <i className="fa fa-pencil"></i>
              </Button>
              </Link>
            </td>
            <td>
              <Button onClick={this.onDelete.bind(this, karyawan.id)} color="danger" size="sm">
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
                  <i className="fa fa-align-justify"></i> Daftar Karyawan
                </Col>
                <Col>
                  <Button size="sm" color="primary" className="float-right mb-0" onClick={this.toggleModal.bind(this)}>
                        <i className="fa fa-plus"></i> Tambah Data Karyawan
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
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>Agama</th>
                    <th>Kota Asal</th>
                    <th>Domisili Sekarang</th>
                    <th>No Kontak</th>
                    <th>Email</th>
                    <th>Jabatan</th>
                    <th colspan="2">Aksi</th>
                  </tr>
                  </thead>
                  <tbody align="center">
                  {this.displayKaryawan()}
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
          <ModalHeader>Form Tambah Data Karyawan</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitForm(e)}}>
            <FormGroup>
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input type="text" id="nama_karyawan" placeholder="Nama Lengkap" onChange={(e) =>this.setState({nama:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Tanggal Lahir</Label>
              <Input type="date" id="tanggal_lahir" onChange={(e) =>this.setState({tanggal_lahir:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Jenis Kelamin</Label>
              <Input type="select" id="jenis_kelamin" onChange={(e) =>this.setState({jenis_kelamin:e.target.value})} required >
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Agama</Label>
              <Input type="select" id="agama" onChange={(e) =>this.setState({agama:e.target.value})} required >
                <option value="Islam">Islam</option>
                <option value="Budha">Budha</option>
                <option value="Hindu">Hindu</option>
                <option value="Katolik">Katolik</option>
                <option value="Kristen">Kristen</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Kota Asal</Label>
              <Input type="text" id="kota_asal" placeholder="Kota Asal"  onChange={(e) =>this.setState({kota_asal:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Domisili Sekarang</Label>
              <Input type="text" id="domisili" placeholder="Domisili Sekarang" onChange={(e) =>this.setState({domisili:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">No Kontak</Label>
              <Input type="text" id="no_kontak" placeholder="No Kontak" onChange={(e) =>this.setState({no_kontak:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Email</Label>
              <Input type="email" id="email" placeholder="Alamat Email"  onChange={(e) =>this.setState({email:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Jabatan</Label>
              <Input type="select" id="jabatan" onChange={(e) =>this.setState({jabatan:e.target.value})} required >
                <option value="HRD Staff">HRD Staff</option>
                <option value="Akuntan Staff">Akuntan Staff</option>
                <option value="Karyawan Tetap">Karyawan Tetap</option>
                <option value="Karyawan Kontrak">Karyawan Kontrak</option>
              </Input>
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
  graphql(getKaryawansQuery, {name:"getKaryawansQuery"}),
  graphql(addKaryawanMutation, {name:"addKaryawanMutation"}),
  graphql(hapusKaryawanMutation, {name:"hapusKaryawanMutation"})
)(DataKaryawan);
