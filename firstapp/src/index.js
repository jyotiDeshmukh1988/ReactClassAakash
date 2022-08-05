import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './component/Footer';
import Header from './component/Header'; // you can rename the Header with any name becoz it is export as default and also the component name first letter is always in capital case

const App = () => {
    return (
        <div>
        <Header/>
        {/*<header/>  if you write this small tag header then react will not output anything becoz he do not know whether is a component or header tag of the html */}
        <h1>Hello from the react</h1>
        <h2>Developer Funnel</h2>
        <Footer/>
        </div>
    )
}

//ReactDOM.render(<App/>,document.getElementById('root')); -> it gives warning ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17

// this is the latest structure to render the component in the React 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);

// old method 

/*var React = require('react');
var ReactDOM = require('react-dom');

function App(){
    return (
        <h1>Hello from the React</h1>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
*/