# Request Header Parser Microservice

This project is a Request Header Parser Microservice built with Node.js and Express. The application provides details about the client's IP address, language, and software (user agent) based on the request headers.

## Live Demo

You can see a live demo of the application here: [Request Header Parser Microservice](https://request-header-parser.hackimtech.com)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/hackim18/Backend-Request-Header-Parser-Microservice
   cd Backend-Request-Header-Parser-Microservice
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create a .env file** in the root of the project and add the following line:

   ```sh
   PORT=3000
   ```

4. **Start the server**:
   ```sh
   npm start
   ```

The application will be running on http://localhost:3000.

## Usage

To use the Request Header Parser Microservice, you can make requests to the following endpoints:

## API Endpoints

1. **Root Endpoint**

   - URL: /
   - Method: GET
   - Description: Serves the homepage of the application.
   - Example: http://localhost:3000/

2. **Hello API**

   - URL: /api/hello
   - Method: GET
   - Description: Returns a greeting message in JSON format.
   - Example: http://localhost:3000/api/hello
   - Response:
     ```json
     {
       "greeting": "hello API"
     }
     ```

3. **Who Am I**
   - URL: /api/whoami
   - Method: GET
   - Description: Returns the client's IP address, language, and software (user agent) information based on the request headers.
   - Example: http://localhost:3000/api/whoami
   - Response:
     ```json
     {
       "ipaddress": "::1",
       "language": "en-US,en;q=0.9",
       "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
     }
     ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
