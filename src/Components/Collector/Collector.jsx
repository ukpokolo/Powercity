import React from 'react'
import './Collector.css'

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
                <button className="collect-fees">COLLECT FEES</button>
                </div>
                
                <div className="earn-protocol">
                    <div className="earn-protocol-top">
                        <h1>EARN Protocol</h1>
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
                    <h1>FLEX Protocol</h1>
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
                    <h1>Portal Bridge</h1>
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
                        <p className="cfc-bold">$0.00093009</p>
                        <p className="collector-text">PulseChain Native</p>
                    </div>

                </div>
                <div className="collector-first-card">
                    <div className="cfc-left">
                        <h1>WATT Price</h1>
                        <p className="cfc-bold">$0.00093009</p>
                        <p className="collector-text">POWERCITY Token</p>
                    </div>
                    <hr className='collector-hr' />
                    <div className="cfc-right">
                        <h1>PLS Price</h1>
                        <p className="cfc-bold">$0.00093009</p>
                        <p className="collector-text">PulseChain Native</p>
                    </div>

                </div>
                <div className="collector-second-card">
                    <div className="cfc-left">
                        <p className="csc-text">Gas Price</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                    </div>
                    <div className="cfc-right">
                        <p className="csc-text">232,977</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                    </div>

                </div>
                <h1 className='collector-head'>Your Wallet</h1>
                <p className='collector-text'>The CORE assets currently in your wallet</p>
                <div className="collector-second-card">
                    <div className="cfc-left">
                        <p className="csc-text">Gas Price</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                    </div>
                    <div className="cfc-right">
                        <p className="csc-text">232,977</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                        <p className="csc-text">Market Cap</p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Collector