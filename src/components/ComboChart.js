import Chart from './Chart';

function ComboChart({ data, title, yAxis1Label, yAxis2Label, displayLegend = false }) {
  console.log('data in combo chart', data);
  const config = {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          type: 'line',
          label: yAxis1Label, // TODO: add label for first data
          data: data[0], // TODO: pass first data here
          yAxisID: 'yAxis1',
          fill: true, // not fill the area under the line
        },
        {
          type: 'bar',
          label: yAxis2Label, // TODO: add label for second data
          data: data[1], // TODO: pass second data here
          yAxisID: 'yAxis2',
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: title,
        },
        legend: {
          display: displayLegend,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              let rev = tooltipItem.raw;
              rev = rev.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
              return `${rev}%`;
            },
          },
        },
      },
      scales: {
        y: {
          display: false,
        },
        yAxis1: {
          display: true,
          position: 'left',
          title: {
            display: true,
            text: yAxis1Label,
          },
        },
        yAxis2: {
          display: true,
          position: 'right',
          title: {
            display: true,
            text: yAxis2Label,
          },
        },
      },
    },
  };

  return <Chart config={config}></Chart>;
}

export default ComboChart;
