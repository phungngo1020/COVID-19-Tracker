import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        const modifiedData = { confirmed, recovered, deaths, lastUpdate }

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        console.log(modifiedData);

        return modifiedData;
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: {countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name); // only return name of a country
    } catch (error) {
        console.log(error);
    }
}


const fetchTodayData = async () => {
    try {
        const { data } = await axios.get(url);

        return data;
    } catch (error) {

    }
}

export const fetchYesterdayData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const yesterdayIncrease = data[data.length-1].confirmed.total - data[data.length-2].confirmed.total;
        const yesterdayTotal = data[data.length-1].confirmed.total;
        console.log("Yesterday's cases: " + yesterdayTotal);

        const todaydata = await fetchTodayData();
        const todayTotal = todaydata.confirmed.value;
        const todayIncrease = todaydata.confirmed.value-data[data.length-1].confirmed.total
        console.log("Today's cases: " + todayTotal);

        return [yesterdayIncrease, todayIncrease, yesterdayTotal, todayTotal];
    } catch (error) {

    }
}