import { takeEvery, call, put } from "redux-saga/effects";
import { getRouteCoordinates } from "./State";
import PolylineUtil from "polyline-encoded";
import { getPolyline } from "../HTTP-services/api";

export function* workGetCoordinates(event) {
  const polyline = yield call(() => getPolyline(event));
  const formattedPolyline = yield polyline.json();
  const formattedFullPolyline = PolylineUtil.decode(
    formattedPolyline.routes[0].geometry
  );

  yield put(getRouteCoordinates(formattedFullPolyline));
}

export function* watchClickSaga() {
  yield takeEvery("applications/getMarkerCoordinates", workGetCoordinates);
}
export default function* rootSaga() {
  yield watchClickSaga();
}
