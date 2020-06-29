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

        console.log("weekly data: ");
        console.log(await fetchWeeklyData());

        return [yesterdayIncrease, todayIncrease ];
    } catch (error) {

    }
}

/* Total new cases for the week */
export const fetchWeeklyTotal = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, weeklyTotal = [];

        for (i = index-7; i < index; i++) {
            weeklyTotal.push(data[i].confirmed.total);
        }
        fetchWeeklyDeathTotal();

        return weeklyTotal;
    } catch (error) {
        console.log(error);
    }
}

/* Total new cases for the week */
export const fetchWeeklyDeathTotal = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, weeklyTotal = [];

        for (i = index-7; i < index; i++) {
            weeklyTotal.push(data[i].deaths.total);
        }

        return weeklyTotal;
    } catch (error) {
        console.log(error);
    }
}


/* Daily increase for the week, used for bar chart */
export const fetchWeeklyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, weeklyIncrease = [];

        for (i = index-7; i < index; i++) {
            var before = data[i-1].confirmed.total;
            var after = data[i].confirmed.total;
            weeklyIncrease.push({confirmed: after-before, date: data[i].reportDate});
        }

        return weeklyIncrease;
    } catch (error) {
        console.log(error);
    }
}

/* Daily deaths for one week, used for bar chart */
export const fetchWeeklyDeaths = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, weeklyIncrease = [];

        for (i = index-7; i < index; i++) {
            var before = data[i-1].deaths.total;
            var after = data[i].deaths.total;
            weeklyIncrease.push({deaths: after-before, date: data[i].reportDate});
        }

        return weeklyIncrease;
    } catch (error) {
        console.log(error);
    }
}

/* Total increase for the month */
export const fetchMonthlyTotal = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, monthlyTotal = [];

        for (i = index-30; i < index; i++) {
            monthlyTotal.push(data[i].confirmed.total);
        }

        return monthlyTotal;
    } catch (error) {

    }
}

/* Total increase for the month */
export const fetchMonthlyDeathsTotal = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, monthlyTotal = [];

        for (i = index-30; i < index; i++) {
            monthlyTotal.push(data[i].deaths.total);
        }

        return monthlyTotal;
    } catch (error) {

    }
}


/* Daily increase for the month, used for bar chart */
export const fetchMonthlyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, monthlyIncrease = [];

        for (i = index-30; i < index; i++) {
            var before = data[i-1].confirmed.total;
            var after = data[i].confirmed.total;
            monthlyIncrease.push({confirmed: after-before, date: data[i].reportDate});
        }

        return monthlyIncrease;
    } catch (error) {
        console.log(error);
    }
}

/* Daily increase for the month, used for bar chart */
export const fetchMonthlyDeaths = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const index = data.length-1;
        var i, monthlyIncrease = [];

        for (i = index-30; i < index; i++) {
            var before = data[i-1].deaths.total;
            var after = data[i].deaths.total;
            monthlyIncrease.push({deaths: after-before, date: data[i].reportDate});
        }

        return monthlyIncrease;
    } catch (error) {
        console.log(error);
    }
}