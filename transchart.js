
import { AMrawData } from "./json/monthly/amazon_monthly.js";
import { APMrawData } from "./json/monthly/apple_monthly.js";
import { MMrawData } from "./json/monthly/meta_monthly.js";
import { MSMrawData } from "./json/monthly/msft_monthly.js";
import { GMrawData } from "./json/monthly/google_monthly.js";
import { TMrawData } from "./json/monthly/tesla_monthly.js";

const Ldata = {
    labels: [],
    datasets: [
      {
        label: 'Closing Prices',
        backgroundColor: 'rgba(212, 40, 5, 1)',
        borderColor: 'rgba(212, 40, 5, 1)',
        borderWidth: 3,
        close: [],
        volume: [],
      },
    ],
  };
  
  function convertDateFormat(dateStr) {
    const dateObj = new Date(dateStr);
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${month}, ${year}`;
}
// Extract data from the raw data and populate the "data" object

  Object.keys(TMrawData['Monthly Adjusted Time Series']).forEach((date) => {
    Ldata.labels.push(convertDateFormat(date));
    Ldata.datasets[0].close.push(parseFloat(TMrawData['Monthly Adjusted Time Series'][date]['4. close']));
    Ldata.datasets[0].volume.push(parseFloat(TMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/100000000)
  });
// Get the canvas element
const ct = document.getElementById('teslaLine').getContext('2d');
const tp=document.querySelector('.card h2')


// Create the bar chart
const barChart = new Chart(ct, {
    type: 'line',
    data: {
      labels: Ldata.labels,
      datasets: [{
        label: '',
        data: Ldata.datasets[0].close.reverse(),
        backgroundColor: 'rgba(212, 40, 5, 1)',
          borderColor: 'rgba(212, 40, 5, 1)', // Line color
          borderWidth: 3,
          fill: false, // Do not fill the area under the line
          
        
      }]
    },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false // Hide X-axis grid lines
                    },
                    color: "white", // Set X-axis scale color
                    ticks: {
                        color: "white" // Set X-axis tick color
                    }
                },
                y: {
                    grid: {
                        display: false // Hide Y-axis grid lines
                    },
                    color: "white", // Set Y-axis scale color
                    ticks: {
                        color: "white" // Set Y-axis tick color
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: "white" // Hide label color
                    }
                }
            },
            elements:{
              point:{
                  radius:0,
              }
            }
        }
  });
// CHART FOR MICROSOFT
const Mdata = {
  labels: [],
  datasets: [
    {
      label: 'Closing Prices',
      backgroundColor: 'rgba(212, 40, 5, 1)',
      borderColor: 'rgba(212, 40, 5, 1)',
      borderWidth: 3,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object

Object.keys(MSMrawData['Monthly Adjusted Time Series']).forEach((date) => {
  Mdata.labels.push(convertDateFormat(date));
  Mdata.datasets[0].close.push(parseFloat(MSMrawData['Monthly Adjusted Time Series'][date]['4. close']));
  Mdata.datasets[0].volume.push(parseFloat(MSMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/100000000)
});

// Get the canvas element
const mt = document.getElementById('msftLine').getContext('2d');

// Create the bar chart
const MChart = new Chart(mt, {
  type: 'line',
  data: {
    labels: Mdata.labels,
    datasets: [{
      label: '',
      data: Mdata.datasets[0].close.reverse(),
      backgroundColor: 'rgba(212, 40, 5, 1)',
        borderColor: 'rgba(212, 40, 5, 1)', // Line color
        borderWidth: 3,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "white", // Set X-axis scale color
                  ticks: {
                      color: "white" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "white", // Set Y-axis scale color
                  ticks: {
                      color: "white" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "white" // Hide label color
                  }
              }
          },
          elements:{
            point:{
                radius:0,
            }
          }
      }
});

// CHART FOR AMAZON
const Adata = {
  labels: [],
  datasets: [
    {
      label: 'Closing Prices',
      backgroundColor: 'rgba(212, 40, 5, 1)',
      borderColor: 'rgba(212, 40, 5, 1)',
      borderWidth: 3,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object

Object.keys(AMrawData['Monthly Adjusted Time Series']).forEach((date) => {
  Adata.labels.push(convertDateFormat(date));
  Adata.datasets[0].close.push(parseFloat(AMrawData['Monthly Adjusted Time Series'][date]['4. close']));
  Adata.datasets[0].volume.push(parseFloat(AMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/100000000)
});
// Get the canvas element
const amt = document.getElementById('amznLine').getContext('2d');

// Create the bar chart
const amChart = new Chart(amt, {
  type: 'line',
  data: {
    labels: Adata.labels,
    datasets: [{
      label: '',
      data: Adata.datasets[0].close.reverse(),
      backgroundColor: 'rgba(212, 40, 5, 1)',
        borderColor: 'rgba(212, 40, 5, 1)', // Line color
        borderWidth: 3,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "white", // Set X-axis scale color
                  ticks: {
                      color: "white" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "white", // Set Y-axis scale color
                  ticks: {
                      color: "white" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "white" // Hide label color
                  }
              }
          },
          elements:{
            point:{
                radius:0,
            }
          }
      }
});
// CHART FOR APPLE
const APdata = {
  labels: [],
  datasets: [
    {
      label: 'Closing Prices',
      backgroundColor: 'rgba(212, 40, 5, 1)',
      borderColor: 'rgba(212, 40, 5, 1)',
      borderWidth: 3,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object
Object.keys(APMrawData['Monthly Adjusted Time Series']).forEach((date) => {
  APdata.labels.push(convertDateFormat(date));
  APdata.datasets[0].close.push(parseFloat(APMrawData['Monthly Adjusted Time Series'][date]['4. close']));
  APdata.datasets[0].volume.push(parseFloat(APMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/100000000)
});
// Get the canvas element
const apt = document.getElementById('appleLine').getContext('2d');
// Create the bar chart
const apChart = new Chart(apt, {
  type: 'line',
  data: {
    labels: APdata.labels,
    datasets: [{
      label: '',
      data: APdata.datasets[0].close.reverse(),
      backgroundColor: 'rgba(212, 40, 5, 1)',
        borderColor: 'rgba(212, 40, 5, 1)', // Line color
        borderWidth: 3,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "white", // Set X-axis scale color
                  ticks: {
                      color: "white" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "white", // Set Y-axis scale color
                  ticks: {
                      color: "white" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "white" // Hide label color
                  }
              }
          },
          elements:{
            point:{
                radius:0,
            }
          }
      }
});
// // CHART FOR GOOGLE
const Gdata = {
  labels: [],
  datasets: [
    {
      label: 'Closing Prices',
      backgroundColor: 'rgba(212, 40, 5, 1)',
      borderColor: 'rgba(212, 40, 5, 1)',
      borderWidth: 3,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object
Object.keys(GMrawData['Monthly Adjusted Time Series']).forEach((date) => {
  Gdata.labels.push(convertDateFormat(date));
  Gdata.datasets[0].close.push(parseFloat(GMrawData['Monthly Adjusted Time Series'][date]['4. close']));
  Gdata.datasets[0].volume.push(parseFloat(GMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/100000000)
});
// Get the canvas element
const gt = document.getElementById('googleLine').getContext('2d');
// Create the bar chart
const gbarChart = new Chart(gt, {
  type: 'line',
  data: {
    labels: Gdata.labels,
    datasets: [{
      label: '',
      data: Gdata.datasets[0].close.reverse(),
      backgroundColor: 'rgba(212, 40, 5, 1)',
        borderColor: 'rgba(212, 40, 5, 1)', // Line color
        borderWidth: 3,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "white", // Set X-axis scale color
                  ticks: {
                      color: "white" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "white", // Set Y-axis scale color
                  ticks: {
                      color: "white" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "white" // Hide label color
                  }
              }
          },
          elements:{
            point:{
                radius:0,
            }
          }
      }
});
// // CHART FOR META
const Fdata = {
  labels: [],
  datasets: [
    {
      label: 'Closing Prices',
      backgroundColor: 'rgba(212, 40, 5, 1)',
      borderColor: 'rgba(212, 40, 5, 1)',
      borderWidth: 3,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object
Object.keys(MMrawData['Monthly Adjusted Time Series']).forEach((date) => {
  Fdata.labels.push(convertDateFormat(date));
  Fdata.datasets[0].close.push(parseFloat(MMrawData['Monthly Adjusted Time Series'][date]['4. close']));
  Fdata.datasets[0].volume.push(parseFloat(MMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/100000000)
});
// Get the canvas element
const ft = document.getElementById('fbLine').getContext('2d');
const metaChart = new Chart(ft, {
    type: 'line',
    data: {
      labels: Fdata.labels,
      datasets: [{
        label: '',
        data: Fdata.datasets[0].close.reverse(),
        backgroundColor: 'rgba(212, 40, 5, 1)',
          borderColor: 'rgba(212, 40, 5, 1)', // Line color
          borderWidth: 3,
          fill: false, // Do not fill the area under the line
          
        
      }]
    },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false // Hide X-axis grid lines
                    },
                    color: "white", // Set X-axis scale color
                    ticks: {
                        color: "white" // Set X-axis tick color
                    }
                },
                y: {
                    grid: {
                        display: false // Hide Y-axis grid lines
                    },
                    color: "white", // Set Y-axis scale color
                    ticks: {
                        color: "white" // Set Y-axis tick color
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: "white" // Hide label color
                    }
                }
            },
            elements:{
              point:{
                  radius:0,
              }
            }
        }
  });


  const Investment={
    "MSFT":{
        "amount": 400,
        "price": 116,
    },
    "TSLA":{
        "amount": 150,
        "price": 18,
    },
    "AAPL":{
        "amount": 100,
        "price": 101,
    },
    "GOOGL":{
        "amount": 250,
        "price": 128,
    },
    "AMZN":{
        "amount": 500,
        "price": 75,
    },
    "META":{
        "amount": 200,
        "price": 31,
    }
        

    
}
let price=[]
let volume=[]
let Profit=[]
Object.keys(Investment).forEach((stock)=>{
    console.log(stock)
        price.push(Investment[stock]["price"])
        volume.push(Investment[stock]["volume"])
        
        Profit.push((parseInt(Investment[stock]["price"]))*(parseInt(Investment[stock]["amount"])))
})
console.log(Profit)
console.log(price)
  const data = {
    labels: Object.keys(Investment) ,
    datasets: [{
      label: "Sales",
      backgroundColor: "rgba(217, 142, 42, 1)",
      borderColor: "rgba(217, 142, 42, 1)",
      borderWidth: 3,
      data: Profit, // Replace this array with your own data
    }]
  };
  
  // Chart configuration
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  // Create the bar chart
  const myBarChart = new Chart(document.getElementById("netProfit"), config);



  const dct = document.getElementById('proportionProfit').getContext('2d');
    const Data = {
      labels: Object.keys(Investment),
      datasets: [{
        label: 'Proportions Of Profit',
        data: Profit,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
        borderColor: '#fff',
        borderWidth: 3
      }]
    };
    const options = {
      responsive: true,
      legend: {
        labels: {
          fontColor: 'white', // Change legend text color
          fontSize: 12 // Change legend font size
        }
      },
      cutoutPercentage: 20 // Adjust this to control the size of the hole in the middle
    };
    const myDoughnutChart = new Chart(dct, {
      type: 'doughnut',
      data: Data,
      options: options});