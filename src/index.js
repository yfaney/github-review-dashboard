import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import GithubContainer from './js/components/container/GithubContainer.jsx';

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GithubContainer />
  </ThemeProvider>,
  wrapper) : false;
