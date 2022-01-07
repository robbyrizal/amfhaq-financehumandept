export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },

    {
      title: true,
      name: 'Finance Accounting',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Transaksi',
      url: '/base',
      icon: 'icon-wallet',
      children: [
        {
          name: 'Pemasukan',
          url: '/transaksi/pemasukan',
          icon: 'icon-credit-card',
        },
        {
          name: 'Pengeluaran',
          url: '/transaksi/pengeluaran',
          icon: 'icon-basket',
        },

      ],
    },  {
        name: 'Laporan',
        url: '/base',
        icon: 'icon-docs',
        children: [
          {
            name: 'Jurnal Umum',
            url: '/laporan/jurnalumum',
            icon: 'icon-doc',
          },
          {
            name: 'Buku Besar',
            url: '/laporan/bukubesar',
            icon: 'icon-doc',
          },
          {
            name: 'Neraca',
            url: '/laporan/neraca',
            icon: 'icon-doc',
          },
        ],
      },
     

  ],
};
