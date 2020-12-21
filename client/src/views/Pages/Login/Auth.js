import React, { Component} from 'react';
import {
  Button,
  Container,
  Card,
  CardGroup,
  CardBody,
  Col,
  Row,

} from 'reactstrap';
import {graphql} from 'react-apollo';
import { getAkunQuery } from '../../HumanResource/queries/queries';
import { Redirect, Link } from 'react-router-dom';


class Auth extends Component {

  isLogin(){
    const {akun} = this.props.data;
    if(akun){
      localStorage.setItem("username", akun.username);
      localStorage.setItem("password", akun.password);
      localStorage.setItem("user_id", akun.id);
      localStorage.setItem("nama", akun.karyawan.nama);
      localStorage.setItem("tempat_lahir", akun.karyawan.tempat_lahir);
      localStorage.setItem("tanggal_lahir", akun.karyawan.tanggal_lahir);
      localStorage.setItem("jenis_kelamin", akun.karyawan.jenis_kelamin);
      localStorage.setItem("agama", akun.karyawan.agama);
      localStorage.setItem("no_kontak", akun.karyawan.no_kontak);
      localStorage.setItem("email", akun.karyawan.email);
      localStorage.setItem("jabatan", akun.karyawan.jabatan);
      localStorage.setItem("alamat", akun.karyawan.alamat);
      localStorage.setItem("karyawan_id", akun.karyawan.id);
      localStorage.setItem("divisi", akun.karyawan.divisi.nama);
      localStorage.setItem("divisi_id", akun.karyawan.divisi.id);
      return(
        <Redirect to="/dashboard" />
      )
    } else {
      return (
        <div className="app flex-row align-items-center filkom-login">
          
          <Container>
            <Row className="justify-content-center">
              <Col md="5">
                <CardGroup>
                  <Card className="p-4 bg-wheat">
                    <CardBody className="text-center">
                      <h1 className="text-center">AMF-HAQ</h1>
                      <p className="text-muted text-center">Username atau Password Anda Salah</p>
                      <Link to="/login" >
                        <Button color="dark" >Coba Lagi</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  render() { // eslint-disable-next-line
    
    return(
      <div>
        {this.isLogin()}
      </div>
      
    );
  }
}

export default graphql(getAkunQuery, {
    options:(props) => {
      return{
        variables:{
          username: props.match.params.username,
          password: props.match.params.password
        }
      }
    }
  })(Auth);