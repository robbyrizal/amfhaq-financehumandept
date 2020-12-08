export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },

    {
      title: true,
      name: 'Finance',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Transaksi',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Pemasukan',
          url: '/transaksi/pemasukan',
          icon: 'icon-pie-chart',
        },
        {
          name: 'Pengeluaran',
          url: '/transaksi/pengeluaran',
          icon: 'icon-pie-chart',
        },

      ],
    },  {
        name: 'Laporan',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Jurnal Umum',
            url: '/laporan/jurnalumum',
            icon: 'icon-pie-chart',
          },
          {
            name: 'Buku Besar',
            url: '/laporan/bukubesar',
            icon: 'icon-pie-chart',
          },
          {
            name: 'Neraca',
            url: '/laporan/neraca',
            icon: 'icon-pie-chart',
          },
        ],
      },
      {
        name: 'Data Master',
        url: '/base',
        icon: 'icon-puzzle',
        children: [

          {
            name: 'Akun Debit Kredit',
            url: '/datamaster/akundebitkredit',
            icon: 'icon-pie-chart',
          },
          {
            name: 'Aset Tetap',
            url: '/',
            icon: 'icon-pie-chart',
          },
          {
            name: 'Kategori Aset',
            url: '/',
            icon: 'icon-pie-chart',
          },
          {
            name: 'Klien Tagihan',
            url: '/datamaster/klientagihan',
            icon: 'icon-pie-chart',
          },
        ],
      },
      // {
      //   name: 'Pengaturan',
      //   url: '/order/listOrder',
      //   icon: 'icon-pie-chart',
      // },

    {
      title: true,
      name: 'Human Resource',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Data Karyawan',
      url: '/karyawan/datakaryawan',
      icon: 'icon-pie-chart',
    },

  ],
};
