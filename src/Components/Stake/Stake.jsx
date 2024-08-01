import React, {  useState } from 'react';
import './Stake.css'


function Stake() {

  const [activeTabCreateStake, setActiveTabCreateStake] = useState('watt'); // Default to 'watt' tab 
  return (
    <div className='stake'>
        <div className="stake-con">
            <div className="stake-left">
                <h1 className="stake-head">Stakes</h1>
                <p className="stake-text">Manage your staked WATT and PLP NFTs. These receipt NFTs allow staked $WATT to be transferred or traded without having to unstake the tokens. Whichever wallet holds the NFT can claim staking rewards and unstake the $WATT tokens.</p>
                <div className="sort-btn">
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path></svg>
                  SORT</button>
                  <div className='loading-svg'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 mt-4 text-blue-400 tooltipicon refresh active:h-7 active:w-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 mt-4 text-blue-400 tooltipicon refresh active:h-7 active:w-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></svg></div>
                  
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"></path></svg>                    MERGE NFTS</button>
                </div>
                <div className="stake-space">
                  <div className="stake-space-card">
                        <div className="ss-left"></div>
                        <div className="ss-right">
                            <div className="ssr-left">
                            <div className="ssr-short"></div>
                            <div className="ssr-long"></div>
                            <div className="ssr-long"></div>
                            <div className="ssr-short"></div>
                            </div>
                            <div className="ssr-right">
                            <div className="ssr-short"></div>
                            <div className="ssr-long"></div>
                            <div className="ssr-long"></div>
                            <div className="ssr-short"></div>
                            </div>
                        </div>
                  </div>
                </div>
                <div className="stake-space">
                <div className="stake-space-card">
                  <div className="ss-left"></div>
                  <div className="ss-right">
                    <div className="ssr-left">
                    <div className="ssr-short"></div>
                    <div className="ssr-long"></div>
                    <div className="ssr-long"></div>
                    <div className="ssr-short"></div>
                    </div>
                    <div className="ssr-right">
                    <div className="ssr-short"></div>
                    <div className="ssr-long"></div>
                    <div className="ssr-long"></div>
                    <div className="ssr-short"></div>
                    </div>
                    </div>
                  </div>
                  </div>

            </div>
            <div className="stake-right">
            <div className="stake-right-top">
            <div className="create-stake">
      <h1 className='stake-head'>Create Stake</h1>
      <p className='stake-text'>
        Looking to stake your tokens immediately? Stake your PLP or WATT
        tokens into an awesome NFT right here. You can also visit the stakes
        or <span className='underline'>utilities</span> pages for comprehensive management.
      </p>
      <div className="create-stake-tab">
        <ul>
          <li
            className={activeTabCreateStake === 'watt' ? 'active' : ''}
            onClick={() => setActiveTabCreateStake('watt')}
          >
            Stake WATT
          </li>
          <li
            className={activeTabCreateStake === 'plp' ? 'active' : ''}
            onClick={() => setActiveTabCreateStake('plp')}
          >
            Stake PLP
          </li>
        </ul>
        <div className="cst-bottom">
          <div className="cst-search-head">
            <p>{activeTabCreateStake === 'watt' ? 'WATT Amount' : 'PLP Amount'}</p>
            <p>$0</p>
          </div>
          <input type="text" />
          <div className="cst-search-bottom">
            <div className="cst-sb-left">
              <p>{activeTabCreateStake === 'watt' ? 'Your WATT Balance:' : 'Your PLP Balance:'}</p>
              <p>AMP Equivalent:</p>
              <p>{activeTabCreateStake === 'watt' ? '' : 'WATT Equivalent'}</p>
            </div>
            <div className="cst-sb-right">
              <p>{activeTabCreateStake === 'watt' ? '0 WATT' : '0 PLP'}</p>
              <p>0 AMP</p>
              <p>{activeTabCreateStake === 'watt' ? '' : '0 WATT'}</p>

            </div>
          </div>
          <button>STAKE NOW!</button>
        </div>
      </div>
    </div>
            </div>

              <div className="stake-right-bottom">

            <div className="statistics-stake">
              <h1 className="stake-head">Statistics</h1>
              <p className="stake-text">Live CORE/PulseChain Statistics</p>
              <div className="stake-first-card">
                    <div className="sfc-left">
                        <h1>WATT Price</h1>
                        <p className="sfc-bold">$0.00093009</p>
                        <p className="stake-text">POWERCITY Token</p>
                    </div>
                    <hr className='stake-hr' />
                    <div className="sfc-right">
                        <h1>PLS Price</h1>
                        <p className="sfc-bold">$0.00093009</p>
                        <p className="stake-text">PulseChain Native</p>
                    </div>

                </div>
                <div className="stake-first-card">
                    <div className="sfc-left">
                        <h1>WATT Price</h1>
                        <p className="sfc-bold">$0.00093009</p>
                        <p className="stake-text">POWERCITY Token</p>
                    </div>
                    <hr className='stake-hr' />
                    <div className="sfc-right">
                        <h1>PLS Price</h1>
                        <p className="sfc-bold">$0.00093009</p>
                        <p className="stake-text">PulseChain Native</p>
                    </div>

                </div>
                <div className="stake-second-card">
                    <div className="sfc-left">
                        <p className="ssc-text">Gas Price</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                    </div>
                    <div className="sfc-right">
                        <p className="ssc-text">232,977</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                    </div>

                </div>
                <h1 className='stake-head'>Your Wallet</h1>
                <p className='stake-text'>The CORE assets currently in your wallet</p>
                <div className="stake-second-card">
                    <div className="sfc-left">
                        <p className="ssc-text">Gas Price</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                    </div>
                    <div className="sfc-right">
                        <p className="ssc-text">232,977</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Market Cap</p>
                    </div>

                </div>
            
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Stake