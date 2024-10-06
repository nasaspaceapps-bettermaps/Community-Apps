import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const InfoPanel: React.FC = () => {
  const selectedNeighborhood = useSelector((state: RootState) => state.community.selectedNeighborhood);

  return (
    <div className="w-1/4 bg-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Neighborhood Info</h2>
      {selectedNeighborhood ? (
        <div>
          <h3 className="text-lg font-semibold">{selectedNeighborhood}</h3>
          {/* Add more neighborhood information here */}
        </div>
      ) : (
        <p>Select a neighborhood on the map to view details.</p>
      )}
    </div>
  );
};

export default InfoPanel;