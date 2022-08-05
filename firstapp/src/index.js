import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home';

//ReactDOM.render(<App/>,document.getElementById('root')); -> it gives warning ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17

// this is the latest structure to render the component in the React 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Home/>);
