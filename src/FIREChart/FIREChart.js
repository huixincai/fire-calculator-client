import React from 'react';
import { Line } from 'react-chartjs-2';
import './FIREChart.scss';

function FIREChart({ data }) {
    
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>No data available. Please submit the form to calculate.</p>;
    }

    const chartData = {
        labels: data.map((year, index) => index), 
        datasets: [
            {
                label: 'Net Worth',
                data: data.map(year => year.netWorth),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Net Worth Over Time'
            },
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        animation: {
            duration: 4000, 
            easing: 'easeInOutElastic', 
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.5,
                to: 0.3,
                loop: true
            }
        }
    };

    return (
        <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
}

export default FIREChart;
