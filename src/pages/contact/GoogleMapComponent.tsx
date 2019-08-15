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
			googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8IuE0h5EAsyninhYT3i_kGeoR42UGK50&v=3.exp&libraries=geometry,drawing,places"
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `100%` }} />}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	);
}

export { GoogleMapComponent };
