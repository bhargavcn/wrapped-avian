import avian from "../avian.png";
import wavn from "../wavn.png";

import { FiArrowDown } from "react-icons/fi";
import { useState } from 'react';

import Nav from "../components/Nav";

function App() {

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <Nav />

      <div className="card w-96 bg-base-100 shadow-xl m-auto mt-24">
        <div className="card-body">
          <h1 className="text-center text-3xl">Wrap your Avian!</h1>

          <div className="form-control">

            <label className="label">
              <span className="label-text">Avian</span>
            </label>
            <label className="input-group">
              <span><img src={avian} alt="Picture of AVN"
                width="50px"
                height="50px" /></span>
              <div className="indicator">
                <span className="indicator-item badge">Required</span>
                <input type="text" placeholder="Enter" id="avn" className="input input-bordered" name="avian" onChange={handleChange} value={message} required />
              </div>
            </label>

            <div className="divider"><FiArrowDown className="text-8xl" /></div>

            <label className="label">
              <span className="label-text">WAVN</span>
            </label>
            <label className="input-group">
              <span><img
                src={wavn}
                alt="Picture of WAVN"
                width="50px"
                height="50px"
              /></span>

              <input type="text" placeholder={message} id="wavn" className="input input-bordered" name="wavn" disabled />

            </label>

            <span className="mt-4 text-center">Wallet Address</span>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required />

            <label htmlFor="my-modal-6" className="btn modal-button mt-4">WRAP</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">

                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">I Have Sent!</label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
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