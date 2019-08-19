import * as React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap defaultZoom={15} defaultCenter={{ lat: 51.579, lng: -4.0482 }}>
			<Marker position={{ lat: -34.397, lng: 150.644 }} />
		</GoogleMap>
	))
);

function GoogleMapComponent() {
	return (
		<MapWithAMarker
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `100vh` }} />}
			containerElement={<div style={{ height: `100vh` }} />}
			mapElement={<div style={{ height: `100vh` }} />}
		/>
	);
}

export { GoogleMapComponent };
