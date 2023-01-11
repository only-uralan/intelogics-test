import { Table } from "antd";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const apps = useSelector((state) => state.applications.applications);
  const columns = [
    {
      title: "Номер заявки",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Координаты ОТ lat",
      dataIndex: "latFrom",
      key: "latFrom",
    },
    {
      title: "Координаты ОТ lng",
      dataIndex: "lngFrom",
      key: "lngFrom",
    },
    {
      title: "Координаты ДО lng",
      dataIndex: "latTo",
      key: "latTo",
    },
    {
      title: "Координаты ДО lng",
      dataIndex: "lngTo",
      key: "lngTo",
    },
  ];
  const position = [59.84660399, 30.29496392];
  return (
    <div className="App">
      <div className="table">
        <Table dataSource={apps} columns={columns} />
      </div>
      <div className="leaflet-container">
        <MapContainer center={position} zoom={13}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
