import { useState, useCallback, memo } from 'react'; 
import { GoogleMap, MarkerF, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';
import Card from 'react-bootstrap/Card'; 
import Rating from './Rating';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {lat: 37.8253, lng: -122.3700}; 
const zoom = 12; 

const AllBusinessesOnMap = memo(function AllBusinessesOnMap(props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GMAPS_KEY 
  }); 

//   const [map, setMap] = useState(null); 
  const [activeMarker, setActiveMarker] = useState(null); 

//   const onLoad = useCallback(function callback(map) {
//     setMap(map)
//   }, []);

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null)
//   }, []);

  const handleActiveMarker = (marker) => {
    if (marker != activeMarker) {
        setActiveMarker(marker); 
    }
  }

  const bizMarkers = []; 
  for (const biz of Object.values(props.businesses)) {
    let position = {lat: biz.coordinates_latitude, lng: biz.coordinates_longitude}; 
    bizMarkers.push(
        <MarkerF key={biz.business_id} position={position} onClick={() => handleActiveMarker(biz.business_id)}> 
          {activeMarker === biz.business_id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                <Card style={{ width: '12rem'}}>
                    <Card.Img variant="top" src={biz.image_url} />
                    <Card.Body>
                        <Card.Title> {biz.name} </Card.Title>
                        <Rating rating={biz.rating} />
                    </Card.Body>
                </Card>
            </InfoWindowF>
          ) : null}
        </MarkerF>
    ); 
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        onClick={() => setActiveMarker(null)} 
      >
        {bizMarkers}
      </GoogleMap>
  ) : <h2>Loading...</h2>
}); 

export default AllBusinessesOnMap; 

