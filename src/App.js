import "./App.css";
import "leaflet/dist/leaflet.css";
import TableComponent from "./components/Table/Table";
import MapComponent from "./components/Map/Map";
import { useSelector, useDispatch } from "react-redux";
import { getMarkerCoordinates } from "./redux/State";

function App() {
  const apps = useSelector((state) => state.applications.defaultCoordinates);
  const routeCoordinates = useSelector(
    (state) => state.applications.routeCoordinates
  );
  const markerCoordinates = useSelector(
    (state) => state.applications.markerCoordinates
  );
  const dispatch = useDispatch();
  return (
    <div className="App">
      <TableComponent
        apps={apps}
        getMarkerCoordinates={getMarkerCoordinates}
        dispatch={dispatch}
      />
      <MapComponent
        routeCoordinates={routeCoordinates}
        markerCoordinates={markerCoordinates}
      />
    </div>
  );
}

export default App;
