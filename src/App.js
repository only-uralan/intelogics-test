import { Table } from "antd";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
        <div className="map">
          <MapContainer
            center={[59.84660399, 30.29496392]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="map"></div>
    </div>
  );
}

export default App;
