// components/WattPrice.js
import React, { useState , useContext} from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../Navbar/Navbar.css';
import { ThemeContext } from '../../App';

function WattPrice() {
  const { theme } = useContext(ThemeContext);
  
  const [timeInterval, setTimeInterval] = useState('minutes');

  const generateTimeSeriesData = () => {
    const now = new Date();
    const data = [];
    let interval;

    // Adjust the range and values
    const baseValue = 0.0006357564;

    switch (timeInterval) {
      case 'hours':
        interval = 2 * 3600000; // 2 hours in milliseconds
        for (let i = 0; i < 12; i++) {
          const time = new Date(now.getTime() - i * interval);
          const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(/(AM|PM)/, '');
          data.push({
            name: formattedTime,
            Total: baseValue + Math.random() * 0.00001 // Adding a small random value to vary the data
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
            Total: baseValue + Math.random() * 0.00001
          });
        }
        break;
      case 'minutes':
      default:
        interval = 3 * 60000; // 3 minutes in milliseconds
        for (let i = 0; i < 35; i++) {
          const time = new Date(now.getTime() - i * interval);
          const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(/(AM|PM)/, '');
          data.push({
            name: formattedTime,
            Total: baseValue + Math.random() * 0.00001
          });
        }
        break;
    }

    return data.reverse();
  };

  const chartdata = generateTimeSeriesData();

  // Update formatYAxis function for new scale
  const formatYAxis = (tickItem) => {
    if (tickItem === 0) return '0';
    if (tickItem === 0.000) return '0.000';
    if (tickItem === 0.001) return '0.001';
    if (tickItem === 0.002) return '0.002';
    return tickItem.toFixed(6); // Format to 6 decimal places for other values
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
        <h1 className='dashboard-header'>Watt Price</h1>
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
              />
              <YAxis
                tick={{ fontSize: 11 }}
                tickFormatter={formatYAxis}
                domain={[0, 0.002]} // Adjust domain to match new scale
              />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="Total" stroke="#9BBAF6" fill="url(#colorTotal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default WattPrice;
