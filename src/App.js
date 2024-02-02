// Importera React och useState från react-biblioteket
import React, { useState } from 'react';
// Importera CSS-fil för styling
import './App.css';

// Funktion för att skapa en notifieringskomponent
function Notification({ message, onClose }) {
  return (
    <div className="notification">
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

// Huvudkomponenten för hela applikationen
function App() {
  // Tillståndsvariabler för email, lösenord, data, autentisering och notifiering
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [notification, setNotification] = useState(null);

  // Funktion för att hantera inloggning
  const handleLogin = async () => {
    try {
      // Skicka POST-förfrågan för inloggning
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // Hantera svar från servern
      const result = await response.json();

      // Kontrollera om inloggningen var framgångsrik
      if (!response.ok) {
        // Hantera olika fel och visa meddelanden
        if (response.status === 401 && result.error === 'Account locked') {
          setNotification('Account is locked. Please try again later.');
        } else {
          setNotification('Login failed. Please check your credentials and try again.');
        }
      } else {
        // Sparar access_token i session och sätter autentiserad till true
        sessionStorage.setItem('access_token', result.token);
        setAuthenticated(true);
      }
    } catch (error) {
      // Visa meddelande om inloggning misslyckas av något skäl
      setNotification('Login failed. Please try again later.');
    }
  };

  // Funktion för att logga ut
  const handleLogout = () => {
    // Ta bort access_token från session och sätter autentiserad till false
    sessionStorage.removeItem('access_token');
    setAuthenticated(false);
    setData(null);
  };

  // Funktion för att hämta data från backend
  const fetchData = async () => {
    try {
      // Hämta access_token från session
      const token = sessionStorage.getItem('access_token');
      // Skicka GET-förfrågan för att hämta data med access_token som header
      const response = await fetch('http://localhost:3002/data', {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Hantera svar från servern
      if (!response.ok) {
        // Hantera olika fel och visa meddelanden
        if (response.status === 401) {
          handleLogout();
          setNotification('Session expired. Please login again.');
          return;
        }
        setNotification('Failed to fetch data from the backend.');
      } else {
        // Om hämtningen är lyckad, uppdatera data med resultatet
        const result = await response.json();
        setData(result.data);
      }
    } catch (error) {
      // Visa felmeddelande om något går fel under hämtningen
      console.error('Error during fetch operation:', error);
      setNotification('Failed to fetch data. Please try again later.');
    }
  };

  // Funktion för att stänga notifieringen
  const closeNotification = () => {
    setNotification(null);
  };

  // Rendera hela komponenten
  return (
    <div className="App">
      <header className="App-header">
        {notification && <Notification message={notification} onClose={closeNotification} />}

        {isAuthenticated ? (
          <>
            {data ? <p>{data}</p> : <button className="fetch-data-button" onClick={fetchData}>Fetch Data</button>}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div className="login-container">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input-field" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input-field" />
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

// Exportera App-komponenten som standard export
export default App;
