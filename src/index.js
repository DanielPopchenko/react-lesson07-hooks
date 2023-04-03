import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import PokemonsView from './PokemonsView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <PokemonsView /> */}
  </React.StrictMode>,
);
