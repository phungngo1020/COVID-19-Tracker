import React from 'react';

import { Cards, Chart, CountryPicker } from '../';
import styles from './Board.module.css';
import { fetchData } from '../../api';

class Board extends React.Component {

    state = {
        data: {},
        country: '',
    }

    // fetch data from API
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }


    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }


    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.compareCountry}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )

    }
}

export default Board;