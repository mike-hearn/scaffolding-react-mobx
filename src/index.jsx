import ReactDOM from 'react-dom';
import React from 'react';

import ExampleContainer from './components/ExampleComponent';
import { ExampleStore } from './stores/ExampleStore';

import styles from './shared/styles';

var exampleStore = new ExampleStore();

ReactDOM.render(
  <ExampleContainer exampleStore={exampleStore} />,
	document.getElementById('main')
);

