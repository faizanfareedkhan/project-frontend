// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000') // Update the URL to your backend endpoint
      .then((response) => response.text())
      .then((data) => setMessage(`${new Date().toLocaleString()} ${data}`))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
