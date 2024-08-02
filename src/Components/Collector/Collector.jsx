import React from 'react'
import './Collector.css'
import earn_logo from '../assets/earn-logo-dark.png'
import flex_logo from '../assets/flex-logo-dark.png'
import portalx_logo from '../assets/earn-logo-dark.png'
import amplifier_logo from '../assets/amp-ll-logo-dark.png'

function Collector() {
  return (
    <div className='collector'>
        <div className="collector-con">
            <div className="collector-left">
                <div className="collector-link">
                    <p style={{textDecoration: 'Underline'}}>Home</p>
                    <p>Reward Collector</p>
                </div>
                <h1 className='collector-head'>Reward Collector</h1>
                <p className="collector-text">Execute a Collect Fees transaction, collecting accumulated fees from the POWERCITY Ecosystem of dApps into the CORE staking Rewards Pool for WATT stakers to claim. Use the 'Collect Fees' to instantly collect any pending fees!</p>
                <div className="collect-btn">
                <button className="collect-fees"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"></path></svg><span>COLLECT FEES</span></button>
                </div>
                
                <div className="earn-protocol">
                    <div className="earn-protocol-top">
                        <h1>EARN Protocol</h1>
                        <img src={earn_logo} alt="" />
                    </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Fees Collected</th>
                                <th>Fees Pending</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>PXDC Stable Token (PXDC)</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>PulseX (PLSX)</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="earn-protocol">
                <div className="earn-protocol-top">
                        <h1>EARN Protocol</h1>
                        <img src={earn_logo} alt="" />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Fees Collected</th>
                                <th>Fees Pending</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>HEXDC Stable Token (HEXDC)</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>HeX (HEX)</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="earn-protocol">
                <div className="earn-protocol-top">
                        <h1>EARN Protocol</h1>
                        <img src={earn_logo} alt="" />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Fees Collected</th>
                                <th>Fees Pending</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Wrapped Pulse (WPLS)</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>PulseX (PLSX)+</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="collector-right">
                <h1 className='collector-head'>Statistics</h1>
                <p className="collector-text">Live CORE/PulseChain Statistics</p>
                <div className="collector-first-card">
                    <div className="cfc-left">
                        <h1>WATT Price</h1>
                        <p className="cfc-bold">$0.00093009</p>
                        <p className="collector-text">POWERCITY Token</p>
                    </div>
                    <hr className='collector-hr' />
                    <div className="cfc-right">
                        <h1>PLS Price</h1>
                        <p className="cfc-bold">$0.00004426</p>
                        <p className="collector-text">PulseChain Native</p>
                    </div>

                </div>
                <div className="collector-first-card">
                    <div className="cfc-left">
                        <h1>PLSX Price</h1>
                        <p className="cfc-bold">$0.00002502</p>
                        <p className="collector-text">PulseX Token</p>
                    </div>
                    <hr className='collector-hr' />
                    <div className="cfc-right">
                        <h1>PLP Price</h1>
                        <p className="cfc-bold">$0.00040114</p>
                        <p className="collector-text">WATT/PLS Pool Token</p>
                    </div>

                </div>
                <div className="collector-second-card">
  <table className='statistics-table'>
    <tbody>
      <tr>
        <td className="csc-text">Gas Price</td>
        <td className="csc-text">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
          </span>
          428,977
        </td>
      </tr>
      <tr>
        <td className="csc-text">Market Cap</td>
        <td className="csc-text">$2,082,993</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total WATT Locked 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">2,234,070,745</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total PLP Locked 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">344,332,418</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total WATT Circulating 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">208,455,625</td>
      </tr>
      <tr>
        <td className="csc-text">
          Total AMP Supply 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">75,403</td>
      </tr>
      <tr>
        <td className="csc-text">
          Reward Pool 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
          </span>
        </td>
        <td className="csc-text">$188,634</td>
      </tr>
    </tbody>
  </table>
</div>

                <h1 className='collector-head'>Your Wallet</h1>
                <p className='collector-text'>The CORE assets currently in your wallet</p>
                <div className="collector-second-card">
  <table className='statistics-table'>
    <tbody>
      <tr>
        <td className="statistics-text">WATT Balance</td>
        <td className="statistics-text">0 <span className="grey">WATT</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PLP Balance <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></td>
        <td className="statistics-text">0 <span className="grey">PLP</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PLS Balance</td>
        <td className="statistics-text">0 <span className="grey">PLS</span></td>
      </tr>
      <tr>
        <td className="statistics-text">WPLS Balance</td>
        <td className="statistics-text">0 <span className="grey">WPLS</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PLSX Balance</td>
        <td className="statistics-text">0 <span className="grey">PLSX</span></td>
      </tr>
      <tr>
        <td className="statistics-text">PXDC Balance</td>
        <td className="statistics-text">0 <span className="grey">PXDC</span></td>
      </tr>
      <tr>
        <td className="statistics-text">HEXDC Balance</td>
        <td className="statistics-text">0 <span className="grey">HEXDC</span></td>
      </tr>
      <tr>
        <td className="statistics-text">HEX Balance</td>
        <td className="statistics-text">0 <span className="grey">HEX</span></td>
      </tr>
      <tr>
        <td className="statistics-text">USDL Balance</td>
        <td className="statistics-text">0 <span className="grey">USDL</span></td>
      </tr>
      <tr>
        <td className="statistics-text">LOAN Balance</td>
        <td className="statistics-text">0 <span className="grey">LOAN</span></td>
      </tr>
      <tr>
        <td className="statistics-text">NFT total</td>
        <td className="statistics-text">0 <span className="grey">NFT(s)</span></td>
      </tr>
      <tr>
        <td className="statistics-text">NFT(s) with rewards <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></td>
        <td className="statistics-text">0 <span className="grey">NFT(s)</span></td>
      </tr>
      <tr>
        <td className="statistics-text">Your % of the Pool <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></td>
        <td className="statistics-text">0 <span className="grey">%</span></td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
            
        </div>
    </div>
  )
}

export default Collector