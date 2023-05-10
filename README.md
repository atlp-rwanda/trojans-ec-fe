# Trojans Store Ecommerce Project

Trojans Store is an ecommerce project worked on by trainees of Andela Cohort 25 of group trojans

## Badges

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/atlp-rwanda/trojans-ec-fe/tree/dev.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/atlp-rwanda/trojans-ec-fe/tree/dev)
[![Coverage Status](https://coveralls.io/repos/github/atlp-rwanda/trojans-ec-fe/badge.svg?branch=ch-setupTests-circleCi-coverage-184760033)](https://coveralls.io/github/atlp-rwanda/trojans-ec-fe?branch=ch-setupTests-circleCi-coverage-184760033)
[![Maintainability](https://api.codeclimate.com/v1/badges/0ac4248811966208ffa8/maintainability)](https://codeclimate.com/github/atlp-rwanda/trojans-ec-fe/maintainability)

## Description

This project is dealing with the frontend of an ecommerce project which has three types of users; a buyer, a seller and an admin. The app has a login functionality, products,a cart for buyer,notifications,a public chat, orders, sales; it has a dashboard according to what role the user has.

An admin can manage all users ; changing roles and making a user as active or inactive.
A seller should see all products that belong to him/her and can make a product as either available or not available
A buyer should be able to see all available products on the homepage add items to their cart, wish for a product, and track his/her orders.

## Key Technologies

- React JS
- Redux

## Installation

- Clone the repository and install

```bash
  git clone git@github.com:atlp-rwanda/trojans-ec-fe.git
```

- Go to folder and install dependencies

```bash
    cd trojans-ec-fe
    npm install
```

## Testing and Starting the server

### Testing

```bash
 npm run test
```

### Starting

```bash
 npm run start
```

## Environment Variables

Fill in your environment variables as you will find in `.env.example`

## Dependencies

Main dependencies used in the project are:

```bash
"react-redux": "^8.0.5",
"react-router-dom": "^6.10.0",
"react-chartjs-2": "^5.2.0",
"react-hook-form": "^7.43.9",
"tailwindcss": "^3.2.7",
"webpack": "^5.77.0",
"sass": "^1.60.0",
"@mui/material": "^5.12.2",
"axios": "^1.3.4",
```

### Test setup and execution

Unit testing on this app is setup using the following dependencies

```bash
 "jest": "^29.5.0",
 "jest-environment-jsdom": "^29.5.0",
```

## Project Preview

- [Trojans Store](https://trojans-ec-fe.vercel.app/)
