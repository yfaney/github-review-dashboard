import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import configureStore from '../../store/configureStore';
import initialState from '../../reducers/initialState';
import theme from './theme';
import GithubContainer from './js/components/container/GithubContainer.jsx';

const store = configureStore(initialState);

const GithubApplication = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GithubContainer />
      </ThemeProvider>
    </Provider>
  )
};
