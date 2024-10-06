import React from 'react';

interface MapInfoProps {
  latitude: number;
  longitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
}

const MapInfo: React.FC<MapInfoProps> = ({ latitude, longitude, zoom, pitch, bearing }) => {
  return (
    <div className="absolute top-0 left-0 bg-white bg-opacity-75 p-2 m-2 rounded shadow">
      <p className="text-sm font-mono">
        Lat: {latitude.toFixed(4)}, Lon: {longitude.toFixed(4)}
      </p>
      <p className="text-sm font-mono">
        Zoom: {zoom.toFixed(2)}
      </p>
      <p className="text-sm font-mono">
        Pitch: {pitch.toFixed(2)}°, Bearing: {bearing.toFixed(2)}°
      </p>
    </div>
  );
};

export default MapInfo;