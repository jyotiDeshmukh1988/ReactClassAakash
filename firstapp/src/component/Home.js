import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header'; // you can rename the Header with any name becoz it is export as default and also the component name first letter is always in capital case
import Product from './productDisplay';
import JSON from './db.json';

class App extends Component{
    constructor(){
        super();
        this.state ={
            productData : JSON,
            filteredData: JSON
        }
    }
    /*
    var a = [2,4,7,10,34,20,45];
    a.filter((data)=>{return data>20})
    */
    filterData = (keyword) => {
       let output = this.state.productData.filter((data)=>{
            return (data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);
       });
       console.log(output);
       this.setState({filteredData:output});
    }
    render() {
        return (
            <Fragment>
            {/* use props with function to send data from the child to parent */}
            <Header userInput ={(data)=>{
                this.filterData(data);
            //console.log(data);
            }}/> {/* We are assigning the function to the userInput and this userInput will become defined in the child Header component */}
            {/*<header/>  if you write this small tag header then react will not output anything becoz he do not know whether is a component or header tag of the html */}
            <Product prodData={this.state.filteredData}/> {/* we are passing state as a property to the productDisplay component */}
            <Footer Year='2022' month='July'/>
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