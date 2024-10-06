import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateVariable } from '../slices/communitySlice';
import { RootState } from '../store';

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const { precipitation, temperature, pollution } = useSelector((state: RootState) => state.community);

  const handleChange = (variable: string, value: number) => {
    dispatch(updateVariable({ variable: variable as keyof RootState['community'], value }));
  };

  return (
    <div className="absolute top-4 right-4 bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">Environmental Controls</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="precipitation" className="block text-sm font-medium text-gray-700">
            Precipitation: {precipitation}mm
          </label>
          <input
            type="range"
            id="precipitation"
            min="0"
            max="100"
            value={precipitation}
            onChange={(e) => handleChange('precipitation', Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
            Temperature: {temperature}°C
          </label>
          <input
            type="range"
            id="temperature"
            min="-10"
            max="40"
            value={temperature}
            onChange={(e) => handleChange('temperature', Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="pollution" className="block text-sm font-medium text-gray-700">
            Pollution: {pollution}%
          </label>
          <input
            type="range"
            id="pollution"
            min="0"
            max="100"
            value={pollution}
            onChange={(e) => handleChange('pollution', Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;