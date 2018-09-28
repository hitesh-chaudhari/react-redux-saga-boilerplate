import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as api from './api';
import { ACTIVATE, REGISTER, INTEREST } from './constants';
import { activate, update } from './actions';

import { authenticate } from 'services/session/actions';

function* activateAsync(action) {
  // Clear any old error
  yield put(update({ error: null }));

  const user = yield call(api.activate, action.token, action.password);
  yield put(update(user));
}

function* watchActivate() {
  yield takeLatest(ACTIVATE, activateAsync);
}

function* registerAsync(action) {
  // Clear any old error
  yield put(update({ error: null }));

  const staged = yield call(api.register, action.name, action.email, action.inviteCode);
  yield put(update(staged));
}

function* watchRegister() {
  yield takeLatest(REGISTER, registerAsync);
}

function* interestAsync(action) {
  yield call(api.interest, action.name, action.email);
}

function* watchInterest() {
  yield takeLatest(INTEREST, interestAsync);
}

export default function* () {
  yield all([
    fork(watchActivate),
    fork(watchRegister),
    fork(watchInterest),
  ]);
}
