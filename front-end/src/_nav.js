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
          name: 'Penjualan',
          url: '/transaksi/penjualan',
          icon: 'icon-puzzle',
        },
        {
          name: 'Pembelian',
          url: '/peralatan/pemeliharaan',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jurnal Umum',
          url: '/peralatan/pemeliharaan',
          icon: 'icon-puzzle',
        },
      ],
    },  {
        name: 'Laporan',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Buku Besar',
            url: '/peralatan/inventaris',
            icon: 'icon-puzzle',
          },
          {
            name: 'Neraca',
            url: '/peralatan/pemeliharaan',
            icon: 'icon-puzzle',
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
            url: '/peralatan/inventaris',
            icon: 'icon-puzzle',
          },
          {
            name: 'Aset Tetap',
            url: '/peralatan/pemeliharaan',
            icon: 'icon-puzzle',
          },
        ],
      },
      {
        name: 'Pengaturan',
        url: '/order/listOrder',
        icon: 'icon-pie-chart',
      },

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
      url: '/order/listOrder',
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
