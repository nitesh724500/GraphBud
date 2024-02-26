const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy data to simulate companies
let companies = [];

// Endpoint to get all companies
app.get('/companies', (req, res) => {
  res.json(companies);
});

// Endpoint to add a new company
app.post('/company', (req, res) => {
  const newCompany = req.body;
  // You may want to add validation or data processing here

  // Simulating adding a company by assigning a unique ID
  newCompany.id = companies.length + 1;
  companies.push(newCompany);

  res.status(201).json(newCompany);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
