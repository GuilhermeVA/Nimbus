import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";


const locations = [
  {
    position: [-23.005799390382244, -43.313602068535985],
    info: "Ibmec Barra",
  },
  {
    position: [-25.423164974, -49.270998916],
    info: "Curitiba",
  },
  {
    position: [-22.9423212307, -43.3579469015],
    info: "Cidade de Deus",
  },
  {
    position: [-22.950996196, -43.206499174],
    info: "Cristo Redentor",
  },
];

const customMarker = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  iconSize: [30, 30],
});


const createClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    className: "custom-cluster-marker",
    iconSize: point(30, 30),
  });
};

const MapComponent = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [addingMarker, setAddingMarker] = useState(false);

  const handleMapClick = (e) => {
    if (addingMarker) {
      const newMarker = {
        position: [e.latlng.lat, e.latlng.lng],
        info: "Novo Marcador",
      };
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    }
  };

  const toggleAddingMarker = () => {
    setAddingMarker((prevAddingMarker) => !prevAddingMarker);
  };

  const exportToPDF = async () => {
    const mapContainer = mapRef.current._container;

    if (mapContainer) {
      const canvas = await html2canvas(mapContainer);

      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      markers.forEach((marker) => {
        const [x, y] = pdf.getCoordinateString(marker.position[1], marker.position[0]);
        pdf.text(x, y, marker.info);
      });

      pdf.save("mapa.pdf");
    }
  };

  const exportToCSV = () => {
    const csvContent = "Latitude,Longitude,Info\n" +
      markers.map(marker => `${marker.position[0]},${marker.position[1]},${marker.info}`).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "marcadores.csv");
  };

  return (
    <div style={{ padding: "0vw", margin: "0hv",  }}>
      <h1>Mapa</h1>
      <div>
        <MapContainer
          ref={mapRef}
          center={[-22.9921, -43.3249]}
          zoom={13}
          style={{ height: "60vh", width: "90%" }}
          onClick={handleMapClick}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
<MarkerClusterGroup
            chunckedLoading
            iconCreateFunction={createClusterIcon}
          >
            {locations.map((location, index) => {
              return (
                <Marker
                  key={index}
                  position={location.position}
                  icon={customMarker}
                >
                  <Popup>{location.info}</Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button className="myButton" onClick={exportToPDF}>
          Exportar para PDF
        </button>
        <button className="myButton" onClick={exportToCSV}>
          Exportar para CSV
        </button>
        <button className="myButton" onClick={toggleAddingMarker}>
          {addingMarker ? "Desativar Adição de Marcadores" : "Ativar Adição de Marcadores"}
        </button>
      </div>
    </div>
  );
};

export default MapComponent;



