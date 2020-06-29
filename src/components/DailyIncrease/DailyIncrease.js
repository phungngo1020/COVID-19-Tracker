
import React, { useState, useEffect } from 'react';
import { fetchYesterdayData, fetchWeeklyTotal, fetchMonthlyTotal, fetchWeeklyDeathTotal, fetchMonthlyDeathsTotal } from '../../api';

import styles from './DailyIncrease.module.css';

const DailyIncrease = () => {
    const [data, setData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [weeklyDeaths, setWeeklyDeaths] = useState([]);
    const [monthlyDeaths, setMonthlyDeaths] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await fetchYesterdayData());
            setWeeklyData(await fetchWeeklyTotal());
            setMonthlyData(await fetchMonthlyTotal());
            setWeeklyDeaths(await fetchWeeklyDeathTotal());
            setMonthlyDeaths(await fetchMonthlyDeathsTotal());
        }

        fetchAPI();
    }, []);

    const yesterdayIncrease = data[0];
    const todayIncrease = data[1];

    const weeklyTotal =  weeklyData[weeklyData.length-1] - weeklyData[0];
    const monthlyTotal = monthlyData[monthlyData.length-1] - monthlyData[0];

    const weeklyDeathsTotal =  weeklyDeaths[weeklyDeaths.length-1] - weeklyDeaths[0];
    const monthlyDeathsTotal =  monthlyDeaths[monthlyDeaths.length-1] - monthlyDeaths[0];
    console.log(monthlyData);

    return (
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <h2>Global Stats</h2>
            </div>
            <div className={styles.horizontalCard}>
                <div>
                    <p>Today's new cases: <span className={styles.red}>+{todayIncrease}</span></p>
                    <p>Yesterday's new cases: <span className={styles.red}>+{yesterdayIncrease}</span></p>
                </div>
            
                <div>
                    <p>This week's new cases: <span className={styles.red}>+{weeklyTotal.toLocaleString()}</span></p>
                    <p>This month's new cases: <span className={styles.red}>+{monthlyTotal.toLocaleString()}</span></p>
                </div>

                            
                <div>
                    <p>This week's new deaths: <span className={styles.red}>+{weeklyDeathsTotal.toLocaleString()}</span></p>
                    <p>This month's new deaths: <span className={styles.red}>+{monthlyDeathsTotal.toLocaleString()}</span></p>
                </div>
            </div>
        </div>
    )
}

export default DailyIncrease;