import React, { useState, useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../Navbar/Navbar.css';
import './WattPrice.css'; // Import the new CSS file

import { ThemeContext } from '../../App';

function RewardPool() {

  const { theme } = useContext(ThemeContext);

  
  const [timeInterval, setTimeInterval] = useState('minutes');

  const generateTimeSeriesData = () => {
    const now = new Date();
    const data = [];
    let interval;

    switch (timeInterval) {
      case 'hours':
        interval = 2 * 3600000; // 2 hours in milliseconds
        for (let i = 0; i < 12; i++) {
          const time = new Date(now.getTime() - i * interval);
          const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          data.push({
            name: formattedTime,
            Total: 165000 + Math.floor(Math.random() * 1000)
          });
        }
        break;
      case 'days':
        interval = 24 * 3600000; // 24 hours in milliseconds
        for (let i = 0; i < 7; i++) {
          const time = new Date(now.getTime() - i * interval);
          const day = time.getDate();
          const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                         (day % 10 === 2 && day !== 12) ? 'nd' :
                         (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
          const formattedDay = `${day}${suffix}`;
          data.push({
            name: formattedDay,
            Total: 165000 + Math.floor(Math.random() * 1000)
          });
        }
        break;
      case 'minutes':
      default:
        interval = 3 * 60000; // 3 minutes in milliseconds
        for (let i = 0; i < 35; i++) {
          const time = new Date(now.getTime() - i * interval);
          const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          data.push({
            name: formattedTime,
            Total: 165000 + Math.floor(Math.random() * 1000)
          });
        }
        break;
    }

    return data.reverse();
  };

  const chartdata = generateTimeSeriesData();

  // Update formatYAxis function for new scale
  const formatYAxis = (tickItem) => {
    if (tickItem === 0) return '$0';
    if (tickItem === 65000) return '$65k';
    if (tickItem === 130000) return '$130k';
    if (tickItem === 249000) return '$249k';
    return tickItem;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`Total: $${payload[0].value.toFixed(6)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="reward-pool">
      <div className="reward-pool-header">
        <h1 className='dashboard-header'>Reward Pool</h1>
        <p className="dashboard-text">The rewards that have been scheduled for distribution.</p>
        <div className="pool-tab">
          <ul style={{ display: 'flex' }}>
            <li onClick={() => setTimeInterval('minutes')} className={timeInterval === 'minutes' ? 'active' : ''}>Minutes</li>
            <li onClick={() => setTimeInterval('hours')} className={timeInterval === 'hours' ? 'active' : ''}>Hours</li>
            <li onClick={() => setTimeInterval('days')} className={timeInterval === 'days' ? 'active' : ''}>Days</li>
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
                  <stop offset="0%" stopColor={theme === "dark" ? "#395284" : "#9BBAF6"}  stopOpacity={theme === "dark" ? .5 : 1} />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={theme === "dark" ? .1 : 1} />
                </linearGradient>
                
              </defs>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11 }}
                tickFormatter={(value) => value.replace(/(AM|PM)/, '')} // Remove AM/PM
              />
              <YAxis
                tick={{ fontSize: 11 }}
                tickFormatter={formatYAxis}
                domain={[0, 249000]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="Total"
                stroke="#9BBAF6"
                fill={`url(${document.body.classList.contains('dark') ? '#colorTotalDark' : '#colorTotal'})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default RewardPool;
