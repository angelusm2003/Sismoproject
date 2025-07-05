# Sismoproject

The development consists of 2 projects: `sismologia_app` (the backend) and `sismofront` (the frontend)

# Backend project

This is a backend project developed in Ruby. It provides an API to interact with sismic feature data.

## Features

- The API provides endpoints to get information about seismic features.
- Users can add comments to seismic features.

## Requirements

- Ruby
- Rails
- PostgreSQL database

## Installation

1. Clone the `sismologia_app` repository to your local machine.
2. Install the dependencies by running `bundle install`.
3. Configure the database in `config/database.yml`.
4. Run the database migrations with `rails db:migrate`.
5. Start the server with `rails server`.

## Usage

Once the server is running, you can interact with the API using tools like cURL or Postman.

Example endpoints:
- Get all features: `GET /api/features` (also accepts the parameters `mag_type` and `per_page`)
- Add a comment to a feature: `POST /api/features/:id/comments`

# Frontend Project

This is a frontend project developed in React to interact with the backend of a seismic feature tracking system.

## Description

This project provides a user interface to view seismic features and add comments to them. It uses React for the UI and consumes data from the backend via a REST API.

## Requirements

- Node.js
- npm
- The backend must be running beforehand

## Installation

1. Clone the `sismofront` repository to your local machine.
2. Open a terminal and navigate to the project folder.
3. Run `npm install` to install the project dependencies.
4. Configure the backend URL in the config file if needed.

## Usage

Once the dependencies are installed, you can start the application by running `npm start` or `yarn start`. This will launch the development server and open the application in your default browser.

The application will allow you to view seismic features and add comments to them. Use the "View Details" link to see the info for a feature and the "Comment" link to add a comment.

## License

This project is under the MIT License.
