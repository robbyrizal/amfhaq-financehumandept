import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import {getKaryawansQuery, addKaryawanMutation, hapusKaryawanMutation,getDivisisQuery} from '../queries/queries';
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
      jenis_kelamin: '',
      agama: '',
    	tempat_lahir: '',
    	alamat: '',
    	no_kontak: '',
    	email: '',
      jabatan: '',
      divisi_id: '',
      gaji: 0,
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
        		tempat_lahir: this.state.tempat_lahir,
        		jenis_kelamin: this.state.jenis_kelamin,
        		agama: this.state.agama,
        		alamat: this.state.alamat,
        		no_kontak: this.state.no_kontak,
        		email: this.state.email,
            jabatan: this.state.jabatan,
            gaji: parseInt(this.state.gaji),
            divisi_id: this.state.divisi_id,
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

  displayDivisi(){
    var data = this.props.getDivisisQuery;
    if(data.loading){
      return (<div>Loading Data Divisi...</div>);
    } else {
      return data.divisis.map(divisi => {
        return(
          <option key={divisi.id} value={divisi.id}> {divisi.nama} </option>
        );
      });
    }
  }
  
  displayKaryawan(){
    var data = this.props.getKaryawansQuery;
    var no = 0;
    if(data.loading){
      return
    } else { // eslint-disable-next-line
      return data.karyawans.map(karyawan => {
        if(karyawan.jabatan !== "Admin"){
          no++;
          return(
            <tr key={karyawan.id}>
              <td>{no}</td>
              <td>{karyawan.nama}</td>
              <td>{karyawan.tanggal_lahir}</td>
              <td>{karyawan.jenis_kelamin}</td>
              <td>{karyawan.agama}</td>
              <td>{karyawan.alamat}</td>
              <td>{karyawan.no_kontak}</td>
              <td>{karyawan.email}</td>
              <td>{karyawan.jabatan}</td>
              <td>{karyawan.gaji}</td>
              <td>{karyawan.divisi.nama}</td>
              <td>
                <Link to={`/karyawan/editDataKaryawan/${karyawan.id}`}>
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
        }
        
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
                    <th>Alamat</th>
                    <th>No Kontak</th>
                    <th>Email</th>
                    <th>Jabatan</th>
                    <th>Gaji Harian</th>
                    <th>Divisi</th>
                    <th colSpan="2">Aksi</th>
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
              <Label htmlFor="name">Tempat Lahir</Label>
              <Input type="text" id="tempat_lahir" placeholder="Tempat Lahir"  onChange={(e) =>this.setState({tempat_lahir:e.target.value})} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Jenis Kelamin</Label>
              <Input type="select" id="jenis_kelamin" onChange={(e) =>this.setState({jenis_kelamin:e.target.value})} required >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Agama</Label>
              <Input type="select" id="agama" onChange={(e) =>this.setState({agama:e.target.value})} required >
                <option value="">Pilih Agama</option>
                <option value="Islam">Islam</option>
                <option value="Budha">Budha</option>
                <option value="Hindu">Hindu</option>
                <option value="Katolik">Katolik</option>
                <option value="Kristen">Kristen</option>
              </Input>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="name">Alamat</Label>
              <Input type="text" id="alamat" placeholder="Alamat" onChange={(e) =>this.setState({alamat:e.target.value})} required />
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
                <option value="">Pilih Jabatan</option>
                <option value="Manajer">Manajer</option>
                <option value="Staff">Staff</option>
                <option value="Teknisi">Teknisi</option>
                <option value="Akuntan">Akuntan</option>
                <option value="Pekerja">Pekerja</option>
                <option value="Pekerja Ahli">Pekerja Ahli</option>
                <option value="Asisten Pekerja">Asisten Pekerja</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Divisi</Label>
              <Input type="select" id="divisi" onChange={(e) =>this.setState({divisi_id:e.target.value})} required >
              <option value="">Pilih Divisi</option>
              {this.displayDivisi()}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Gaji</Label>
              <Input type="number" id="gaji" placeholder="Gaji" onChange={(e) =>this.setState({gaji:e.target.value})} required />
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
  graphql(hapusKaryawanMutation, {name:"hapusKaryawanMutation"}),
  graphql(getDivisisQuery, {name:"getDivisisQuery"}),
)(DataKaryawan);
