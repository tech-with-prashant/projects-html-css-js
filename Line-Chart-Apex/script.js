var chartOptions = {
  chart: {
    height: 400,
    type: 'line',
    fontFamily: 'Helvetica, Arial, sans-serif',
    foreColor: '#6E729B',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  series: [
    {
      name: 'Music',
      data: [1, 15, 26, 20, 33, 27],
    },
    {
      name: 'Photos',
      data: [3, 33, 21, 42, 19, 32],
    },
    {
      name: 'Files',
      data: [0, 39, 52, 11, 29, 43],
    },
  ],
  title: {
    text: 'Media',
    align: 'left',
    offsetY: 25,
    offsetX: 5,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#373d3f',
    },
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -10,
    labels: {
      colors: '#373d3f',
    },
  },
  grid: {
    borderColor: '#D9DBF3',
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var lineChart = new ApexCharts(document.querySelector('#line-chart'), chartOptions);
lineChart.render();
