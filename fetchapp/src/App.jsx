import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);      // products array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/products');
        const json = await res.json();
        setData(json.products);   // products array
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getdata();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetch API</h1>
      {data.map((product) => (
        <div key={product.id}>
          <ul>
            <li><strong>{product.title}</strong></li>
            <li>{product.description}</li>
            <li>${product.price}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
