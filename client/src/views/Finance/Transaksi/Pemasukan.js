import React, { Component } from 'react';
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
  InputGroupAddon,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getClientsQuery,getProyeksQuery, getAkunDebitKreditsQuery, 
  getPemasukansQuery, addPemasukanMutation,} from '../queries/queries';
import './index.css';

class Pemasukan extends Component {
  constructor(props) {
    super(props);
    
    var curr = new Date();
    var date = curr.toISOString().substr(0,10);
    curr.setDate(curr.getDate() + 30);
    var tempo = curr.toISOString().substr(0,10);
    this.state = {
        kode: '',
				tanggal_transaksi: date,
				klien: '',
				proyek: '',
				keterangan: '',
				jatuh_tempo: tempo,
				total_harga: '',
        dana_diterima: '',
        akun_debit: '',
				akun_kredit: '',
      modalIsOpen: false,
    };
  }

  toggleModal(){
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    });
  }

  getKodeBaru(){
    var newKode = 'INC-';
    var kodeku = '';
    var nomor = 1;
    var data = this.props.getPemasukansQuery; // eslint-disable-next-line
    data.pemasukans.map(request => {
      if(request.kode !== ''){
        kodeku = request.kode
      } 
    })
    if(kodeku !== ''){
      nomor = parseInt(kodeku.substring(4,7))+1
    }
    if(nomor < 10){
      kodeku = newKode+"00"+nomor;
    }else if (nomor >= 10 && nomor < 100){
      kodeku = newKode+"0"+nomor;
    }else {
      kodeku = newKode+""+nomor;
    }
    return kodeku;
  }

  submitForm(e){
    e.preventDefault();
    this.toggleModal();
    // this.setState({total_harga:e.target.total_hargaF.value});
    this.props.addPemasukanMutation({
      variables:{
        kode: this.getKodeBaru(),
        tanggal_transaksi: this.state.tanggal_transaksi,
        klien_id: this.state.klien,
        proyek_id: this.state.proyek,
        keterangan: this.state.keterangan,
        jatuh_tempo: this.state.jatuh_tempo,
        akun_debit: this.state.akun_debit,
        akun_kredit: this.state.akun_kredit,
        total_harga: parseInt(e.target.total_hargaF.value),
        dana_diterima: parseInt(this.state.dana_diterima),
      },
      refetchQueries:[{query:getPemasukansQuery}]
    });
    // console.log(parseInt(this.state.total_harga));
    // console.log(e.target.total_hargaF.value) 
  }

  onDelete(pemasukan_id){
    this.props.hapusPemasukanMutation({
      variables:{
        id: pemasukan_id,
      },
      refetchQueries:[{query:getPemasukansQuery}],
    });
  }

  displayAkunDebit(){
    var data = this.props.getAkunDebitKreditsQuery;
    if(data.loading){
      return (<div>Loading Data Divisi...</div>);
    } else {
      return data.akundebitkredits.map(akundebitkredit => {
       
          return(
            <option key={akundebitkredit.id} value={akundebitkredit.id}> {akundebitkredit.nama_akun} </option>
          );
         
        

      });
    }
  }

  displayAkunKredit(){
    var data = this.props.getAkunDebitKreditsQuery;
    if(data.loading){
      return (<div>Loading Data Divisi...</div>);
    } else {
      return data.akundebitkredits.map(akundebitkredit => {
       
          return(
            <option key={akundebitkredit.id} value={akundebitkredit.id}> {akundebitkredit.nama_akun} </option>
          );
       
      });
    }
  }

  displayPemasukan(){
    var data = this.props.getPemasukansQuery;
    var no = 0;
    if(data.loading){
      return
    } else { // eslint-disable-next-line
      return data.pemasukans.map(pemasukan => {
        
          no++;
          return(
            <tr key={pemasukan.id}>
              <td>{no}</td>
              <td>{pemasukan.tanggal_transaksi}</td>
              <td>{pemasukan.klien.nama}</td>
              <td>{pemasukan.proyek.nama}</td>
              <td>{pemasukan.kode}</td>
              <td>{pemasukan.keterangan}</td>
              <td>{pemasukan.total_harga}</td>
              <td>Tunai / Cicilan</td>
              <td>Lunas / Belum Lunas</td>
              <td>
                <Link to={`/pemasukan/editDataPemasukan/${pemasukan.id}`}>
                <Button color="success" size="sm">
                  <i className="fa fa-pencil"></i>
                </Button>
                </Link>
              </td>
              <td>
                <Button onClick={this.onDelete.bind(this, pemasukan.id)} color="danger" size="sm">
                  <i className="fa fa-trash"></i>
                </Button>
              </td>
            </tr>
          );
       
        
      });
    }
  }

  displayKlien(){
    var data = this.props.getClientsQuery;
    if(data.loading){
      return (<div>Loading Data Klien...</div>);
    } else {
      return data.clients.map(client => {
        return(
          <option key={client.id} value={client.id}> {client.nama} </option>
        );
      });
    };
  }

  displayProyek(){
    var klien = this.state.klien;
    var data = this.props.getProyeksQuery;
    if(data.loading){
      return (<div>Loading Data Proyek...</div>);
    } else {
      return data.proyeks.map(proyek => {
        if(klien === '' || proyek.client.id === klien){
          return(
            <option key={proyek.id} value={proyek.id}> {proyek.nama} </option>
          );
        }
      });
    }  
  }

  setTotalHarga(){
    var harga = 0;
    var data = this.props.getProyeksQuery;
    if(data.loading){
      return (<div>Loading Data Proyek...</div>);
    } else {
      data.proyeks.map(proyek => {
        if( proyek.id === this.state.proyek){
          harga = parseInt(proyek.budget);
        }
      });
    } 
    return harga;
    
  }
  

  render() {
    
    return (
      <div className="animated fadeIn">
        <Row>
           <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Pemasukan
                <Button size="sm" color="primary" className="float-right mb-0" onClick={this.toggleModal.bind(this)}>
                        <i className="fa fa-plus-square"></i> Buat Transaksi Pemasukan Baru
                    </Button>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal Transaksi</th>
                    <th>Klien</th>
                    <th>Proyek</th>
                    <th>Kode Invoice</th>
                    <th>Keterangan</th>
                    <th>Nilai</th>
                    <th>Tipe Pembayaran</th>
                    <th>Status</th>
                    <th colSpan="2">Aksi</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.displayPemasukan()}
                  
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
          <ModalHeader>Form Tambah Data Pemasukan</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitForm(e)}}>
          <FormGroup>
                <Label htmlFor="name">Klien / Vendor</Label>
                <Input type="select" id="vendor" onChange={(e) =>this.setState({klien:e.target.value})} required >
                <option value="">Pilih Klien / Vendor</option>
                  {this.displayKlien()}
                </Input>
              </FormGroup>
          <FormGroup>
                <Label htmlFor="name">Nama Proyek</Label>
                <Input type="select" id="proyek" onChange={(e) =>this.setState({proyek:e.target.value})} required >
                <option value="">Pilih Proyek</option>
                  {this.displayProyek()}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Keterangan</Label>
                <Input type="textarea" name="Keterangan" id="keterangan" placeholder="Keterangan"  onChange={(e) =>this.setState({keterangan:e.target.value})} required >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Total Harga</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                <Input type="number" name="total_hargaF" Value={this.setTotalHarga()} placeholder="Masukkan Jumlah Biaya" className="text-align-right" readOnly/> 
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              </FormGroup>
              <FormGroup>
              <Label htmlFor="name">Dana Diterima</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                <Input type="number" max={this.setTotalHarga()} placeholder="Masukkan Dana Diterima" className="text-align-right" onChange={(e) =>this.setState({dana_diterima:e.target.value})} required />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Tanggal Transaksi</Label>
                <Input type="date" defaultValue={this.state.tanggal_transaksi} id="tgltrans" placeholder="Masukkan Tanggal Transaksi"  onChange={(e) =>this.setState({tanggal_transaksi:e.target.value})} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Jatuh Tempo</Label>
                <Input type="date" defaultValue={this.state.jatuh_tempo} id="jatuh_tempo" placeholder="Masukkan Tanggal Jatuh Tempo"  onChange={(e) =>this.setState({jatuh_tempo:e.target.value})} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Akun Debit</Label>
                <Input type="select" name="akun_deb" id="akun_deb"  onChange={(e) =>this.setState({akun_debit:e.target.value})} required>
                <option value="">Pilih Akun Debit</option>
                  {this.displayAkunDebit()}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Akun Kredit</Label>
                <Input type="select" name="akun_kre" id="akun_kre"  onChange={(e) =>this.setState({akun_kredit:e.target.value})} required>
                <option value="">Pilih Akun Kredit</option>
                  {this.displayAkunKredit()}
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
  graphql(getPemasukansQuery, {name:"getPemasukansQuery"}),
  graphql(getClientsQuery, {name:"getClientsQuery"}),
  graphql(getProyeksQuery, {name:"getProyeksQuery"}),
  graphql(addPemasukanMutation, {name:"addPemasukanMutation"}),
  // graphql(hapusPemasukanMutation, {name:"hapusPemasukanMutation"}),
  graphql(getAkunDebitKreditsQuery, {name:"getAkunDebitKreditsQuery"}),
)(Pemasukan);
