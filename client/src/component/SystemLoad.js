import { Line } from 'react-chartjs-2';

const SystemLoad = ({ loadAvg }) => {
    const data = {
        labels: ['1 min', '5 min', '15 min'],
        datasets: [
          {
            label: 'Load Average',
            data: loadAvg,
            fill: false,
            backgroundColor: 'rgb(27, 93, 173)',
            borderColor: 'rgb(255,255,255, 0.5)',
          },
        ],
      };
      
      const options = {
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'rgb(255, 255, 255)'
                }
            },
            title: {
                display: true,
                text: 'Load Average',
                color: 'rgb(255,255,255)',
                font: {
                    family: 'Ubuntu',
                    size: 23,
                    lineHeight: 1.2,
                    weight: '500'
                  },
            }
        },
        scales: {
          y:
            {
                grid: {
                    display:false
                },
            

              ticks: {
                beginAtZero: true,
                color: 'rgb(255,255,255)',
              },
            },
          
          x: {
            grid: {
                display: false,
                color: 'rgb(255,255,255)'
            },
            ticks: {
            color: 'rgb(255,255,255)'

            }
        }
    }
      };

    return(
            <Line data={data} options={options} />
    );
}

export default SystemLoad;