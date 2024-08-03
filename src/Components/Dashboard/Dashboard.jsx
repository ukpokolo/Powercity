import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';
import watt_logo from '../assets/watt.svg';

function Dashboard() {
  const [timeInterval, setTimeInterval] = useState('minutes'); // State for time interval

  // Function to get ordinal suffix
  const getOrdinalSuffix = (day) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const lastDigit = day % 10;
    const suffix = (day >= 11 && day <= 13) ? suffixes[0] : suffixes[(lastDigit < 4) ? lastDigit : 0];
    return suffix;
  };

  // Generate data based on time interval
  const generateTimeSeriesData = () => {
    const now = new Date();
    const data = [];
    let interval;

    switch (timeInterval) {
      case 'hours':
        interval = 2 * 3600000; // 2 hours in milliseconds
        for (let i = 0; i < 12; i++) { // 12 time points for 24 hours
          const time = new Date(now.getTime() - i * interval);
          const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
          data.push({
            name: formattedTime,
            Total: 165000 + Math.floor(Math.random() * 1000)
          });
        }
        break;
      case 'days':
        interval = 24 * 3600000; // 24 hours in milliseconds
        for (let i = 0; i < 7; i++) { // 7 time points for 7 days
          const time = new Date(now.getTime() - i * interval);
          const day = time.getDate();
          const formattedDay = `${day}${getOrdinalSuffix(day)}`;
          data.push({
            name: formattedDay,
            Total: 165000 + Math.floor(Math.random() * 1000)
          });
        }
        break;
      case 'minutes':
      default:
        interval = 3 * 60000; // 3 minutes in milliseconds
        for (let i = 0; i < 35; i++) { // 35 time points
          const time = new Date(now.getTime() - i * interval);
          const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          data.push({
            name: formattedTime,
            Total: 165000 + Math.floor(Math.random() * 1000)
          });
        }
        break;
    }

    return data.reverse(); // to show recent times on the right
  };

  const chartdata = generateTimeSeriesData();

  const priceData = [
    { title: 'WATT Price', price: '$0.00064307', description: 'The Price of one WATT token.' },
    { title: 'Market Cap', price: '$1,571,590', description: 'Number of WATT multiplied by the market price.' },
    { title: 'Reward Pool', price: '$181,236.89', description: 'Total rewards that have been distributed.' },
    { title: 'Total WATT Locked in Staking', price: '$2,205,466,608', description: 'TVL $1,418,272.67' },
    { title: 'Total PLP Locked in Staking', price: '$355,037,889', description: 'TVL $119,482.56' },
    { title: 'Rewards Tokens', price: '7 Tokens', description: 'Tokens whitelisted for rewards: PXDC / WPLS / PLSX / LOAN USDL / HEXDC / HEX' },
  ];

  const formatYAxis = (tickItem) => {
    if (tickItem === 0) return '$0';
    if (tickItem === 65000) return '$65k';
    if (tickItem === 130000) return '$130k';
    if (tickItem === 249000) return '$249k';
    return tickItem;
  };

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
            tokens into an awesome NFT right here. You can also visit the stakes
            or <span className='underline'>utilities</span> pages for comprehensive management.
          </p>
          <div className="instant-stake-tab">
            <ul>
              <li className={'watt'}>Stake WATT</li>
              <li className={'plp'}>Stake PLP</li>
            </ul>
            <div className="ist-bottom">
              <div className="ist-search-head">
                <p>WATT Amount</p>
                <p>$0</p>
              </div>
              <div className="dashboard-search">
                <input type="text" />
                <img src={watt_logo} alt="" />
              </div>
              <div className="ist-search-bottom">
                <div className="ist-sb-left">
                  <p>Your WATT Balance:' : 'Your PLP Balance:</p>
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
        </div>

        <div className="reward-pool">
          <div className="reward-pool-header">
            <h1 className='dashboard-header'>Reward Pool</h1>
            <div className="pool-tab">
              <ul style={{ display: 'flex' }}>
                <li
                  onClick={() => setTimeInterval('minutes')}
                  className={timeInterval === 'minutes' ? 'active' : ''}
                >
                  Minutes
                </li>
                <li
                  onClick={() => setTimeInterval('hours')}
                  className={timeInterval === 'hours' ? 'active' : ''}
                >
                  Hours
                </li>
                <li
                  onClick={() => setTimeInterval('days')}
                  className={timeInterval === 'days' ? 'active' : ''}
                >
                  Days
                </li>
              </ul>
            </div>
            <div className="pool-chart">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={chartdata}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DDE8FC" stopOpacity={1} />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11 }} // Reduce font size
                    tickFormatter={(value) => value.replace(/(AM|PM)/, '')} // Remove AM/PM
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickFormatter={formatYAxis}
                    domain={[0, 249000]} // Adjust domain based on your data
                  />
                  <Tooltip />
                  <Area type="monotone" dataKey="Total" stroke="#9BBAF6" fill="url(#colorTotal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
