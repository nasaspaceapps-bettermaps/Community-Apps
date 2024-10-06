import React from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { XAxis, YAxis } from './CustomChartComponents';

const data = [
  { year: 2010, population: 2695598, temperature: 10 },
  { year: 2015, population: 2720546, temperature: 11 },
  { year: 2020, population: 2746388, temperature: 12 },
];

const DataVisualization: React.FC = () => {
  const temperature = useSelector((state: RootState) => state.community.temperature);

  const updatedData = [...data];
  updatedData[updatedData.length - 1] = { ...updatedData[updatedData.length - 1], temperature };

  return (
    <div className="w-full h-96 p-4">
      <h3 className="text-lg font-semibold mb-2">Population and Temperature Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={updatedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" xAxisId="year" />
          <YAxis yAxisId="population" />
          <YAxis yAxisId="temperature" orientation="right" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="#8884d8" yAxisId="population" xAxisId="year" name="Population" />
          <Line type="monotone" dataKey="temperature" stroke="#82ca9d" yAxisId="temperature" xAxisId="year" name="Temperature (°C)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataVisualization;