# Stock Price Tracker Website - README

This README is intended to help you understand the stock price tracker website i have  created so that you can easily explain its functionality and performance to others.

## Overview

The stock price tracker website is designed to fetch and display real-time stock price data from an external financial data provider's API. Users can enter a stock symbol, and the website will present them with the current stock price, along with other relevant information like high and low prices.

## How It Works

1. **User Interaction**: Users enter a stock symbol in the input field and click the "Search" button.
2. **API Integration**: Upon clicking "Search," the website constructs an API request URL, incorporating the user-entered stock symbol and your API key.
3. **API Request**: The website uses JavaScript's `fetch()` to send a request to the API, asking for the stock price data associated with the provided symbol.
4. **API Response**: The API responds with data in JSON format, including the current stock price, high and low prices, and other relevant details.
5. **Data Presentation**: The JavaScript code processes the JSON response, extracting the required information.
6. **Updating Webpage**: The extracted data is then used to update the relevant parts of the webpage, such as displaying the stock symbol, current price, and other details.
7. **Error Handling**: If the API request fails or the stock symbol isn't found, the website displays meaningful error messages.
8. **Styling**: The webpage is styled using CSS to create a visually appealing and user-friendly design.

## Performance Considerations

- **API Latency**: The speed at which stock price data is fetched depends on the API provider's response time. Opt for a reputable provider to ensure minimal delay.
- **Error Handling**: Robust error handling ensures that users receive clear messages if something goes wrong, improving user experience.
- **Responsiveness**: The website's responsiveness on various devices and screen sizes is vital for user satisfaction. Test it thoroughly.
- **Security**: Ensure your API key is kept confidential and not exposed in your code or repository.

## Technologies Used

-HTML5
-CSS3
-JavaScript (pure javascript)

## License and Credit

-RapidAPI
-<https://www.alphavantage.co/>

## Link to video explaining how this app works

-<https://drive.google.com/file/d/15tHDf5qPoouoTL9s8auDa7g8bHcXkKah/view?usp=drive_link>

## Designer

- Shema bashyitsi pacifique
