import React from 'react';
import ReactDOM from 'react-dom';

import GithubApplication from './js/components/application/GithubApplication.jsx';

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(<GithubApplication />, wrapper) : false;
