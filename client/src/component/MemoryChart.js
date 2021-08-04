import { Doughnut } from 'react-chartjs-2';
const MemoryChart = ({freeMem, totalMem}) => {
  
    const data = {
    labels: ["Free Memory", "Used Memory"],
    datasets: [
        {
            label: 'Memory',
            data: [freeMem/(1024*1024*1024),(totalMem-freeMem)/(1024*1024*1024)],
            backgroundColor: ['rgb(0,0,0)', 'rgb(255,255,255)'],
        }
    ]
    };
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'rgb(255, 255, 255)'
                }
            },
            title: {
                display: true,
                text: 'Available Memory in GB',
                color: 'rgb(255,255,255)',
                font: {
                    family: 'Ubuntu',
                    size: 23,
                    lineHeight: 1.2,
                    weight: '500'
                  },
            }
        },
        // rotation: 1 * Math.PI,
        // circumference: 1 * Math.PI,
    }
    return (
        <>
            <Doughnut data={data} options={options} width="30%"/>
        </>
    );
}

export default MemoryChart;