import React from 'react';

import styles from './Footer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <p className={styles.initials}>p n.</p>
            </div>
        )
    }
}

export default Footer;