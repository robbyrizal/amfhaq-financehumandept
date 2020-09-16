export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
      {
      name: 'My Dashboard',
      url: '/dashboardLogistik/dashboardLogistik',
      icon: 'icon-speedometer',
    },
    {
      name: 'Permintaan Barang',
      url: '/request/request',
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
          name: 'Pengeluaran',
          url: '/transaksi/pengeluaran',
          icon: 'icon-pie-chart',
        },
        {
          name: 'Pemasukan',
          url: '/transaksi/pemasukan',
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
            name: 'Kategori Aset',
            url: '#',
            icon: 'icon-pie-chart',
          },
          {
            name: 'Aset Tetap',
            url: '#',
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


    {
      title: true,
      name: 'Logistic',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Data Barang',
      url: '/barang/barang',
      icon: 'icon-puzzle',
    },
    {
      name: 'Data Peralatan',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Inventaris',
          url: '/peralatan/inventaris',
          icon: 'icon-puzzle',
        },
        {
          name: 'Pemeliharaan',
          url: '/peralatan/pemeliharaan',
          icon: 'icon-puzzle',
        },
      ],
    },

    {
      title: true,
      name: 'Purchasing',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Order',
      url: '/order/listOrder',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Purchase Order',
          url: '/order/listOrder',
          icon: 'icon-puzzle',
        },
        {
          name: 'Penerimaan Barang',
          url: '/order/penerimaanBarang',
          icon: 'icon-puzzle',
        },
        {
          name: 'Pengambilan Barang',
          url: '/order/pengambilanBarang',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Vendor',
      url: '/vendor/listVendor',
      icon: 'icon-home',
    },
    {
      name: 'test',
      url: '/offer/offerRoom',
      icon: 'icon-home',
    },



  ],
};
