import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Board from '../../Board/Board';
import styles from './Compare.module.css';

import { Link } from "react-router-dom";

class Compare extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.boards}>
                    <div className={styles.single}>
                        <Board />
                    </div>
                    <div className={styles.single}>
                        <Board />
                    </div>
                </div>

                <p>&nbsp;</p>
                <div className={styles.Buttons}>
                    <Link to="/">
                        <button className={styles.primaryButton}>
                            Home
                        </button>
                    </Link>
                </div>
                <p>&nbsp;</p>

                <Footer />
            </div>
        )
    }
}

export default Compare;