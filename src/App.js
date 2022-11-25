import React from 'react';
import Home from './pages/Home';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
       <Home />
      
     </div>
  );
}

export default App;

// export const getStaticProps = async () => {
//   const res = await fetch('https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=0x752DC265EAf6Da2Db0F8e4a32D5596D3f18e8701')
//   const supply = await res.json()
//   return {
//     props: {
//       supply
//     }
//   }
// }