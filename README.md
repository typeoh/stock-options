Lendesk Code Challenge: 

## Setup

First clone the repo / unzip file

### `npm i`

Install dependencies 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Main Component Structure

### `App`
This is a simple one-page app. The main App is the parent and state holder. This component has the logic for handling the API calls to the https://iextrading.com/developer/docs There are three states which handles loading (LoadingSpinner), error (passed through props to StockSearch), and okay which loads the regular component views.  

### `StockSearch`
Takes in a user input and queries the iextrading API for company details based off of the symbol entered. 

### `StockSelect`
Pulls a list of top stocks and places their symbols in a dropdown selection. 

### `StockDescription`
Dumb component that renders a view containing further company details. 

## Stack
- React
- Sass
- Bulma
- React CLI

