import React, {  useState } from 'react';





function Stake() {

  const [activeTabInstantStake, setActiveTabInstantStake] = useState('watt'); // Default to 'watt' tab 
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
                <div className="stake-space"></div>
                <div className="stake-space"></div>

            </div>
            <div className="stake-right">
            <div className="instant-stake">
      <h1 className='dashboard-header'>Instant Stake</h1>
      <p className='dashboard-text'>
        Looking to stake your tokens immediately? Stake your PLP or WATT
        tokens into an awesome NFT right here. You can also visit the stakes
        or <span className='underline'>utilities</span> pages for comprehensive management.
      </p>
      <div className="instant-stake-tab">
        <ul>
          <li
            className={activeTabInstantStake === 'watt' ? 'active' : ''}
            onClick={() => setActiveTabInstantStake('watt')}
          >
            Stake WATT
          </li>
          <li
            className={activeTabInstantStake === 'plp' ? 'active' : ''}
            onClick={() => setActiveTabInstantStake('plp')}
          >
            Stake PLP
          </li>
        </ul>
        <div className="ist-bottom">
          <div className="ist-search-head">
            <p>{activeTabInstantStake === 'watt' ? 'WATT Amount' : 'PLP Amount'}</p>
            <p>$0</p>
          </div>
          <input type="text" />
          <div className="ist-search-bottom">
            <div className="ist-sb-left">
              <p>{activeTabInstantStake === 'watt' ? 'Your WATT Balance:' : 'Your PLP Balance:'}</p>
              <p>AMP Equivalent:</p>
              <p>{activeTabInstantStake === 'watt' ? '' : 'WATT Equivalent'}</p>
            </div>
            <div className="ist-sb-right">
              <p>{activeTabInstantStake === 'watt' ? '0 WATT' : '0 PLP'}</p>
              <p>0 AMP</p>
              <p>{activeTabInstantStake === 'watt' ? '' : '0 WATT'}</p>

            </div>
          </div>
          <button>STAKE NOW!</button>
        </div>
      </div>
    </div>

            </div>
        </div>

    </div>
  )
}

export default Stake