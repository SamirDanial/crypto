# Crypto Currency App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a crypto currency application built using React and Remix.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

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