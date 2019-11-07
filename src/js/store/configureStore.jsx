import { createStore, applyMiddleware } from 'redux';
/**
 * UnComment the below when using redux-devtools for debugging redux workflow.
 * Install the redux-devtools-extension as project-dependency to get it working with engine.
 */
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/sagas';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
    /**
     * To Debug the redux workflow, uncomment the below statement.
     * More information on redux-dev-tools can be viewed here - https://github.com/zalmoxisus/redux-devtools-extension
     * For Production, it advices to use `componseEnhancers` from the package.
     */
    // composeWithDevTools(applyMiddleware(sagaMiddleware)),
    // TODO
    // Removing the Immutable State Invariant until Worklist fixes their state issues.
    // import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
    // , reduxImmutableStateInvariant()),
  );
  sagas.map((saga) => sagaMiddleware.run(saga));
  return store;
}
