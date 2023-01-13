import { takeEvery, call, put } from "redux-saga/effects";
import { getRouteCoordinates, getMarkersCoordinates } from "./State";
import PolylineUtil from "polyline-encoded";
import { getPolyline } from "../api/api";

export function* workGetPolyline(event) {
  const polyline = yield call(() => getPolyline(event));
  const formattedPolyline = yield polyline.json();
  const formattedFullPolyline = PolylineUtil.decode(
    formattedPolyline.routes[0].geometry
  );

  yield put(getRouteCoordinates(formattedFullPolyline));
  yield put(
    getMarkersCoordinates([
      [event.payload.latFrom, event.payload.lngFrom],
      [event.payload.latTo, event.payload.lngTo],
    ])
  );
}

export function* watchClickSaga() {
  yield takeEvery("applications/tableClick", workGetPolyline);
}
export default function* rootSaga() {
  yield watchClickSaga();
}
