import React,{Component} from 'react';
import './Header.css';
class Header extends Component { // we extends component becoz it provides the render method
    constructor(){ // you must user super keyword with constructor method otherwise it gives you an error
    /*ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor*/
        super();
        //console.log('<<<<<<inside constructor');
        this.state = {
            title:'React Developer App',
            keyword:'user text here'
        }  
    }
    handleChange = (event) => {
        //console.log(event);// return SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
        //console.log(event.target); // <input>
        //console.log(event.target.value); // value type inside the input box
        this.setState({keyword:event.target.value?event.target.value:'user text here'}) // setState is a predefined method to update the value of the state and whenever there is state value change render method will be called automatically
        this.props.userInput(event.target.value); // pass the input value from the child to the parent using function call whose function name declare in the parent component that is Home
    }
    render(){
        console.log('<<<<<<inside render');
        return(
            <React.Fragment>
            <header>{/* single curly braces becoz its a property object*/}
                <div className='logo'>{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>{/* double curly braces becoz its a property*/}
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