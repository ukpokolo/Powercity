import React, {  useState } from 'react';
import './Stake.css'
import watt_logo from '../assets/watt.svg'


function Stake() {

  const [activeTabCreateStake, setActiveTabCreateStake] = useState('watt'); // Default to 'watt' tab 
  const [isSortingActive, setIsSortingActive] = useState(false);

  const handleSortingClick = () => {
    setIsSortingActive(!isSortingActive);
  };

  const priceData = [
    {
      head1: 'WATT Price',
      head2: 'PLS Price',
      wattPrice: '$0.00093009',
      wattText: 'POWERCITY Token',
      plsPrice: '$0.00004426',
      plsText: 'PulseChain Native',
    },
    {
      head1: 'PLSX Price',
      head2: 'PLP Price',
      wattPrice: '$0.00002502',
      wattText: 'PulseX Token',
      plsPrice: '$0.00040114',
      plsText: 'WATT/PLS Pool Token',
    },
    // Add more items as needed
  ];

  return (
    <div className='stake'>
        <div className="stake-con">
            <div className="stake-left">
                <h1 className="stake-head">Stakes</h1>
                <p className="stake-text">Manage your staked WATT and PLP NFTs. These receipt NFTs allow staked $WATT to be transferred or traded without having to unstake the tokens. Whichever wallet holds the NFT can claim staking rewards and unstake the $WATT tokens.</p>
                <div className="sort-btn">
                  <div className={`sorting ${isSortingActive ? 'active' : ''}`} onClick={handleSortingClick}>
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path></svg>
                  SORT</button>
                  <ul>
                    <li>NFT ID <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span></li>
                    <li>WATT Balance <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span></li>
                    <li>AMP Balance <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span></li>
                    <li>PLP Balance <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span></li>
                    <li>Has Rewards <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path></svg></span></li>
                  </ul>
                  </div>
                  
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
          <div className="stake-search">
          <input type="text" />
          <img src={watt_logo} alt="" />
          </div>
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
              <div className="stake-container">
      {priceData.map((data, index) => (
        <div key={index} className="stake-first-card">
          <div className="sfc-left">
            <h1>{data.head1}</h1>
            <p className="sfc-bold">{data.wattPrice}</p>
            <p className="stake-text">{data.wattText}</p>
          </div>
          <hr className='stake-hr' />
          <div className="sfc-right">
            <h1>{data.head2}</h1>
            <p className="sfc-bold">{data.plsPrice}</p>
            <p className="stake-text">{data.plsText}</p>
          </div>
        </div>
      ))}
    </div>
                <div className="stake-second-card">
                    <div className="sfc-left">
                        <p className="ssc-text">Gas Price</p>
                        <p className="ssc-text">Market Cap</p>
                        <p className="ssc-text">Total WATT Locked <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></p>
                        <p className="ssc-text">Total PLP Locked <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></p>
                        <p className="ssc-text">Total WATT Circulating <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></p>
                        <p className="ssc-text">Total AMP Supply <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></p>
                        <p className="ssc-text">Reward Pool <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-400 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></span></p>
                    </div>
                    <div className="sfc-right">
                        <p className="ssc-text"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 tooltipicon"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg></span>428,977</p>
                        <p className="ssc-text">$2,082,993</p>
                        <p className="ssc-text">2,234,070,745</p>
                        <p className="ssc-text">344,332,418</p>
                        <p className="ssc-text">208,455,625</p>
                        <p className="ssc-text">75,403</p>
                        <p className="ssc-text">$188,634</p>
                    </div>

                </div>
                <h1 className='stake-head'>Your Wallet</h1>
                <p className='stake-text'>The CORE assets currently in your wallet</p>
                <div className="stake-second-card">
                    <div className="sfc-left">
                        <p className="ssc-text">WATT Balance</p>
                        <p className="ssc-text">PLP Balance</p>
                        <p className="ssc-text">PLS Balance</p>
                        <p className="ssc-text">WPLS Balance</p>
                        <p className="ssc-text">PLSX Balance</p>
                        <p className="ssc-text">PXDC Balance</p>
                        <p className="ssc-text">HEXDC Balance</p>
                        <p className="ssc-text">HEX Balance</p>
                        <p className="ssc-text">USDL Balance</p>
                        <p className="ssc-text">LOAN Balance</p>
                        <p className="ssc-text">NFT total</p>
                        <p className="ssc-text">NFT(s) with rewards</p>
                        <p className="ssc-text">Your % of the Pool </p>
                        
                    </div>
                    <div className="sfc-right">
                        <p className="ssc-text">0 <span className='grey'>WATT</span></p>
                        <p className="ssc-text">0 <span className='grey'>PLP</span></p>
                        <p className="ssc-text">0 <span className='grey'>PLS</span></p>
                        <p className="ssc-text">0 <span className='grey'>WPLS</span></p>
                        <p className="ssc-text">0 <span className='grey'>PLSX</span></p>
                        <p className="ssc-text">0 <span className='grey'>PXDC</span></p>
                        <p className="ssc-text">0 <span className='grey'>HEXDC</span></p>
                        <p className="ssc-text">0 <span className='grey'>HEX</span></p>
                        <p className="ssc-text">0 <span className='grey'>USDL</span></p>
                        <p className="ssc-text">0 <span className='grey'>LOAN</span></p>
                        <p className="ssc-text">0 <span className='grey'>NFT(s)</span></p>
                        <p className="ssc-text">0 <span className='grey'>NFT(s)</span></p>
                        <p className="ssc-text">0 <span className='grey'>%</span></p>
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