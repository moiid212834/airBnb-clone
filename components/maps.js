import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
const mapStyles = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top:0,
    right:0,
  };
class Maps extends React.Component{

render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCOZULrniVwuFkgZIKn81R57LtaXvX1-xs'
})(Maps);