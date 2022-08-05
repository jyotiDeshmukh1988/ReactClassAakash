import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header'; // you can rename the Header with any name becoz it is export as default and also the component name first letter is always in capital case

class App extends Component{
    render() {
        return (
            <Fragment>
            <Header/>
            {/*<header/>  if you write this small tag header then react will not output anything becoz he do not know whether is a component or header tag of the html */}
            <h1>Hello from the react</h1>
            <h2>Developer Funnel</h2>
            <Footer/>
        </Fragment>
        )
    }
}
/*
// functional component
const App = () => {
    return (
       <Fragment>
            <Header/>
            {/*<header/>  if you write this small tag header then react will not output anything becoz he do not know whether is a component or header tag of the html */
           /* <h1>Hello from the react</h1>
            <h2>Developer Funnel</h2>
            <Footer/>
        </Fragment>
    )
}
*/
export default App;