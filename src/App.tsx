import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import InfoPanel from './components/InfoPanel';
import Controls from './components/Controls';
import ThreeDScene from './components/ThreeDScene';
import DataVisualization from './components/DataVisualization';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 relative">
              <MapComponent />
              <Controls />
            </div>
            <InfoPanel />
          </div>
          <div className="h-1/3 flex">
            <ThreeDScene />
            <DataVisualization />
          </div>
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;