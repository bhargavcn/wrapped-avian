import React from 'react';
import Home from './pages/Home';
import Wrap from './pages/Wrap';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
       <Pages />
      </BrowserRouter>
     </div>
  );
}

export default App;
