import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
        .then(response => response.text())
        .then(text => setMessage(text));
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <p>{message}</p>
        </header>
      </div>
  );
}

export default App;
