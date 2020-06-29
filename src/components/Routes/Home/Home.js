import React from 'react';

import Board from '../../Board/Board';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import DailyIncrease from '../../DailyIncrease/DailyIncrease';
import GlobalCharts from '../../GlobalCharts/GlobalCharts';
import styles from './Home.module.css';


import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {

        return (
            <div className={styles.body}>
                <Header />

                <div className={styles.board}>
                    <Board />
                </div>

                <DailyIncrease />
                <GlobalCharts />

                <p>&nbsp;</p>
                <div className={styles.Buttons}>
                    <Link to="/compare">
                        <button className={styles.primaryButton} variant="outlined">
                            Compare two countries
                        </button>
                    </Link>
                </div>
                <p>&nbsp;</p>
                <Footer />
            </div>
        )

    }
}

export default Home;