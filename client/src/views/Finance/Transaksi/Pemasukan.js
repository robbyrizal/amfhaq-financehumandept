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
import { getClientsQuery,getProyeksQuery, getAkunDebitKreditsQuery} from '../queries/queries';
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
        jumlah_bayar: '',
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

  // getKodeBaru(){
  //   var newKode = 'INC-';
  //   var kodeku = '';
  //   var nomor = 1;
  //   var data = this.props.getPemasukansQuery; // eslint-disable-next-line
  //   data.pemasukans.map(request => {
  //     if(request.kode !== ''){
  //       kodeku = request.kode
  //     } 
  //   })
  //   if(kodeku !== ''){
  //     nomor = parseInt(kodeku.substring(4,7))+1
  //   }
  //   if(nomor < 10){
  //     kodeku = newKode+"00"+nomor;
  //   }else if (nomor >= 10 && nomor < 100){
  //     kodeku = newKode+"0"+nomor;
  //   }else {
  //     kodeku = newKode+""+nomor;
  //   }
  //   return kodeku;
  // }

  // submitForm(e){
  //   e.preventDefault();
  //   this.toggleModal();
  //   this.props.addPemasukanMutation({
  //     variables:{
  //       kode: this.getKodeBaru(),
  //       tanggal_transaksi: this.state.tanggal_transaksi,
  //       klientagihan_id: this.state.nama_vendor,
  //       keterangan: this.state.keterangan,
  //       jatuh_tempo: this.state.jatuh_tempo,
  //       akun_debit: this.state.akun_debit,
  //       akun_kredit: this.state.akun_kredit,
  //       jumlah_dana: parseInt(this.state.jumlah_dana),
  //       jumlah_bayar: parseInt(this.state.jumlah_bayar),
  //     },
  //     refetchQueries:[{query:getPemasukansQuery}]
  //   });
  // }

  // onDelete(pemasukan_id){
  //   this.props.hapusPemasukanMutation({
  //     variables:{
  //       id: pemasukan_id,
  //     },
  //     refetchQueries:[{query:getPemasukansQuery}],
  //   });
  // }

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

  // displayPemasukan(){
  //   var data = this.props.getPemasukansQuery;
  //   var no = 0;
  //   if(data.loading){
  //     return
  //   } else { // eslint-disable-next-line
  //     return data.pemasukans.map(pemasukan => {
        
  //         no++;
  //         return(
  //           <tr key={pemasukan.id}>
  //             <td>{no}</td>
  //             <td>{pemasukan.tanggal_transaksi}</td>
  //             <td>{pemasukan.keterangan}</td>
  //             <td>{pemasukan.kode}</td>
  //             <td>{pemasukan.jumlah_dana}</td>
  //             <td>{pemasukan.klien.nama}</td>
  //             <td>Tunai / Cicilan</td>
  //             <td>Lunas / Belum Lunas</td>
  //             <td>
  //               <Link to={`/pemasukan/editDataPemasukan/${pemasukan.id}`}>
  //               <Button color="success" size="sm">
  //                 <i className="fa fa-pencil"></i>
  //               </Button>
  //               </Link>
  //             </td>
  //             <td>
  //               <Button onClick={this.onDelete.bind(this, pemasukan.id)} color="danger" size="sm">
  //                 <i className="fa fa-trash"></i>
  //               </Button>
  //             </td>
  //           </tr>
  //         );
       
        
  //     });
  //   }
  // }

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
          harga = parseInt(proyek.budget)
        }
      });
    } 
    return harga;
    
  }
  

  render() {
    console.log(this.setTotalHarga());
    return (
      <div className="animated fadeIn">
        <Row>
           <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Pemasukan
                <Link to="/transaksi/buatPemasukan" className={'float-right mb-0'}>
                  <Button label color="primary">
                      <i className="fa fa-plus-square"></i> Buat Transaksi Pemasukan Baru
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal Transaksi</th>
                    <th>Kode Invoice</th>
                    <th>Klien</th>
                    <th>Tgl Jatuh Tempo</th>
                    <th>Status</th>
                    <th>Sisa Tagihan</th>
                    <th>Total</th>
                    <th>Aksi</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>01-02-2020</td>
                    <td>INC-001</td>
                    <td>AMF-HAQ</td>
                    <td>01-03-2020</td>
                    <td>Paid</td>
                    <td>0</td>
                    <td>200.000.000</td>
                    <td align="center"><Button type="Submit" size="sm" color="primary" ><i className="fa fa-pencil"></i></Button>
                     &nbsp; <Button type="Submit" size="sm" color="primary" ><i className="fa fa-trash"></i></Button></td>
                  </tr>
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
          <Form>
          <FormGroup>
                <Label htmlFor="name">Klien / Vendor</Label>
                <Input type="select" id="vendor" onChange={(e) =>this.setState({klien:e.target.value})} required >
                <option value="">Pilih Klien / Vendor</option>
                  {this.displayKlien()}
                </Input>
              </FormGroup>
          <FormGroup>
                <Label htmlFor="name">Nama Proyek</Label>
                <Input type="select" id="vendor" onChange={(e) =>this.setState({proyek:e.target.value})} required >
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
                <Input type="number" Value={this.setTotalHarga()} placeholder="Masukkan Jumlah Biaya" className="text-align-right" onChange={(e) =>this.setState({total_harga:e.target.value})} readOnly/> 
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              </FormGroup>
              <FormGroup>
              <Label htmlFor="name">Jumlah Terbayar</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp.</InputGroupAddon>
                <Input type="number" max={this.setTotalHarga()} placeholder="Masukkan Jumlah Terbayar" className="text-align-right" onChange={(e) =>this.setState({jumlah_bayar:e.target.value})} required />
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
                <Input type="select" name="akun_deb" id="akun_kre"  onChange={(e) =>this.setState({akun_debit:e.target.value})} required>
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
              </Form>
        </Row>
      </div>

    );
  }
}

export default compose(
  // graphql(getPemasukansQuery, {name:"getPemasukansQuery"}),
  graphql(getClientsQuery, {name:"getClientsQuery"}),
  graphql(getProyeksQuery, {name:"getProyeksQuery"}),
  // graphql(addPemasukanMutation, {name:"addPemasukanMutation"}),
  // graphql(hapusPemasukanMutation, {name:"hapusPemasukanMutation"}),
  graphql(getAkunDebitKreditsQuery, {name:"getAkunDebitKreditsQuery"}),
)(Pemasukan);
