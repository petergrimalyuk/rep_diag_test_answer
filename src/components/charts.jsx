
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import {faker} from "@faker-js/faker";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

export var optionsexample = {
  responsive: true,
  
  plugins: {
    legend: {
      display: false,
      position: "top"
    },
    title: {
      display: false,
      text: 'Bar Chart',
    },
    datalabels: {
      display:false,
    }
  },
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        max:100,
        callback: function (value) {
          return (1 /100  * 100).toFixed(0) + '%'; // convert it to percentage
        },
      },
      display: false
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        max:100,
        callback: function (value) {
          return (1 /100  * 100).toFixed(0) + '%'; // convert it to percentage
        },
      },
      stacked: true,
      display: false

    }],
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false,
      }
    }
  },
  datalabels: {
    align: 'end',
    anchor: 'start'
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//const labels = data.labelschart;
const labelspie = ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
//const labelspie = data.labelspie;
export const ex_data = {
  labels: [''],
  datasets: [
    {
      type: 'bar',
      label: 'OEE',
      yAxisID: 'y0',
      backgroundColor: '#3B5D88',
      data: [25],
    },
    {
      type: 'bar',
      label: 'Operating Time',
      yAxisID: 'y1',
      backgroundColor: '#F8C119',
      data: [55],
    },
  ],
}
export const ex_conf= {
  
  options: {
    maintainAspectRatio: false,
    responsive: false,
    yAxes: {
      // Change here
    barPercentage: 0.1
  },
  xAxes: {
    barPercentage: 0.1
  }
},
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
      align: 'middle',
    },
     datalabels: {
        anchor: 'middle',
        align: 'middle',
        formatter: 0,
        color: '#fff',
        font: {
          size: 16, // Размер шрифта
        }
      },
  },
  scales: {
    x: {
      display: false,
    },
    y : {
      display: false,
    }    
  },


  }

export const datachart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgba(128, 194, 169, 1)',
      borderRadius:4,
      stack: 'Stack 0',
      barPercentage: 1

    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgba(244, 161, 115, 1)',
      borderRadius:4,
      stack: 'Stack 1',
      barPercentage: 1.1
      
    },
    
  ],
  
};

export var datapie = {
  labels: labelspie,
  datasets: [
    {
      label: 'Dataset 3',
      data: [133.3,133.3,133.3,133.3,133.3],
      backgroundColor:'rgba(53, 162, 235, 0.5)',
    }
  ]
}

export const datastacked = {
  
  labels: ['1'],
  datasets: [
    {
      axis: 'y',
      label: 'Dataset 1',
      data: [20],
      backgroundColor: 'rgba(128, 194, 169, 1)',
      stack: 'Stack 0',
      borderSkipped:false,
      borderRadius: 
        { topLeft: 10, bottomLeft: 10},
    barPercentage: 0.2
    },
    {
      fill: false,
      axis: 'y',
      label: 'Dataset 2',
      data: [60],
      backgroundColor: 'rgba(244, 161, 115, 1)',
      stack: 'Stack 0',
      borderSkipped:false,
      barPercentage: 0.2
    },
    {
      fill: false,
      axis: 'y',
      label: 'Dataset 3',
      data: [20],
      backgroundColor: 'rgba(237, 104, 136, 1)',
      stack: 'Stack 0',
      borderWidth: 0,
      borderRadius:10,
      barPercentage: 0.2
    },
  ]
}

export const configpie = {
  type: 'pie',
  data: datapie,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        align: 'start',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  },
}

export const configstacked = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      display: false,

      grid: {
        display: false,
     
      }
    },
    x: {
      display: false,

      grid: {
        display: false
      }
    }
  },
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
      align: 'middle',
    },
     datalabels: {
        anchor: 'middle',
        align: 'middle',
        formatter: 0,
        color: '#fff',
        font: {
          size: 16, // Размер шрифта
        }
      },
  },
};

export function ChartpieCreateData(labelsofpie,datasetofpie){
  console.log("DATASET PIE : ", labelsofpie)
  const datapie = {
    labels: labelsofpie,
    datasets: [
      {
        label: 'Dataset 1',
        data: datasetofpie,
        backgroundColor: [
          'rgba(182, 169, 209, 1)',
          'rgba(190, 197, 236, 1)',
          'rgba(198, 145, 223, 1)'
        ],
      }
    ]
  }
  return datapie
}
export function ChartpieCreateOption(datasetofpie){
  const configpie = {
    type: 'pie',
    data: datasetofpie,
    options: {
      responsive: false,  
  },
  plugins: {
    legend: {
      display: false,
      position: 'right',
      align: 'middle',
    },
    datalabels: {
      display:false,
    }
  },
  }
  return configpie
}
