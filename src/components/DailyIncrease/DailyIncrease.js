
import React, { useState, useEffect } from 'react';
import { fetchYesterdayData } from '../../api';

import styles from './DailyIncrease.module.css';

const DailyIncrease = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await fetchYesterdayData());
        }

        fetchAPI();
    }, []);

    const yesterdayIncrease = data[0];
    const todayIncrease = data[1];
    const yesterdayTotal = data[2];
    const todayTotal = data[3];

    return (
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <h2>Global Stats</h2>
            </div>
            <div className={styles.horizontalCard}>
                <div>
                    <p>Today's new cases: <span className={styles.red}>+{ todayIncrease }</span></p>
                    <p>Today's total cases: <span className={styles.total}>{ todayTotal }</span></p>
                </div>
                
                <div>
                    <p>Yesterday's new cases: <span className={styles.red}>+{ yesterdayIncrease }</span></p>
                    <p>Yesterday's total cases: <span className={styles.total}>{ yesterdayTotal }</span></p>
                </div>
            
            </div>
        </div>
    )
}

export default DailyIncrease;