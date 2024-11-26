import React from 'react';
import ConversionForm from './components/ConversionForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-8 text-center">Number System Converter</h1>
        <ConversionForm />
      </header>
    </div>
  );
}

export default App;
