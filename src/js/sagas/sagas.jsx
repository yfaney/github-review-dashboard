/* eslint-disable no-param-reassign */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import addIsolationAndPriority from '../actions/worklistStateActions';
import { beginAjaxCall, endAjaxCall, errorAjaxCall } from '../actions/ajaxStatusActions';

function* retrievePullRequestData(action) {
  try {
    yield put(beginAjaxCall());
    const worklistData = yield call(action.data.phlebotomyService.retrieveWorklistData, action.data.filterId);
    yield put({ type: types.RETRIEVE_PULL_REQUESTS_DATA_SUCCESS });
    yield put(addIsolationAndPriority(worklistData));
    yield put(endAjaxCall());
  } catch (e) {
    yield put(errorAjaxCall());
    yield put({ type: types.RETRIEVE_PULL_REQUESTS_DATA_FAILED });
  }
}

function* retrievePullRequestDataSaga() {
  yield takeLatest(types.RETRIEVE_PULL_REQUESTS_DATA, retrievePullRequestData);
}

export default [retrievePullRequestDataSaga];
