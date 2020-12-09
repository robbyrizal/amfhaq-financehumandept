import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import {getKaryawansQuery,getKaryawanQuery,getDivisisQuery,updateKaryawanMutation} from '../queries/queries';

import {

  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
  Row,
  FormGroup,
  Label,
  Input,
  Form
} from 'reactstrap';


class EditDataKaryawan extends Component {
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
    };
  }

  submitForm(e){
    const {karyawan} = this.props.data;
    var namaF= '';
    var	tanggal_lahirF= '';
    var jenis_kelaminF= '';
    var agamaF= '';
    var	tempat_lahirF= '';
    var	alamatF= '';
    var	no_kontakF= '';
    var	emailF= '';
    var jabatanF= '';
    var divisi_idF= '';
    

    if (this.state.nama === ''){
      namaF = karyawan.nama
    } else {
      namaF = this.state.nama
    }
    if (this.state.jenis_kelamin === ''){
      jenis_kelaminF = karyawan.jenis_kelamin
    } else {
      jenis_kelaminF = this.state.jenis_kelamin
    }
    if (this.state.tanggal_lahir === ''){
      tanggal_lahirF = karyawan.tanggal_lahir
    } else {
      tanggal_lahirF = this.state.tanggal_lahir 
    }
    if (this.state.agama === ''){
      agamaF = karyawan.agama
    } else {
      agamaF = this.state.agama
    }
    if (this.state.tempat_lahir === ''){
      tempat_lahirF = karyawan.tempat_lahir
    } else {
      tempat_lahirF = this.state.tempat_lahir
    }
    if (this.state.alamat === ''){
      alamatF = karyawan.alamat
    } else {
      alamatF = this.state.alamat
    }
    if (this.state.no_kontak === ''){
      no_kontakF = karyawan.no_kontak
    } else {
      no_kontakF = this.state.no_kontak
    }
    if (this.state.email === ''){
      emailF = karyawan.email
    } else {
      emailF = this.state.email
    }
    if (this.state.jabatan === ''){
      jabatanF = karyawan.jabatan
    } else {
      jabatanF = this.state.jabatan
    }
    if (this.state.divisi_id === ''){
      divisi_idF = karyawan.divisi.id
    } else {
      divisi_idF = this.state.divisi_id
    }

    let lastAtPos = emailF.lastIndexOf('@');
    let lastDotPos = emailF.lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emailF.indexOf('@@') === -1 && lastDotPos > 2 && (emailF.length - lastDotPos) > 2)) {
      alert("Email is not valid")
    } else {
      this.props.updateKaryawanMutation({
        variables:{
          id:this.props.match.params.id,
          nama: namaF,
          tanggal_lahir:tanggal_lahirF,
          jenis_kelamin: jenis_kelaminF,
          agama: agamaF,
          tempat_lahir: tempat_lahirF,
          alamat: alamatF,
          no_kontak: no_kontakF,
          email: emailF,
          jabatan: jabatanF,
          divisi_id: divisi_idF,
        },
        refetchQueries:[{query:getKaryawansQuery}],
      });
      this.props.history.push("/karyawan/datakaryawan");
    }

    
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
    const {karyawan} = this.props.data;
   
    if(karyawan){
       return(
         <Form onSubmit={(e) => {this.submitForm(e)}}>
        <FormGroup>
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input type="text" defaultValue={karyawan.nama} id="nama_karyawan" placeholder="Nama Lengkap" onChange={(e) =>this.setState({nama:e.target.value})} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Tanggal Lahir</Label>
        <Input type="date" defaultValue={karyawan.tanggal_lahir}  id="tanggal_lahir" onChange={(e) =>this.setState({tanggal_lahir:e.target.value})} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Tempat Lahir</Label>
        <Input type="text" defaultValue={karyawan.tempat_lahir}  id="tempat_lahir" placeholder="Tempat Lahir"  onChange={(e) =>this.setState({tempat_lahir:e.target.value})} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Jenis Kelamin</Label>
        <Input type="select" defaultValue={karyawan.jenis_kelamin}  id="jenis_kelamin" onChange={(e) =>this.setState({jenis_kelamin:e.target.value})} required >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Agama</Label>
        <Input type="select" defaultValue={karyawan.agama}  id="agama" onChange={(e) =>this.setState({agama:e.target.value})} required >
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
        <Input type="text" defaultValue={karyawan.alamat}  id="alamat" placeholder="Alamat" onChange={(e) =>this.setState({alamat:e.target.value})} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">No Kontak</Label>
        <Input type="text" defaultValue={karyawan.no_kontak}  id="no_kontak" placeholder="No Kontak" onChange={(e) =>this.setState({no_kontak:e.target.value})} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Email</Label>
        <Input type="email" defaultValue={karyawan.email}  id="email" placeholder="Alamat Email"  onChange={(e) =>this.setState({email:e.target.value})} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Jabatan</Label>
        <Input type="select" defaultValue={karyawan.jabatan}  id="jabatan" onChange={(e) =>this.setState({jabatan:e.target.value})} required >
          <option value="">Pilih Jabatan</option>
          <option value="Manajer">Manajer</option>
          <option value="Staff">Staff</option>
          <option value="Teknisi">Teknisi</option>
          <option value="Akuntan">Akuntan</option>
          <option value="Karyawan Tetap">Karyawan Tetap</option>
          <option value="Karyawan Kontrak">Karyawan Kontrak</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Divisi</Label>
        <Input type="select" defaultValue={karyawan.divisi.id}  id="divisi" onChange={(e) =>this.setState({divisi_id:e.target.value})} required >
        <option value="">Pilih Divisi</option>
        {this.displayDivisi()}
        </Input>
      </FormGroup>
             
      </Form>
       )
      }
    };
  render() {
    return (
      <div className="animated fadeIn">
        <Row>

          <Col>
            <Card>
              <CardHeader>
                Tambah Karyawan Baru
                <Link to="/karyawan/datakaryawan" className={'float-right mb-0'}>
                  <Button label color="danger">
                      Batal
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
              {this.displayKaryawan()}
              
                  <Button type="submit" color="primary" className={'float-right mb-0'} onClick={(e) => {this.submitForm(e)}} >Submit</Button>
                 
                
                
                </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default compose(withRouter,
  graphql(getKaryawanQuery, {
    options:(props) => {
      return{
        variables:{
          id: props.match.params.id
        }
      }
    }
  }),
  graphql(getKaryawansQuery, {name:"getKaryawansQuery"}),
  graphql(updateKaryawanMutation, {name:"updateKaryawanMutation"}),
  graphql(getDivisisQuery, {name:"getDivisisQuery"}),
)(EditDataKaryawan);
