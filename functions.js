import { TMrawData } from "./json/monthly/tesla_monthly.js";
import { MMrawData } from "./json/monthly/meta_monthly.js";
import { MSMrawData } from "./json/monthly/msft_monthly.js";
import { AMrawData } from "./json/monthly/amazon_monthly.js";
import { APMrawData } from "./json/monthly/apple_monthly.js";
import { GMrawData } from "./json/monthly/google_monthly.js";

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

// fetchdata();
const data = {
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

   
Object.keys(TMrawData['Monthly Adjusted Time Series']).forEach((date) => {
        data.labels.push(convertDateFormat(date));
        data.datasets[0].close.push(parseFloat(TMrawData['Monthly Adjusted Time Series'][date]['4. close']));
        data.datasets[0].volume.push(parseFloat(TMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
      });
      


  
  


// Extract data from the raw data and populate the "data" object

console.log(data.datasets[0].close)


// Get the canvas element
const ctx = document.getElementById('myBarChart').getContext('2d');


// Create the bar chart
const myMixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels.reverse(),
      datasets: [
        {
          label: 'Volume in Crores',
          data: data.datasets[0].volume.reverse(),
          backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
          borderColor: 'rgba(217, 142, 42, 1)', // Border color
          borderWidth: 0,
        },
        {
          label: 'Stock Price(£)',
          data: data.datasets[0].close.reverse(),
          backgroundColor: 'rgba(212, 40, 5, 1)',
          borderColor: 'rgba(212, 40, 5, 1)', // Line color
          borderWidth: 1,
          fill: false, // Do not fill the area under the line
          type: 'line', // Specify the dataset type as a line chart
        }
      ]
    },
    options: {
        plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true, // Enable zooming using the mouse wheel
                },
                pinch: {
                  enabled: true // Enable zooming using pinch gesture on touch devices
                },
                mode: 'xy', // Zoom both the x and y axes together
              },
              pan: {
                enabled: true, // Enable panning
                mode: 'xy', // Pan both the x and y axes together
              },
            }
          },
      interaction: {
        mode: 'index', // Show the tooltip only for the nearest data point
      },
      elements:{
        point:{
            radius:0,
        }
      }
    }
  });

  function msftClick(){
    myMixedChart.destroy();
    const Pdata = {
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
    
       
    Object.keys(MSMrawData['Monthly Adjusted Time Series']).forEach((date) => {
            Pdata.labels.push(convertDateFormat(date));
            Pdata.datasets[0].close.push(parseFloat(MSMrawData['Monthly Adjusted Time Series'][date]['4. close']));
            Pdata.datasets[0].volume.push(parseFloat(MSMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
          });
          
    
    
      
      
    
    
    // Extract data from the raw data and populate the "data" object
    
    
    // Get the canvas element
    const ctp = document.getElementById('myBarChart').getContext('2d');
    
    
    // Create the bar chart
    myMixedChart= new Chart(ctp, {
        type: 'bar',
        data: {
          labels: Pdata.labels.reverse(),
          datasets: [
            {
              label: 'Volume in Crores',
              data: Pdata.datasets[0].volume.reverse(),
              backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
              borderColor: 'rgba(217, 142, 42, 1)', // Border color
              borderWidth: 0,
            },
            {
              label: 'Stock Price(£)',
              data: Pdata.datasets[0].close.reverse(),
              backgroundColor: 'rgba(212, 40, 5, 1)',
              borderColor: 'rgba(212, 40, 5, 1)', // Line color
              borderWidth: 1,
              fill: false, // Do not fill the area under the line
              type: 'line', // Specify the dataset type as a line chart
            }
          ]
        },
        options: {
            plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true, // Enable zooming using the mouse wheel
                    },
                    pinch: {
                      enabled: true // Enable zooming using pinch gesture on touch devices
                    },
                    mode: 'xy', // Zoom both the x and y axes together
                  },
                  pan: {
                    enabled: true, // Enable panning
                    mode: 'xy', // Pan both the x and y axes together
                  },
                }
              },
          interaction: {
            mode: 'index', // Show the tooltip only for the nearest data point
          },
          elements:{
            point:{
                radius:0,
            }
          }
        }
      });
      return 0;
      document.getElementById("msft").onclick=msftClick
      document.getElementById("tesla").onclick=teslaClick
      document.getElementById("amzn").onclick=amazonClick
      document.getElementById("apple").onclick=appleClick
      document.getElementById("gle").onclick=googleClick
      document.getElementById("meta").onclick=metaClick
    

  }
  function appleClick(){
    myMixedChart.destroy();
    const Pdata = {
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
    
       
    Object.keys(APMrawData['Monthly Adjusted Time Series']).forEach((date) => {
            Pdata.labels.push(convertDateFormat(date));
            Pdata.datasets[0].close.push(parseFloat(APMrawData['Monthly Adjusted Time Series'][date]['4. close']));
            Pdata.datasets[0].volume.push(parseFloat(APMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
          });
          
    
    
      
      
    
    
    // Extract data from the raw data and populate the "data" object
    
    
    // Get the canvas element
    const ctp = document.getElementById('myBarChart').getContext('2d');
    
    
    // Create the bar chart
    myMixedChart = new Chart(ctp, {
        type: 'bar',
        data: {
          labels: Pdata.labels.reverse(),
          datasets: [
            {
              label: 'Volume in Crores',
              data: Pdata.datasets[0].volume.reverse(),
              backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
              borderColor: 'rgba(217, 142, 42, 1)', // Border color
              borderWidth: 0,
            },
            {
              label: 'Stock Price(£)',
              data: Pdata.datasets[0].close.reverse(),
              backgroundColor: 'rgba(212, 40, 5, 1)',
              borderColor: 'rgba(212, 40, 5, 1)', // Line color
              borderWidth: 1,
              fill: false, // Do not fill the area under the line
              type: 'line', // Specify the dataset type as a line chart
            }
          ]
        },
        options: {
            plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true, // Enable zooming using the mouse wheel
                    },
                    pinch: {
                      enabled: true // Enable zooming using pinch gesture on touch devices
                    },
                    mode: 'xy', // Zoom both the x and y axes together
                  },
                  pan: {
                    enabled: true, // Enable panning
                    mode: 'xy', // Pan both the x and y axes together
                  },
                }
              },
          interaction: {
            mode: 'index', // Show the tooltip only for the nearest data point
          },
          elements:{
            point:{
                radius:0,
            }
          }
        }
      });

  }
  function teslaClick(){
    myMixedChart.destroy();
    const Pdata = {
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
    
       
    Object.keys(TMrawData['Monthly Adjusted Time Series']).forEach((date) => {
            Pdata.labels.push(convertDateFormat(date));
            Pdata.datasets[0].close.push(parseFloat(TMrawData['Monthly Adjusted Time Series'][date]['4. close']));
            Pdata.datasets[0].volume.push(parseFloat(TMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
          });
          
    
    
      
      
    
    
    // Extract data from the raw data and populate the "data" object
    
    
    // Get the canvas element
    const ctp = document.getElementById('myBarChart').getContext('2d');
    
    
    // Create the bar chart
    myMixedChart = new Chart(ctp, {
        type: 'bar',
        data: {
          labels: Pdata.labels.reverse(),
          datasets: [
            {
              label: 'Volume in Crores',
              data: Pdata.datasets[0].volume.reverse(),
              backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
              borderColor: 'rgba(217, 142, 42, 1)', // Border color
              borderWidth: 0,
            },
            {
              label: 'Stock Price(£)',
              data: Pdata.datasets[0].close.reverse(),
              backgroundColor: 'rgba(212, 40, 5, 1)',
              borderColor: 'rgba(212, 40, 5, 1)', // Line color
              borderWidth: 1,
              fill: false, // Do not fill the area under the line
              type: 'line', // Specify the dataset type as a line chart
            }
          ]
        },
        options: {
            plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true, // Enable zooming using the mouse wheel
                    },
                    pinch: {
                      enabled: true // Enable zooming using pinch gesture on touch devices
                    },
                    mode: 'xy', // Zoom both the x and y axes together
                  },
                  pan: {
                    enabled: true, // Enable panning
                    mode: 'xy', // Pan both the x and y axes together
                  },
                }
              },
          interaction: {
            mode: 'index', // Show the tooltip only for the nearest data point
          },
          elements:{
            point:{
                radius:0,
            }
          }
        }
      });

  }
  function amazonClick(){
    myMixedChart.destroy();
    const Pdata = {
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
    
       
    Object.keys(AMrawData['Monthly Adjusted Time Series']).forEach((date) => {
            Pdata.labels.push(convertDateFormat(date));
            Pdata.datasets[0].close.push(parseFloat(AMrawData['Monthly Adjusted Time Series'][date]['4. close']));
            Pdata.datasets[0].volume.push(parseFloat(AMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
          });
          
    
    
      
      
    
    
    // Extract data from the raw data and populate the "data" object
    
    
    // Get the canvas element
    const ctp = document.getElementById('myBarChart').getContext('2d');
    
    
    // Create the bar chart
    myMixedChart = new Chart(ctp, {
        type: 'bar',
        data: {
          labels: Pdata.labels.reverse(),
          datasets: [
            {
              label: 'Volume in Crores',
              data: Pdata.datasets[0].volume.reverse(),
              backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
              borderColor: 'rgba(217, 142, 42, 1)', // Border color
              borderWidth: 0,
            },
            {
              label: 'Stock Price(£)',
              data: Pdata.datasets[0].close.reverse(),
              backgroundColor: 'rgba(212, 40, 5, 1)',
              borderColor: 'rgba(212, 40, 5, 1)', // Line color
              borderWidth: 1,
              fill: false, // Do not fill the area under the line
              type: 'line', // Specify the dataset type as a line chart
            }
          ]
        },
        options: {
            plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true, // Enable zooming using the mouse wheel
                    },
                    pinch: {
                      enabled: true // Enable zooming using pinch gesture on touch devices
                    },
                    mode: 'xy', // Zoom both the x and y axes together
                  },
                  pan: {
                    enabled: true, // Enable panning
                    mode: 'xy', // Pan both the x and y axes together
                  },
                }
              },
          interaction: {
            mode: 'index', // Show the tooltip only for the nearest data point
          },
          elements:{
            point:{
                radius:0,
            }
          }
        }
      });

  }
  function metaClick(){
    myMixedChart.destroy();
    const Pdata = {
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
    
       
    Object.keys(MMrawData['Monthly Adjusted Time Series']).forEach((date) => {
            Pdata.labels.push(convertDateFormat(date));
            Pdata.datasets[0].close.push(parseFloat(MMrawData['Monthly Adjusted Time Series'][date]['4. close']));
            Pdata.datasets[0].volume.push(parseFloat(MMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
          });
          
    
    
      
      
    
    
    // Extract data from the raw data and populate the "data" object
    
    
    // Get the canvas element
    const ctp = document.getElementById('myBarChart').getContext('2d');
    
    
    // Create the bar chart
    myMixedChart = new Chart(ctp, {
        type: 'bar',
        data: {
          labels: Pdata.labels.reverse(),
          datasets: [
            {
              label: 'Volume in Crores',
              data: Pdata.datasets[0].volume.reverse(),
              backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
              borderColor: 'rgba(217, 142, 42, 1)', // Border color
              borderWidth: 0,
            },
            {
              label: 'Stock Price(£)',
              data: Pdata.datasets[0].close.reverse(),
              backgroundColor: 'rgba(212, 40, 5, 1)',
              borderColor: 'rgba(212, 40, 5, 1)', // Line color
              borderWidth: 1,
              fill: false, // Do not fill the area under the line
              type: 'line', // Specify the dataset type as a line chart
            }
          ]
        },
        options: {
            plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true, // Enable zooming using the mouse wheel
                    },
                    pinch: {
                      enabled: true // Enable zooming using pinch gesture on touch devices
                    },
                    mode: 'xy', // Zoom both the x and y axes together
                  },
                  pan: {
                    enabled: true, // Enable panning
                    mode: 'xy', // Pan both the x and y axes together
                  },
                }
              },
          interaction: {
            mode: 'index', // Show the tooltip only for the nearest data point
          },
          elements:{
            point:{
                radius:0,
            }
          }
        }
      });


  }
  function googleClick(){
    myMixedChart.destroy();
    const Pdata = {
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
    
       
    Object.keys(GMrawData['Monthly Adjusted Time Series']).forEach((date) => {
            Pdata.labels.push(convertDateFormat(date));
            Pdata.datasets[0].close.push(parseFloat(GMrawData['Monthly Adjusted Time Series'][date]['4. close']));
            Pdata.datasets[0].volume.push(parseFloat(GMrawData['Monthly Adjusted Time Series'][date]['6. volume'])/10000000)
          });
          
    
    
      
      
    
    
    // Extract data from the raw data and populate the "data" object
    
    
    // Get the canvas element
    const ctp = document.getElementById('myBarChart').getContext('2d');
    
    
    // Create the bar chart
    myMixedChart = new Chart(ctp, {
        type: 'bar',
        data: {
          labels: Pdata.labels.reverse(),
          datasets: [
            {
              label: 'Volume in Crores',
              data: Pdata.datasets[0].volume.reverse(),
              backgroundColor: 'rgba(217, 142, 42, 1)', // Bar color
              borderColor: 'rgba(217, 142, 42, 1)', // Border color
              borderWidth: 0,
            },
            {
              label: 'Stock Price(£)',
              data: Pdata.datasets[0].close.reverse(),
              backgroundColor: 'rgba(212, 40, 5, 1)',
              borderColor: 'rgba(212, 40, 5, 1)', // Line color
              borderWidth: 1,
              fill: false, // Do not fill the area under the line
              type: 'line', // Specify the dataset type as a line chart
            }
          ]
        },
        options: {
            plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true, // Enable zooming using the mouse wheel
                    },
                    pinch: {
                      enabled: true // Enable zooming using pinch gesture on touch devices
                    },
                    mode: 'xy', // Zoom both the x and y axes together
                  },
                  pan: {
                    enabled: true, // Enable panning
                    mode: 'xy', // Pan both the x and y axes together
                  },
                }
              },
          interaction: {
            mode: 'index', // Show the tooltip only for the nearest data point
          },
          elements:{
            point:{
                radius:0,
            }
          }
        }
      });


  }


document.getElementById("msft").onclick=msftClick
document.getElementById("tesla").onclick=teslaClick
  document.getElementById("amzn").onclick=amazonClick
  document.getElementById("apple").onclick=appleClick
  document.getElementById("gle").onclick=googleClick
  document.getElementById("meta").onclick=metaClick


  