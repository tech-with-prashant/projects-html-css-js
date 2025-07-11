const options = {
  chart: {
    type: 'bar',
    height: 400,
    stacked: true,
    toolbar: { show: false },
  },
  series: [
    {
      name: 'Earning',
      data:[270, 210, 180, 200, 250, 280, 250, 270, 150],
    },
    {
      name: 'Expense',
      data: [-140, -160, -180, -150, -110, -70, -90, -110, -180],
    },
  ],
  colors: ['#7A6FF0', '#FFA94D'],
  plotOptions: {
    bar: {
      horizontal: !1,
      columnWidth: '40%',
      borderRadius: 10,
      startingShape: 'rounded',
      endingShape: 'rounded',
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },
    tooltip: {
    enabled: !1,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      style: {
        colors: '#aaa',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#aaa',
      },
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    markers: {
      radius: 12,
    }, 
    fontSize: '13px',
    markers: {
      size: 6,
      offsetX: -3,
      shape: 'circle',
      strokeWidth: 0,
    },
   
    itemMargin: {
      horizontal: 10,
      vertical: 2,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 6,
    lineCap: 'round',
    colors: ['#ffffff'],
  },
  grid: {
    show: false,
  },
};

const chart = new ApexCharts(document.querySelector('#bar-chart'), options);
chart.render();