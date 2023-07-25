import { takeEvery, call, put } from "redux-saga/effects";
import { getRouteCoordinates } from "./reducers/app-reducer";
import PolylineUtil from "polyline-encoded";
import { getPolyline } from "../HTTP-services/api";

export function* workGetCoordinates(event) {
  try {
    const polyline = yield call(() => getPolyline(event));
    const formattedPolyline = PolylineUtil.decode(
      polyline.data.routes[0].geometry
    );
    yield put(getRouteCoordinates(formattedPolyline));
  } catch (error) {
    alert(`${error.response.data.code}
${error.response.data.message}`);
  }
}

export function* watchClickSaga() {
  yield takeEvery("applications/getMarkerCoordinates", workGetCoordinates);
}
export default function* rootSaga() {
  yield watchClickSaga();
}
