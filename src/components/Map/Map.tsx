import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';
import styles from './Map.module.css';

function GoogleMap() {
  const position = { lat: 50.070594832699875, lng: 14.429647442163574 };

  return (
    <APIProvider apiKey={'AIzaSyD4UmwVp6mbD3Xa72EYOu67pFWOwlHAXuU'}>
      <div className={styles.container}>
        <Map
          defaultZoom={18}
          defaultCenter={position}
          mapId={'c4349aef3dea0e64'}
        >
          <AdvancedMarker position={position}>
            <Pin />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
