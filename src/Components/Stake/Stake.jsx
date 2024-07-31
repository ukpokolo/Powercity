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
                  <button>SORT</button>
                  <button>MERGE NFTS</button>
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