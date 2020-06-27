import React from 'react';

import styles from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>COVID-19 TRACKER</h1>
            </div>
        )

    }
}

export default Header;