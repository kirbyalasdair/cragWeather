import React from 'react';
import { mapFilters } from '../../types/enums';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './AreaMap.scss';
import 'leaflet/dist/leaflet.css';

interface Props {
  mapFilters: mapFilters[];

}
const AreaMap: React.FC<Props> = ({ mapFilters }) => {
    return <div id="map" className="map-container">
        <p>hi</p>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    </div>
}

export default AreaMap;
