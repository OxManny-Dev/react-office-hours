// import basically require but for React
// Import from React allows us to use JSX syntax
import React from 'react';
// React DOM takes our app, and renders it to the page
// We only use ReactDOM once and always in the index.js
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
