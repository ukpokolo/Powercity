import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className="welcome">
            <h1>Welcome to POWERCITY CORE</h1>
            <p>The CORE is the central staking platform for the $WATT Token 
                through which revenue collected from all the DApps in the POWERCITY 
                ecosystem can be shared with stakers. These staking rewards are distributed in 
                $WPLS and other tokens collected as fees by the ecosystem's DApps and services. 
                NOTE: Visit the utilities page to find and copy all CORE token contract addresses. 
                Here you can add them to your wallet or view them in the block explorer.</p>
                <div className="prices-con">
                  <div className="prices-box">
                    <h2>WATT Price</h2>
                    <p className="pb-bold">$0.00097090</p>
                    <p className="pb-text">The Price of one WATT token</p>
                  </div>
                  <div className="prices-box">
                    <h2>WATT Price</h2>
                    <p className="pb-bold">$0.00097090</p>
                    <p className="pb-text">The Price of one WATT token</p>
                  </div>
                  <div className="prices-box">
                    <h2>WATT Price</h2>
                    <p className="pb-bold">$0.00097090</p>
                    <p className="pb-text">The Price of one WATT token</p>
                  </div>
                  <div className="prices-box">
                    <h2>WATT Price</h2>
                    <p className="pb-bold">$0.00097090</p>
                    <p className="pb-text">The Price of one WATT token</p>
                  </div>
                  <div className="prices-box">
                    <h2>WATT Price</h2>
                    <p className="pb-bold">$0.00097090</p>
                    <p className="pb-text">The Price of one WATT token</p>
                  </div>
                  <div className="prices-box">
                    <h2>WATT Price</h2>
                    <p className="pb-bold">$0.00097090</p>
                    <p className="pb-text">The Price of one WATT token</p>
                  </div>
                </div>
                
        </div>
        <div className="instant-stake">
                  <h1>Instant Stake</h1>
                  <p>Looking to Stake your tokens immediately? Stake your PLP or WATT
                     tokens into an awesome NFT right here. You can also visit the stakes
                      or utilities pages for comprehensive management.
                  </p>
                  <div className="instant-stake-tab">
                    <ul>
                      <li>Stake WATT</li>
                      <li>Stake PLP</li>
                    </ul>
                    <div className="ist-search-head">

                    </div>
                    <input type="text" />
                    <div className="ist-search-buttom">
                      <div className="ist-sb-left">
                        <p>Your WATT Balance:</p>
                        <p>AMP Equivalent:</p>
                      </div>
                      <div className="ist-sb-right">
                        <p>0 WATT</p>
                        <p>0 AMP</p>
                      </div>
                    </div>
                    <button>STAKE NOW!</button>
                  </div>

                </div>
                <div className="reward-pool">
                  <h1>Reward Pool</h1>
                  <p>The rewards that have been scheduled for distribution.</p>
                  <div className="pool-tab">
                    <ul>
                      <li>Minutes</li>
                      <li>Hours</li>
                      <li>Days</li>
                      <div className="pool-chart">
                        
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="reward-pool">
                  <h1>Reward Pool</h1>
                  <p>The rewards that have been scheduled for distribution.</p>
                  <div className="pool-tab">
                    <ul>
                      <li>Minutes</li>
                      <li>Hours</li>
                      <li>Days</li>
                      <div className="pool-chart">

                      </div>
                    </ul>
                  </div>
                </div>
                <div className="reward-pool">
                  <h1>Reward Pool</h1>
                  <p>The rewards that have been scheduled for distribution.</p>
                  <div className="pool-tab">
                    <ul>
                      <li>Minutes</li>
                      <li>Hours</li>
                      <li>Days</li>
                      <div className="pool-chart">

                      </div>
                    </ul>
                  </div>
                </div>
    </div>
  )
}

export default Dashboard