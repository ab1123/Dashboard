import { TDrawData } from "./json/daily/tesla_daily.js";
import { MDrawData } from "./json/daily/msft_daily.js";
import { APDrawData } from "./json/daily/apple_daily.js";
import { ADrawData } from "./json/daily/amazon_daily.js";
import { FDrawData } from "./json/daily/meta_daily.js";
import { GDrawData } from "./json/daily/google_daily.js";

// CHART FOR TESLA
const Ldata = {
    labels: [],
    datasets: [
      {
        label: 'Closing Prices',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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

  Object.keys(TDrawData['Time Series (Daily)']).forEach((date) => {
    Ldata.labels.push(convertDateFormat(date));
    Ldata.datasets[0].close.push(parseFloat(TDrawData['Time Series (Daily)'][date]['4. close']));
    Ldata.datasets[0].volume.push(parseFloat(TDrawData['Time Series (Daily)'][date]['6. volume'])/100000000)
  });
// Get the canvas element
const ct = document.getElementById('teslaChart').getContext('2d');
const tp=document.querySelector('.card h2')
tp.innerHTML+=`<br/> £${Ldata.datasets[0].close[0]}`

// Create the bar chart
const barChart = new Chart(ct, {
    type: 'line',
    data: {
      labels: Ldata.labels,
      datasets: [{
        label: '',
        data: Ldata.datasets[0].close.reverse(),
        backgroundColor: '#00B006',
          borderColor: '#00B006', // Line color
          borderWidth: 1,
          fill: false, // Do not fill the area under the line
          
        
      }]
    },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false // Hide X-axis grid lines
                    },
                    color: "transparent", // Set X-axis scale color
                    ticks: {
                        color: "transparent" // Set X-axis tick color
                    }
                },
                y: {
                    grid: {
                        display: false // Hide Y-axis grid lines
                    },
                    color: "transparent", // Set Y-axis scale color
                    ticks: {
                        color: "transparent" // Set Y-axis tick color
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: "transparent" // Hide label color
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
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object

Object.keys(MDrawData['Time Series (Daily)']).forEach((date) => {
  Mdata.labels.push(convertDateFormat(date));
  Mdata.datasets[0].close.push(parseFloat(MDrawData['Time Series (Daily)'][date]['4. close']));
  Mdata.datasets[0].volume.push(parseFloat(MDrawData['Time Series (Daily)'][date]['6. volume'])/100000000)
});

// Get the canvas element
const mt = document.getElementById('msftChart').getContext('2d');

// Create the bar chart
const MChart = new Chart(mt, {
  type: 'line',
  data: {
    labels: Mdata.labels,
    datasets: [{
      label: '',
      data: Mdata.datasets[0].close.reverse(),
      backgroundColor: '#00B006',
        borderColor: '#00B006', // Line color
        borderWidth: 1,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "transparent", // Set X-axis scale color
                  ticks: {
                      color: "transparent" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "transparent", // Set Y-axis scale color
                  ticks: {
                      color: "transparent" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "transparent" // Hide label color
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
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object

Object.keys(ADrawData['Time Series (Daily)']).forEach((date) => {
  Adata.labels.push(convertDateFormat(date));
  Adata.datasets[0].close.push(parseFloat(ADrawData['Time Series (Daily)'][date]['4. close']));
  Adata.datasets[0].volume.push(parseFloat(ADrawData['Time Series (Daily)'][date]['6. volume'])/100000000)
});
// Get the canvas element
const amt = document.getElementById('amazonChart').getContext('2d');

// Create the bar chart
const amChart = new Chart(amt, {
  type: 'line',
  data: {
    labels: Adata.labels,
    datasets: [{
      label: '',
      data: Adata.datasets[0].close.reverse(),
      backgroundColor: '#00B006',
        borderColor: '#00B006', // Line color
        borderWidth: 1,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "transparent", // Set X-axis scale color
                  ticks: {
                      color: "transparent" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "transparent", // Set Y-axis scale color
                  ticks: {
                      color: "transparent" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "transparent" // Hide label color
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
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object
Object.keys(APDrawData['Time Series (Daily)']).forEach((date) => {
  APdata.labels.push(convertDateFormat(date));
  APdata.datasets[0].close.push(parseFloat(APDrawData['Time Series (Daily)'][date]['4. close']));
  APdata.datasets[0].volume.push(parseFloat(APDrawData['Time Series (Daily)'][date]['6. volume'])/100000000)
});
// Get the canvas element
const apt = document.getElementById('appleChart').getContext('2d');
// Create the bar chart
const apChart = new Chart(apt, {
  type: 'line',
  data: {
    labels: APdata.labels,
    datasets: [{
      label: '',
      data: APdata.datasets[0].close.reverse(),
      backgroundColor: '#00B006',
        borderColor: '#00B006', // Line color
        borderWidth: 1,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "transparent", // Set X-axis scale color
                  ticks: {
                      color: "transparent" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "transparent", // Set Y-axis scale color
                  ticks: {
                      color: "transparent" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "transparent" // Hide label color
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
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object
Object.keys(GDrawData['Time Series (Daily)']).forEach((date) => {
  Gdata.labels.push(convertDateFormat(date));
  Gdata.datasets[0].close.push(parseFloat(GDrawData['Time Series (Daily)'][date]['4. close']));
  Gdata.datasets[0].volume.push(parseFloat(GDrawData['Time Series (Daily)'][date]['6. volume'])/100000000)
});
// Get the canvas element
const gt = document.getElementById('googleChart').getContext('2d');
// Create the bar chart
const gbarChart = new Chart(gt, {
  type: 'line',
  data: {
    labels: Gdata.labels,
    datasets: [{
      label: '',
      data: Gdata.datasets[0].close.reverse(),
      backgroundColor: '#00B006',
        borderColor: '#00B006', // Line color
        borderWidth: 1,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "transparent", // Set X-axis scale color
                  ticks: {
                      color: "transparent" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "transparent", // Set Y-axis scale color
                  ticks: {
                      color: "transparent" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "transparent" // Hide label color
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
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      close: [],
      volume: [],
    },
  ],
};
// Extract data from the raw data and populate the "data" object
Object.keys(FDrawData['Time Series (Daily)']).forEach((date) => {
  Fdata.labels.push(convertDateFormat(date));
  Fdata.datasets[0].close.push(parseFloat(FDrawData['Time Series (Daily)'][date]['4. close']));
  Fdata.datasets[0].volume.push(parseFloat(FDrawData['Time Series (Daily)'][date]['6. volume'])/100000000)
});
// Get the canvas element
const ft = document.getElementById('fbChart').getContext('2d');

// Create the bar chart
const metaChart = new Chart(ft, {
  type: 'line',
  data: {
    labels: Fdata.labels,
    datasets: [{
      label: '',
      data: Fdata.datasets[0].close.reverse(),
      backgroundColor: '#00B006',
        borderColor: '#00B006', // Line color
        borderWidth: 1,
        fill: false, // Do not fill the area under the line
        
      
    }]
  },
      options: {
          scales: {
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  },
                  color: "transparent", // Set X-axis scale color
                  ticks: {
                      color: "transparent" // Set X-axis tick color
                  }
              },
              y: {
                  grid: {
                      display: false // Hide Y-axis grid lines
                  },
                  color: "transparent", // Set Y-axis scale color
                  ticks: {
                      color: "transparent" // Set Y-axis tick color
                  }
              }
          },
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: "transparent" // Hide label color
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
//Tesla Profit
const tpp=((Ldata.datasets[0].close[0]-Ldata.datasets[0].close[1])/Ldata.datasets[0].close[0])*100
const mspp=((Mdata.datasets[0].close[0]-Ldata.datasets[0].close[1])/Ldata.datasets[0].close[0])*100
const mpp=((Fdata.datasets[0].close[0]-Ldata.datasets[0].close[1])/Ldata.datasets[0].close[0])*100
const gpp=((Gdata.datasets[0].close[0]-Ldata.datasets[0].close[1])/Ldata.datasets[0].close[0])*100
const ampp=((Adata.datasets[0].close[0]-Ldata.datasets[0].close[1])/Ldata.datasets[0].close[0])*100
const appp=((APdata.datasets[0].close[0]-Ldata.datasets[0].close[1])/Ldata.datasets[0].close[0])*100
console.log(mspp)


// document.getElementById("tesla").innerHTML+=`<p>${tpp.toFixed(2)}%</p>`
// document.getElementById("msft").innerHTML+=`<p>${mspp.toFixed(2)}%</p>`
// document.getElementById("meta").innerHTML+=`<p>${mpp.toFixed(2)}%</p>`
// document.getElementById("gle").innerHTML+=`<p>${gpp.toFixed(2)}%</p>`
// document.getElementById("amzn").innerHTML+=`<p>${ampp.toFixed(2)}%</p>`
// document.getElementById("apple").innerHTML+=`<p>${appp.toFixed(2)}%</p>`



// document.getElementById('tesla').style.width=`${Math.abs(tpp)*5}vw`
// document.getElementById('msft').style.width=`${Math.abs(mspp)*6}px`
// document.getElementById('meta').style.width=`${Math.abs(mpp)*10}px`
// document.getElementById('gle').style.width=`${Math.abs(gpp)*5}px`
// document.getElementById('amzn').style.width=`${Math.abs(ampp)*5}px`
// document.getElementById('apple').style.width=`${Math.abs(appp)*5}px`