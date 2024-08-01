import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import './Dashboard.css';
import watt_logo from '../assets/watt.svg'

function Dashboard() {
  const generateData = (interval) => {
    const data = [];
    const now = new Date();
    for (let i = 0; i < 20; i++) {
      const time = new Date(now.getTime() - i * interval * 60000);
      const hours = time.getHours();
      const minutes = time.getMinutes().toString().padStart(2, '0');
      const formattedHours = hours % 12 || 12;
      const formattedTime = `${formattedHours}:${minutes}`;

      data.unshift({
        name: interval === 1440 ? `${time.getDate()}${['th', 'st', 'nd', 'rd'][(time.getDate() % 10)] || 'th'}` : formattedTime, // Use date format for days
        total: 180000 + Math.floor(Math.random() * 1000), // Ensure total stays between 180,000 and 189,999
        pv: 2400,
        amt: 2400,
        'Locked WATT': 2234852786 + Math.floor(Math.random() * 100000000), // Add variation for Locked WATT
        'Locked LP': 342860585 + Math.floor(Math.random() * 10000000), // Add variation for Locked LP
        price: 0.00095175 + Math.random() * 0.00005 // Ensure price is very close to $0.00095175
      });
    }
    return data;
  };

  const [dataRewardPool, setDataRewardPool] = useState(generateData(3));
  const [dataWattPrice, setDataWattPrice] = useState(generateData(3));
  const [dataLockedWatt, setDataLockedWatt] = useState(generateData(3));

  const [activeTabInstantStake, setActiveTabInstantStake] = useState('watt'); // Default to 'watt' tab

  const [activeTabRewardPool, setActiveTabRewardPool] = useState('minutes');
  const [activeTabWattPrice, setActiveTabWattPrice] = useState('minutes');
  const [activeTabLockedWatt, setActiveTabLockedWatt] = useState('minutes');

  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataRewardPool(generateData(activeTabRewardPool === 'minutes' ? 3 : (activeTabRewardPool === 'hours' ? 60 : 1440)));
      setDataWattPrice(generateData(activeTabWattPrice === 'minutes' ? 3 : (activeTabWattPrice === 'hours' ? 60 : 1440)));
      setDataLockedWatt(generateData(activeTabLockedWatt === 'minutes' ? 3 : (activeTabLockedWatt === 'hours' ? 60 : 1440)));
    }, 60000); // Update every minute to keep time current

    return () => clearInterval(interval);
  }, [activeTabRewardPool, activeTabWattPrice, activeTabLockedWatt]);

  useEffect(() => {
    setDataRewardPool(generateData(activeTabRewardPool === 'minutes' ? 3 : (activeTabRewardPool === 'hours' ? 60 : 1440)));
  }, [activeTabRewardPool]);

  useEffect(() => {
    setDataWattPrice(generateData(activeTabWattPrice === 'minutes' ? 3 : (activeTabWattPrice === 'hours' ? 60 : 1440)));
  }, [activeTabWattPrice]);

  useEffect(() => {
    setDataLockedWatt(generateData(activeTabLockedWatt === 'minutes' ? 3 : (activeTabLockedWatt === 'hours' ? 60 : 1440)));
  }, [activeTabLockedWatt]);

  const formatYAxisRewardPool = (tickItem) => {
    switch (tickItem) {
      case 0:
        return '$0';
      case 70000:
        return '$70k';
      case 140000:
        return '$140k';
      case 269000:
        return '$269k';
      default:
        return tickItem;
    }
  };

  const formatYAxisWattPrice = (tickItem) => {
    if (tickItem === 0) return '$0';
    if (tickItem === 0.00095175) return '$0.00095175';
    if (tickItem === 0.001) return '$0.001';
    if (tickItem === 0.002) return '$0.002';
    return tickItem.toFixed(6); // Format to 6 decimal places
  };

  const formatYAxisLockedWatt = (tickItem) => {
    if (tickItem === 0) return '0';
    if (tickItem === 850000000) return '850M';
    if (tickItem === 1700000000) return '1.7B';
    if (tickItem === 3400000000) return '3.4B';
    return tickItem;
  };

  const cardinal = curveCardinal.tension(0.2);

  const getXAxisInterval = () => {
    if (chartWidth > 800) return 0; // Show all labels on large charts
    if (chartWidth > 600) return 1; // Show every other label on medium charts
    return 2; // Show every third label on small charts
  };

  const chartSections = [
    {
      title: 'Reward Pool',
      description: 'The rewards that have been scheduled for distribution.',
      data: dataRewardPool,
      activeTab: activeTabRewardPool,
      setActiveTab: setActiveTabRewardPool,
      setData: setDataRewardPool,
      yAxisFormatter: formatYAxisRewardPool,
      tooltipFormatter: (value) => [`$${value.toLocaleString()}`, 'Total']
    },
    {
      title: 'WATT Price',
      description: 'The price of one WATT token over time.',
      data: dataWattPrice,
      activeTab: activeTabWattPrice,
      setActiveTab: setActiveTabWattPrice,
      setData: setDataWattPrice,
      yAxisFormatter: formatYAxisWattPrice,
      tooltipFormatter: (value) => [`$${value.toFixed(6)}`, 'Price'],
      domain: [0, 0.002] // Set Y-axis domain explicitly
    },
    {
      title: 'Locked Watt',
      description: 'The total number of WATT locked in staking.',
      data: dataLockedWatt,
      activeTab: activeTabLockedWatt,
      setActiveTab: setActiveTabLockedWatt,
      setData: setDataLockedWatt,
      yAxisFormatter: formatYAxisLockedWatt,
      tooltipFormatter: (value) => [`$${value.toLocaleString()}`, 'Locked WATT'],
      stacked: true
    }
  ];

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
          {[...Array(6)].map((_, i) => (
            <div className="prices-box" key={i}>
              <h2>WATT Price</h2>
              <h1 className="pb-bold">$0.00097090</h1>
              <p className="pb-text">The Price of one WATT token</p>
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
          <div className="dashboard-search">
          <input type="text" />
          <img src={watt_logo} alt="" />
          </div>
          
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

      {chartSections.map((section, index) => (
        <div className="reward-pool" key={index}>
          <h1 className='dashboard-header'>{section.title}</h1>
          <p className='dashboard-text'>{section.description}</p>
          <div className="pool-tab">
            <ul style={{ display: 'flex' }}>
              <li
                className={section.activeTab === 'minutes' ? 'active' : ''}
                onClick={() => section.setActiveTab('minutes')}
              >
                Minutes
              </li>
              <li
                className={section.activeTab === 'hours' ? 'active' : ''}
                onClick={() => section.setActiveTab('hours')}
              >
                Hours
              </li>
              <li
                className={section.activeTab === 'days' ? 'active' : ''}
                onClick={() => section.setActiveTab('days')}
              >
                Days
              </li>
            </ul>
            <div className="pool-chart" ref={chartContainerRef} style={{ background: 'white', padding: '10px', borderRadius: '10px' }}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={section.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DDE8FC" stopOpacity={1} />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" interval={getXAxisInterval()} tick={{ fontSize: 10 }} />
                  <YAxis 
                    domain={section.domain || (section.title === 'WATT Price' ? [0, 0.002] : (section.title === 'Locked Watt' ? [0, 3400000000] : [0, 269000]))} 
                    tickFormatter={section.yAxisFormatter} 
                    tick={{ fontSize: 10 }} 
                  />
                  <Tooltip formatter={section.tooltipFormatter} contentStyle={{ fontSize: 12 }} labelFormatter={() => ''} />
                  {section.stacked ? (
                    <>
                      <Area type={cardinal} dataKey="Locked WATT" stroke="#9BBAF6" fillOpacity={1} fill="#9BBAF6" stackId="1" />
                      <Area type={cardinal} dataKey="Locked LP" stroke="#82CA9D" fillOpacity={1} fill="#82CA9D" stackId="1" />
                    </>
                  ) : (
                    <Area type={cardinal} dataKey="total" stroke="#9BBAF6" fill="url(#colorTotal)" />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </div>
  );
}

export default Dashboard;
