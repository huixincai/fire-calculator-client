import React from 'react';
import { Line } from 'react-chartjs-2';
import './FIREChart.scss';
import { Chart } from 'react-chartjs-2';

function FIREChart({ data }) {
    // Check if data is defined and is an array with length
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
        title: { text: "Net Worth Over Time", display: true },
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ]
        }
    };

    return (
        <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
}

export default FIREChart;