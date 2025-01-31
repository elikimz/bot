import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const salesData = [
    { region: 'North America', sales: 250, profit: 50 },
    { region: 'Europe', sales: 300, profit: 100 },
    { region: 'Asia', sales: 200, profit: 30 },
    { region: 'Africa', sales: 150, profit: 20 },
    { region: 'Australia', sales: 180, profit: 40 },
];

const SalesBarChart = () => (
  <div style={{ height: '400px', width: '100%' }}>
    <ResponsiveBar
        data={salesData}
        keys={['sales', 'profit']}
        indexBy="region"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'set3' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Region',
            legendPosition: 'middle',
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount',
            legendPosition: 'middle',
            legendOffset: -40,
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
  </div>
);

export default SalesBarChart;
