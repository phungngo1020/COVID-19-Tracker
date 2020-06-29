
import React, { useState, useEffect } from 'react';
import { fetchWeeklyData, fetchMonthlyData, fetchWeeklyDeaths, fetchMonthlyDeaths } from '../../api';
import { Bar } from 'react-chartjs-2';

import styles from './GlobaCharts.module.css';

const GlobalCharts = () => {
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [weeklyDeaths, setWeeklyDeaths] = useState([]);
    const [monthlyDeaths, setMonthlyDeaths] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setWeeklyData(await fetchWeeklyData());
            setMonthlyData(await fetchMonthlyData());
            setWeeklyDeaths(await fetchWeeklyDeaths());
            setMonthlyDeaths(await fetchMonthlyDeaths());
        }

        fetchAPI();
    }, []);

    const weeklyChart = (
        <Bar 
            data={{
                labels: weeklyData.map(({date}) => date),
                datasets: [{
                    label: 'Total cases',
                    backgroundColor: '#A8C7C3',
                    data: weeklyData.map(({ confirmed }) => confirmed),
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: 'Weekly New Cases'}
            }}
        />
    )

    const monthlyChart = (
        <Bar 
            data={{
                labels: monthlyData.map(({date}) => date),
                datasets: [{
                    label: 'Total cases',
                    backgroundColor: '#A8C7C3',
                    data: monthlyData.map(({ confirmed }) => confirmed),
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: 'Monthly New Cases'}
            }}
        />

    )

    const weeklyDeathsChart = (
        <Bar 
            data={{
                labels: weeklyDeaths.map(({date}) => date),
                datasets: [{
                    label: 'Total deaths',
                    backgroundColor: '#E5D0CC',
                    data: weeklyDeaths.map(({ deaths }) => deaths),
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: 'Weekly New Deaths'}
            }}
        />
    )


    const monthlyDeathsChart = (
        <Bar 
            data={{
                labels: monthlyDeaths.map(({date}) => date),
                datasets: [{
                    label: 'Total deaths',
                    backgroundColor: '#E5D0CC',
                    data: monthlyDeaths.map(({ deaths }) => deaths),
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: 'Monthly New Deaths'}
            }}
        />
    )

    return (
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <h2>Global Stats</h2>
            </div>

            <div className={styles.row}>
                <div className={styles.chartsContainer}>
                    {weeklyChart}
                </div>

                <div className={styles.chartsContainer}>
                    {weeklyDeathsChart}
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.chartsContainer}>
                    {monthlyChart}
                </div>

                <div className={styles.chartsContainer}>
                    {monthlyDeathsChart}
                </div>
            </div>

        </div>
    )
}

export default GlobalCharts;