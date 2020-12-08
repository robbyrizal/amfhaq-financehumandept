import React, { Component} from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,

} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'

const brandDanger = getStyle('--danger')
const brandSuccess = getStyle('--success')


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandDanger,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandSuccess,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};
 

// Card Chart 4 [Pemasukan dan Pengeluaran]
const cardChartData4 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt',
            'Sep', 'Okt', 'Nov', 'Des'],
  datasets: [
    {
      label: 'Pemasukan',
      backgroundColor: 'rgb(78,129,190)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68],
    },
    {
      label: 'Pengeluaran',
      backgroundColor: 'rgb(192,77,83)',
      borderColor: 'transparent',
      data: [72, 88, 89, 41, 39, 17, 49, 70, 39, 81, 38, 62],
    },
  ],
};

const cardChartOpts4 = {
  responsive: true,
  legend: {
    display: false,
  },
   scales: {
      xAxes: [{
         ticks: {
            fontColor: "black",
         }
      }],
      yAxes: [{
         ticks: {
            fontColor: "black",
         }
      }]
   }
};

// Card Chart - Grafik Laba Rugi
const labarugiChart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt',
            'Sep', 'Okt', 'Nov', 'Des'],
  datasets: [
    {
      label: 'Laba',
      fill: false,
      lineTension: 0,
      borderColor: "#3e95cd",
      data: [6, -7, -9, 4, -5, -5, -9, 5, -5, 8, -6, 6],
    },
  ],
};

const labarugiOpt = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },

      }],
    yAxes: [
      {
        ticks: {
          fontColor: "black",
          min: Math.min.apply(Math, labarugiChart.datasets[0].data) - 5,
          max: Math.max.apply(Math, labarugiChart.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
      backgroundColor: "#3e95cd",
    },
  },
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">5</div>
                <div>Transaksi Pemasukan Baru</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="6">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">3</div>
                <div>Transaksi Pengeluaran Baru</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

        </Row>


        <Row>
          <Col xs="12" sm="12" lg="6">
          <Card>
            <CardHeader>

                <i className="fa fa-align-justify"></i> Grafik Laba Rugi

            </CardHeader>
            <div className="chart-wrapper mx-3" style={{ height: '240px' }}>
              <Line data={labarugiChart} options={labarugiOpt} />
            </div>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
          <Card>
            <CardHeader>

                <i className="fa fa-align-justify"></i> Grafik Pemasukan dan Pengeluaran

            </CardHeader>

            <div className="chart-wrapper mx-3" style={{ height: '240px' }}>
              <Bar data={cardChartData4} options={cardChartOpts4} />
            </div>
            </Card>
          </Col>


        </Row>


      </div>
    );
  }
}

export default Dashboard;
