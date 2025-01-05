import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setData({ message: "Hello, world!" });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
};

export default MyComponent;
