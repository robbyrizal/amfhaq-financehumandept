export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Request',
      url: '/request/request',
      icon: 'icon-speedometer',
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
      name: 'Material',
      url: '/material/stock',
      icon: 'icon-puzzle',
    },
    {
      name: 'Peralatan',
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
