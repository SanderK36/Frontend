// src/App.js
import { useState } from 'react';
import './App.css';

function App() {
  const [tittel, setTittel] = useState('');
  const [completed, setCompleted] = useState(null); // NYTT: true/false
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const hentTodo = async () => {
    setLoading(true);
    setError('');
    setTittel('');
    setCompleted(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();

      await delay(2000); // 2 sekunder forsinkelse

      setTittel(data.title);
      setCompleted(data.completed); // ← Lagrer true/false

    } catch (err) {
      await delay(2000);
      setError('Oops, noe gikk galt!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Min Todo-oppgave</h1>

      <button
        onClick={hentTodo}
        disabled={loading}
        className={loading ? 'loading' : ''}
      >
        {loading ? 'Laster...' : 'Trykk heller!'}
      </button>

      {loading && <p className="laster">Laster...</p>}

      {tittel && <p className="tittel">{tittel}</p>}

      {completed !== null && !loading && !error && (
        <p className={completed ? 'ferdig' : 'ikke-ferdig'}>
          {completed ? 'Ferdig! Oppgaven er fullført' : 'Ferdig! Ikke fullført'}
        </p>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;