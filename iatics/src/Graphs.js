import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

export function ChartGenerator() {
  const [chartType, setChartType] = useState('p3');
  const [chartData, setChartData] = useState('t:60,40');
  const [chartSize, setChartSize] = useState('700x190');
  const [sliceLabels, setSliceLabels] = useState('60$|40$');
  const [animateChart, setAnimateChart] = useState(false);
  const [gradientColors, setGradientColors] = useState('000fff');
  const [chartImage, setChartImage] = useState('');
  const [chdl, setChdl] = useState('40$|60$');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `https://image-charts.com/chart?cht=${chartType}&chd=${chartData}&chs=${chartSize}&chl=${sliceLabels}${animateChart ? '&chan' : ''}&chco=${gradientColors}&chdl=${chdl}`;
    setChartImage(apiUrl);
  };

  return (
    <>
    <nav><Link to='/'>{"<"}</Link></nav>
    <h1>Chart Generator</h1>
    <div id='megacon'>
      
      <form id='submitter' onSubmit={handleFormSubmit}>
        <label htmlFor="chartType">Chart Type:</label>
        <select id="chartType" value={chartType} onChange={(event) => setChartType(event.target.value)}>
          <option value="p3">3D Pie Chart</option>
          <option value="bvg">Vertical Grouped Bar Chart</option>
          <option value="bhg">Horizontal Grouped Bar Chart</option>
          <option value="bvs">Vertical Stacked Bar Chart</option>
          <option value="bhs">Horizontal Stacked Bar Chart</option>
        </select>
      
        <label htmlFor="chartData">Chart Data:</label>
        <input id="chartData" type="text" value={chartData} onChange={(event) => setChartData(event.target.value)} />
       
        <label htmlFor="chartSize">Chart Size:</label>
        <input id="chartSize" type="text" value={chartSize} onChange={(event) => setChartSize(event.target.value)} />
 
        <label htmlFor="sliceLabels">Slice Labels:</label>
        <input id="sliceLabels" type="text" value={sliceLabels} onChange={(event) => setSliceLabels(event.target.value)} />
        
        <label htmlFor="sliceLabels">Nomination:</label>
        <input id="sliceLabels" type="text" value={chdl} onChange={(event) => setChdl(event.target.value)} />
       
        <label htmlFor="animateChart">Animate Chart:</label>
        <input id="animateChart" type="checkbox" checked={animateChart} onChange={(event) => setAnimateChart(event.target.checked)} />
        
        <label htmlFor="gradientColors">Colors:</label>
        <input id="gradientColors" type="text" value={gradientColors} onChange={(event) => setGradientColors(event.target.value)} />
       
        <button type="submit">Generate Chart</button>
        
      </form>
        <div className='graph'>
        {chartImage && <img src={chartImage} alt="Chart" />}
        </div>
    </div>
    </>
  );
}