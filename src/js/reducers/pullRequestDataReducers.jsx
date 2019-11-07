import * as types from '../actions/actionTypes';

export default function pullRequestDataReducer(state = {}, action) {
  switch (action.type) {
    case types.RETRIEVE_PULL_REQUEST_DATA_SUCCESS:
      return {};
    case types.RETRIEVE_PULL_REQUEST_DATA:
      return { ...action.data.pullRequests };
    default:
      return state;
  }
}
