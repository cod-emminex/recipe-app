import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Simulate loading delay

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
