import { all, fork } from "redux-saga/effects";
import axios from "axios";
import authSaga from "./authSaga";
import dotenv from "dotenv";
dotenv.config();

export default function* rootSaga() {
  yield all([fork[authSaga]]);
}
