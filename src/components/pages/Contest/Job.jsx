import React, { useState } from 'react';

const Job = () => {
  const [domain, setDomain] = useState('');
  const [opportunities, setOpportunities] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&results_per_page=10&what=${domain}&content-type=application/json`);
      const data = await response.json();
      setOpportunities(data.results);
    } catch (error) {
      console.error('Error fetching job opportunities:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
      </form>
      <ul>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id} className="border-b border-gray-300 mb-4 pb-4">
            <h3 className="text-xl font-semibold">{opportunity.title}</h3>
            <p className="text-gray-600">{opportunity.company.display_name}</p>
            <p className="text-gray-600">{opportunity.location.display_name}</p>
            <p className="mt-2">{opportunity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
