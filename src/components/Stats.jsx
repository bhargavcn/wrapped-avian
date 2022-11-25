import React from 'react'
import { useEffect, useState } from 'react'
import wavn from '../wavn.png'

export default function Stats() {

  const [stats, setStats] = useState({});

    useEffect(() => {
getsupply();
    }, [])

    const getsupply = async () => {
        const api = await fetch('https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=0x752DC265EAf6Da2Db0F8e4a32D5596D3f18e8701&apikey=CCGV5DGNUUP6PP61WIE6UEBCATWXBXVAJ1')
        const data = await api.json();
        setStats(data);
    }
    
  return (
    <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Supply</div>
    <div className="stat-value text-primary">{stats.result / 1000000000000000000}</div>
    <div className="stat-value text-primary"></div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Holders</div>
    <div className="stat-value text-secondary">160+</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={wavn} />
        </div>
      </div>
    </div>
    <div className="stat-value">820+</div>
    <div className="stat-title">Transfers</div>
  </div>
  
</div>
  )
}
