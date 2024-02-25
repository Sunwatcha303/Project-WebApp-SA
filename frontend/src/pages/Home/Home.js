import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await fetch('http://localhost:5000/movie/all');

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
          throw new Error('Request failed');
        }

        // Parse the JSON response
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your component with the fetched data
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
};

export default Home;