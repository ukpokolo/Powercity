// Dashboard.js
import React, {useState} from 'react';
import RewardPool from '../Chart/RewardPool';
import WattPrice from '../Chart/WattPrice'
import './Dashboard.css';
import watt_logo from '../assets/watt.svg';
import plp_logo from '../assets/plp.svg'
import LockedWatt from '../Chart/LockedWatt';

function Dashboard() {
  const priceData = [
    { title: 'WATT Price', price: '$0.00064307', description: 'The Price of one WATT token.' },
    { title: 'Market Cap', price: '$1,571,590', description: 'Number of WATT multiplied by the market price.' },
    { title: 'Reward Pool', price: '$181,236.89', description: 'Total rewards that have been distributed.' },
    { title: 'Total WATT Locked in Staking', price: '$2,205,466,608', description: 'TVL $1,418,272.67' },
    { title: 'Total PLP Locked in Staking', price: '$355,037,889', description: 'TVL $119,482.56' },
    { title: 'Rewards Tokens', price: '7 Tokens', description: 'Tokens whitelisted for rewards: PXDC / WPLS / PLSX / LOAN USDL / HEXDC / HEX' },
  ];

  const [activeTabInstantStake, setActiveTabInstantStake] = useState('watt'); // Default to 'watt' tab 

  return (
    <div className='dashboard'>
      <div className="dashboard-con">
        <div className="welcome">
          <h1 className='dashboard-header'>Welcome to POWERCITY CORE</h1>
          <p>
            The CORE is the central staking platform for the $WATT Token 
            through which revenue collected from all the DApps in the POWERCITY 
            ecosystem can be shared with stakers. These staking rewards are distributed in 
            $WPLS and other tokens collected as fees by the ecosystem's DApps and services. 
            NOTE: Visit the utilities page to find and copy all CORE token contract addresses. 
            Here you can add them to your wallet or view them in the block explorer.
          </p>
          <div className="prices-con">
            {priceData.map((item, index) => (
              <div className="prices-box" key={index}>
                <h2>{item.title}</h2>
                <h1 className="pb-bold">{item.price}</h1>
                <p className="pb-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="instant-stake">
          <h1 className='dashboard-header'>Instant Stake</h1>
          <p className='dashboard-text'>
            Looking to stake your tokens immediately? Stake your PLP or WATT
            tokens into an awesome NFT right here. You can also visit the <span className='underline' style={{paddingRight: '5px'}}>stakes</span>
              or <span className='underline'>utilities</span> pages for comprehensive management.
          </p>
          <div className="instant-stake-tab">
            <ul>
              <li className={activeTabInstantStake === 'watt' ? 'active' : ''}
              onClick={() => setActiveTabInstantStake('watt')}
              >
                Stake WATT
              </li>
              <li className={activeTabInstantStake === 'plp' ? 'active' : ''}
            onClick={() => setActiveTabInstantStake('plp')}
            
            >
              Stake PLP
              </li>
            </ul>
            <div className="ist-bottom">
              <div className="ist-search-head">
                <p>{activeTabInstantStake === 'watt' ? 'WATT Amount' : 'PLP Amount'}</p>
                <p className='stake-amount'>$0</p>
              </div>
              <div className="dashboard-search">
                <input type="text" />
                <img src={activeTabInstantStake === 'watt' ? watt_logo : plp_logo} alt="" />
              </div>
              <div className="ist-search-bottom">
                <div className="ist-sb-left">
                <p>{activeTabInstantStake === 'watt' ? 'Your WATT Balance:' : 'Your PLP Balance:'}</p>
              <p>AMP Equivalent:</p>
              <p>{activeTabInstantStake === 'watt' ? '' : 'WATT Equivalent'}</p>
                </div>
                <div className="ist-sb-right">
                <p className='stake-balance'>{activeTabInstantStake === 'watt' ? '0 WATT' : '0 PLP'}</p>
              <p className='stake-equivalent'>0 AMP</p>
              <p>{activeTabInstantStake === 'watt' ? '' : '0 WATT'}</p>
                </div>
              </div>
              <button>STAKE NOW!</button>
            </div>
          </div>
        </div>

        <RewardPool />
        <WattPrice />
        <LockedWatt/>
      </div>
    </div>
  );
}

export default Dashboard;
