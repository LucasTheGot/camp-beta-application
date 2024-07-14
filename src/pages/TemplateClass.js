import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is page 2!
        </p>
        <Link className="link" to="/">
          Page 1
        </Link>
      </header>
    </div>
  );
}

export default Home;
