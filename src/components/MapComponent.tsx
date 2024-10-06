import React, { useState, useEffect, useCallback } from 'react';
import Map, { Source, Layer, MapRef } from 'react-map-gl';
import { useDispatch } from 'react-redux';
import { setSelectedNeighborhood } from '../slices/communitySlice';
import MapInfo from './MapInfo';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapComponent: React.FC = () => {
  const [viewState, setViewState] = useState({
    latitude: 41.8548,
    longitude: -87.6414,
    zoom: 9.77,
    pitch: 50,
    bearing: 0
  });
  const dispatch = useDispatch();
  const mapRef = React.useRef<MapRef>(null);

  const handleClick = (event: any) => {
    const feature = event.features && event.features[0];
    if (feature) {
      dispatch(setSelectedNeighborhood(feature.properties.name));
    }
  };

  const onMapLoad = useCallback(() => {
    if (!mapRef.current) return;

    const map = mapRef.current.getMap();
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
      (layer) => layer.type === 'symbol' && layer.layout && layer.layout['text-field']
    )?.id;

    map.addLayer(
      {
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['*', ['get', 'height'], 2]  // Increased multiplier to make buildings bigger
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['*', ['get', 'min_height'], 2]  // Increased multiplier for base height
          ],
          'fill-extrusion-opacity': 0.6
        }
      },
      labelLayerId
    );
  }, []);

  return (
    <div className="relative w-full h-full">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['neighborhoods-layer']}
        onClick={handleClick}
        ref={mapRef}
        onLoad={onMapLoad}
      >
        {/* Add Source and Layer for neighborhoods here if needed */}
      </Map>
      <MapInfo
        latitude={viewState.latitude}
        longitude={viewState.longitude}
        zoom={viewState.zoom}
        pitch={viewState.pitch}
        bearing={viewState.bearing}
      />
    </div>
  );
};

export default MapComponent;