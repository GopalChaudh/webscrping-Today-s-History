﻿# webscrping-Today-s-History

---

# Wikipedia Scraper API with Express

This Node.js application serves as an API to scrape data from Wikipedia's "On this day" page and retrieve information about historical events, births, and deaths for the current date.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This application utilizes Express, Request, Cheerio, and CORS to scrape data from Wikipedia's "On this day" page and present it through an API endpoint. It fetches information about historical events, births, and deaths for the current date.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/wiki-scraper-api.git`
2. Move into the project directory: `cd wiki-scraper-api`
3. Install dependencies: `npm install`

## Usage

Start the application:

```bash
npm start
```

This will launch the application and set up the API endpoint.

## API Endpoint

### `/api`

- **Description:** Retrieves historical events, births, and deaths for the current date from Wikipedia's "On this day" page.
- **Method:** GET
- **Response:** JSON object containing arrays of events and related details.

## Technologies Used

- Express: Web server framework for Node.js.
- Request: Simplified HTTP client for making requests.
- Cheerio: HTML parsing and manipulation.
- CORS: Cross-Origin Resource Sharing middleware for enabling cross-origin requests.

## Contributing

Feel free to contribute to this project by following these steps:
- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Make changes and commit (`git commit -am 'Add feature'`)
- Push to the branch (`git push origin feature`)
- Create a pull request

## License

This project does not have a specified license at the moment.

---
