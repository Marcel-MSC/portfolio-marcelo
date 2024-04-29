import React from 'react';
import Layout from '../../components/Layout';
import GoogleMarker from '../../components/GoogleMarker';
import { SectionTitle } from '../../styles';
import GoogleMapReact from 'google-map-react';
import env from "react-dotenv";

const Map = ({ user }) => {
  let googleMapsApi = '';
  console.log(`teste 1`, env.ENV_GOOGLE_MAPS_API_KEY)
  console.log(`teste 2`, window.env.GOOGLE_MAPS_API_KEY)
  if (env.ENV_GOOGLE_MAPS_API_KEY !== undefined) {
    googleMapsApi = env.ENV_GOOGLE_MAPS_API_KEY;
  }
  if (window.env.GOOGLE_MAPS_API_KEY !== undefined) {
    googleMapsApi = window.env.GOOGLE_MAPS_API_KEY;
  }
  const defaultProps = {
    center: {
      lat: -23.553646087646484,
      lng: -46.561336517333984
    },
    zoom: 14
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    // todo - implement handles to users interactions
  };
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>My approximate location</SectionTitle>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApi }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <GoogleMarker
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text={"Minha localização aproximada"}
              onClick={Event.click}
            />
          </GoogleMapReact>
        </div>
      </div>
    </Layout>
  );
};

export default Map;