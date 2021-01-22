import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import { Container } from './styles';

const mapStyles = {
  width: '100%',
  height: '500px',
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{
            lat: 51.265452,
            lng: -1.073633,
          }}
        >
          <Marker position={{ lat: 51.265452, lng: -1.073633 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBYJ2UEoOqzcOyZlJBJiKE7hymWNowiKKQ',
})(MapContainer);
