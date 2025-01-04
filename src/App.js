import React, { useEffect, useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
