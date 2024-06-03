"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon missing issue
const iconRetinaUrl =
	"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
const iconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const shadowUrl =
	"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
	iconRetinaUrl,
	iconUrl,
	shadowUrl,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const LocationMap: React.FC = () => {
	const handleMarkerClick = () => {
		window.open("https://maps.app.goo.gl/m4mMK6zFLT979j928", "_blank");
	};
	return (
		<MapContainer
			center={[1.1034140062718207, 104.03177533778977]}
			zoom={16}
			style={{ height: "20rem", width: "100%" }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker
				position={[1.1034140062718207, 104.03177533778977]}
				eventHandlers={{ click: handleMarkerClick }}>
				<Popup>Radisson Golf & Convention Center Batam</Popup>
			</Marker>
		</MapContainer>
	);
};

export default LocationMap;
