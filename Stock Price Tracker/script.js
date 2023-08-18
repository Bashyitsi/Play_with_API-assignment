document.addEventListener('DOMContentLoaded', function () {
    const apiKey = ' KVWOT8SKHT9GCEPE'; 
    const searchBtn = document.getElementById('searchBtn');
    const stockInfo = document.getElementById('stockInfo');
    
    searchBtn.addEventListener('click', function () {
        const symbol = document.getElementById('symbol').value;
        if (symbol.trim() !== '') {
            fetchStockPrice(symbol, apiKey);
        }
    });
    //function to fetch stockprice from alphavantage so that can be seen on our website 
    async function fetchStockPrice(symbol, apiKey) {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`);
        const data = await response.json();
        
        if (data['Global Quote']) {
            const stockData = data['Global Quote'];
            const symbol = stockData['01. symbol'];
            const openPrice = stockData['02. open'];
            const highPrice = stockData['03. high'];
            const lowPrice = stockData['04. low'];
            const currentPrice = stockData['05. price'];

            stockInfo.innerHTML = `
                <h2>${symbol}</h2>
                <p>Open Price: ${openPrice}</p>
                <p>High Price: ${highPrice}</p>
                <p>Low Price: ${lowPrice}</p>
                <p>Current Price: ${currentPrice}</p>
            `;
        } else {
            stockInfo.innerHTML = 'Stock symbol not found.';
        }
    }
});
