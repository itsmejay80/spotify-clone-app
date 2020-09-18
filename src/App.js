import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login.jsx";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
