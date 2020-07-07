import React from 'react';
import { Bar } from 'react-chartjs-2';



const GlobalBarChart = (getdata) => {
    const data = getdata
    // console.log(data.data.Confirmed)

    const state = {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: 'People',
                backgroundColor:   [
                    '#FFFF33',
                    '#00CC66',
                    'red',
                ],
                pointBorderWidth: 1,
                borderColor: [
                    '#FFFF33',
                    '#00CC66',
                    'red',
                ],
                borderWidth: 2,
                data: [data.data.Confirmed, data.data.recovered, data.data.deaths]
            },

        ]
    }
    return (
        <div>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        fontSize: 20
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}
export default GlobalBarChart;