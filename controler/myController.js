const getData = async() => {
    const response = await fetch('https://data.nasdaq.com/api/v3/datasets/BCHARTS/BITSTAMPUSD?utm_source=r-search-yahoo&utm_medium=organic&utm_campaign=&utm_content=api-for-bitcoin-data');
    var responseData = await response.json();
    console.log(responseData.dataset.data)
};

module.exports = {
    getData
}