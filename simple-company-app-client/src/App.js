import React, { useState } from 'react';

function App() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', location: '' });
  const [error, setError] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewCompany(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newCompany.name || !newCompany.location) {
      setError('Please enter both name and location.');
      return;
    }

    // Generate a unique ID for the new company (this is just a simple approach)
    const id = companies.length + 1;

    // Create a new company object
    const newCompanyObject = {
      id: id,
      name: newCompany.name,
      location: newCompany.location
    };

    // Add the new company to the list of companies
    setCompanies(prevCompanies => [...prevCompanies, newCompanyObject]);

    // Clear the input fields and error message
    setNewCompany({ name: '', location: '' });
    setError(null);
  };

  return (
    <div className="App">
      <style>
        {`
          .App {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .company-form {
            margin-bottom: 20px;
          }
          
          .input-field {
            width: calc(50% - 10px);
            margin-right: 10px;
            padding: 8px;
            font-size: 16px;
          }
          
          .submit-btn {
            padding: 8px 16px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
          }
          
          .error-message {
            color: red;
          }
          
          .added-company-heading {
            margin-top: 20px;
          }
          
          .company-table {
            width: 100%;
            border-collapse: collapse;
          }
          
          .company-table th, .company-table td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          .company-table th {
            background-color: #f2f2f2;
            font-weight: bold;
            text-align: left;
          }
        `}
      </style>
      <h1>Companies</h1>
      <form onSubmit={handleSubmit} className="company-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCompany.name}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCompany.location}
          onChange={handleInputChange}
          className="input-field"
        />
        <div style={{ display: 'block' }}>
          <button type="submit" className="submit-btn">Add Company</button>
        </div>
      </form>
      {error && <p className="error-message">Error: {error}</p>}
      <h2 className="added-company-heading">Newly Added Company:</h2>
      <table className="company-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
