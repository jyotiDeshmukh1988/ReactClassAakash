import React,{Component} from 'react';
import './Header.css';
class Header extends Component { // we extends component becoz it provides the render method
    render(){
        return(
            <React.Fragment>
            <header>{/* single curly braces becoz its a property object*/}
                <div className='logo'>React App</div>
                <center>
                    <input/>
                    <div style={{color:'white',fontSize:'20px'}}>user text here</div>{/* double curly braces becoz its a property*/}
                </center>
            </header>
            <hr/>
        </React.Fragment>
        )
    }
}

export default Header; // its required to import into the other component

/*
functional component
const Header = () => {
    return (
        <React.Fragment>
            <center>
                <h1>Developer Funnel</h1>
            </center>
            <hr/>
        </React.Fragment>
        
    )
}*/