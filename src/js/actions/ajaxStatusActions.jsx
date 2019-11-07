import * as types from './actionTypes';

/**
 * Action dispatched to tell that there is a transaction starting.
 * @returns {Object} - Object with type of action.
 * @property {String} type - Action type.
 */
export function beginAjaxCall() {
  return { type: types.BEGIN_AJAX_CALL };
}

/**
 * Action dispatched to tell that there is a transaction ending.
 * @returns {Object} - Object with type of action.
 * @property {String} type - Action type.
 */
export function endAjaxCall() {
  return { type: types.END_AJAX_CALL };
}

/**
 * Action dispatched to tell that there is a transaction in error.
 * @returns {Object} - Object with type of action.
 * @property {String} type - Action type.
 */
export function errorAjaxCall() {
  return { type: types.AJAX_CALL_ERROR };
}
