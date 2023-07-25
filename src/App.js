import "./App.css";
import Table from "./components/Table/Table";
import Map from "./components/Map/Map";
import { useSelector, useDispatch } from "react-redux";
import { getMarkerCoordinates } from "./redux/reducers/app-reducer";
import { apps, routeCoordinates, markerCoordinates } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Table
        apps={useSelector(apps)}
        getMarkerCoordinates={getMarkerCoordinates}
        dispatch={dispatch}
      />
      <Map
        routeCoordinates={useSelector(routeCoordinates)}
        markerCoordinates={useSelector(markerCoordinates)}
      />
    </div>
  );
}

export default App;
