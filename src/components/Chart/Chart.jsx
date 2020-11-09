import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setDailyData(await fetchDailyData());
    //     }

    //     fetchAPI();
    // }, []);

    // const lineChart = (
    //     dailyData.length ? (
    //         <Line 
    //             data={{
    //                 labels: dailyData.map(({ date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map(({ confirmed }) => confirmed),
    //                     label: 'Infected',
    //                     borderColor: '#A8C7C3',
    //                     fill: true,
    //                 }, {
    //                     data: dailyData.map(({ deaths }) => deaths),
    //                     label: 'Deaths',
    //                     borderColor: '#E5D0CC',
    //                     backgroundColor: '#E5D0CC',
    //                     fill: true,
    //                 }],
    //             }}
    //         />
    //     ) : null
    // );

    // console.log(confirmed, recovered, deaths)

    // const barChart = (
    //     confirmed ? (
    //         <Bar 
    //             data={{
    //                 labels: ['Infected', 'Recovered', 'Deaths'],
    //                 datasets: [{
    //                     label: 'People',
    //                     backgroundColor: [
    //                         '#A8C7C3', 
    //                         '#BFACB5',
    //                         '#E5D0CC'
    //                     ],
    //                     data: [confirmed.value, recovered.value, deaths.value]
    //                 }]
    //             }}
    //             options={{
    //                 legend: { display: false },
    //                 title: { display: true, text: `Current state in ${country}`}
    //             }}
    //         />
    //     ) : null
    // )

    // return (
    //     <div className={styles.container}>
    //         {country ? barChart : lineChart}
    //     </div>
    // )

    return (
        <div className={styles.container}>Graphs under maintenance</div> 
    );
}

export default Chart;