# Crypto Currency App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a crypto currency application built using React and Remix.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#APIIntegration)
- [Form Handling](#FormHandling)
- [Search and Filtering](#SearchandFiltering)
- [Popup and Detail View](#PopupandDetailView)

## Features

- Fetches crypto currency data from the CoinCap API.
- Allows searching and filtering crypto currencies.
- Displays detailed information and provides the option to save the selected currency.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/SamirDanial/crypto

2. install dependencies

   ```shell
   cd crypto
   npm install

3. setup the database

    ```shell
    npx prisma db push

4. run the application

    ```shell
    npm run dev

5. if you want to see the database in browser run this command

    ```shell
    npx prisma studio

## Usage

- The Crypto Currency Application provides a user interface for searching and exploring cryptocurrency information. Users can enter a search term, select a search criterion (name or code), and click the "Search" button to filter the displayed cryptocurrencies based on the search criteria.

- The application retrieves cryptocurrency data from an external API and displays the fetched data in a grid layout. Each cryptocurrency item includes basic information such as name, current price, volume used in 24 hours, and rank. Users can click on the "Detail" button to view additional details about a specific cryptocurrency.

- Users can also save cryptocurrency information by clicking the "Save" button in the detail view. The saved data is submitted to the server using a form and stored in a database.

## Components
The Crypto Currency Application is structured using functional components from React. Here are the main components used in the application:

- Index: The main component that serves as the entry point of the application. It handles the rendering of other components and manages the state for search term, search results, and form data.

- Form: A component from the Remix Run library used for handling form submissions and sending data to the server.

- Card: A reusable component for rendering individual cryptocurrency items in the grid layout. It displays basic information and provides buttons for viewing details and saving.

## API Integration

The application integrates with the CoinCap API to fetch cryptocurrency data. It uses the axios library to make HTTP requests to the API endpoint. The loader function is responsible for fetching the data and passing it as props to the components.

## Form Handling

The application uses the Form component from Remix Run to handle form submissions. When the user clicks the "Save" button in the detail view, the form data is collected and sent to the server using a POST request. The server-side action function receives the form data, parses it, and stores it in the database using the db.cryptoCurrency.create method.

## Search and Filtering

The search functionality allows users to enter a search term and select a search criterion (name or code). When the user clicks the "Search" button, the application filters the displayed cryptocurrencies based on the search criteria. The filter function filters the data array based on the search term and updates the state to reflect the filtered results.

## Popup and Detail View

The application includes a popup and detail view feature. When the user clicks the "Detail" button on a cryptocurrency item, a popup window appears displaying detailed information about the selected cryptocurrency. The user can view information such as current price, volume used in 24 hours, rank, symbol, supply, marketCapUsd, and changePercent24Hr. The popup window also provides buttons to save the cryptocurrency and close the popup.