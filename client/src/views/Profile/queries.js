import { gql } from "apollo-boost";

const getDivisisQuery = gql`
  {
    divisis {
      nama
      id
    }
  }
`;

const getAkunsQuery = gql`
  {
    akuns {
      username
      password
      karyawan {
        nama
        tanggal_lahir
        jenis_kelamin
        agama
        tempat_lahir
        alamat
        no_kontak
        email
        jabatan
        id
        divisi {
          nama
          id
        }
      }
      id
    }
  }
`;

const getKaryawansQuery = gql`
  {
    karyawans {
      nama
      tanggal_lahir
      jenis_kelamin
      agama
      tempat_lahir
      alamat
      no_kontak
      email
      jabatan
      divisi {
        nama
        id
      }
      id
    }
  }
`;

const hapusAkunMutation = gql`
  mutation ($id: ID!) {
    hapusAkun(id: $id) {
      id
    }
  }
`;

const addDivisiMutation = gql`
  mutation ($nama: String!) {
    addDivisi(nama: $nama) {
      nama
      id
    }
  }
`;

const hapusDivisiMutation = gql`
  mutation ($id: ID!) {
    hapusDivisi(id: $id) {
      nama
      id
    }
  }
`;

const addAkunMutation = gql`
  mutation ($username: String!, $password: String!, $karyawan_id: ID!) {
    addAkun(
      username: $username
      password: $password
      karyawan_id: $karyawan_id
    ) {
      username
      password
      id
    }
  }
`;
const addKaryawanMutation = gql`
  mutation (
    $nama: String!
    $jabatan: String!
    $alamat: String!
    $noHp: String!
    $avatar: String!
    $divisi_id: ID!
  ) {
    addKaryawan(
      nama: $nama
      jabatan: $jabatan
      alamat: $alamat
      noHp: $noHp
      avatar: $avatar
      divisi_id: $divisi_id
    ) {
      nama
      jabatan
      id
    }
  }
`;

const getAkunQuery = gql`
  query ($username: String!, $password: String!) {
    akun(username: $username, password: $password) {
      username
      password
      id
      karyawan {
        nama
        tanggal_lahir
        jenis_kelamin
        agama
        tempat_lahir
        alamat
        no_kontak
        email
        jabatan
        divisi {
          nama
          id
        }
        id
      }
    }
  }
`;

const editAkunMutation = gql`
  mutation ($id: ID, $username: String!, $password: String!) {
    editAkun(id: $id, username: $username, password: $password) {
      id
      username
      password
    }
  }
`;

const editBiodataKaryawanMutation = gql`
  mutation (
    $id: ID
    $nama: String!
    $tanggal_lahir: String!
    $jenis_kelamin: String!
    $agama: String!
    $tempat_lahir: String!
    $alamat: String!
    $no_kontak: String!
    $email: String!
  ) {
    editBiodataKaryawan(
      id: $id
      nama: $nama
      tanggal_lahir: $tanggal_lahir
      jenis_kelamin: $jenis_kelamin
      agama: $agama
      tempat_lahir: $tempat_lahir
      alamat: $alamat
      no_kontak: $no_kontak
      email: $email
    ) {
      id
      tempat_lahir
      tanggal_lahir
      jenis_kelamin
      agama
      nama
      alamat
      no_kontak
      email
    }
  }
`;

const uploadFotoMutation = gql`
  mutation ($foto: Upload!) {
    uploadFoto(foto: $foto) {
      url
    }
  }
`;
export {
  getDivisisQuery,
  addDivisiMutation,
  addKaryawanMutation,
  hapusDivisiMutation,
  getKaryawansQuery,
  addAkunMutation,
  getAkunQuery,
  getAkunsQuery,
  hapusAkunMutation,
  editAkunMutation,
  editBiodataKaryawanMutation,
  uploadFotoMutation,
};
