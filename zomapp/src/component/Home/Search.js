import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {

    constructor(){
        //console.log('>>>>>>>inside constructor');
        super();
        this.state = { // define state object
            location:'',
            restData:''
        }
    }
    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(restUrl+stateId,{method:'GET'})
        .then(res => res.json())
        .then(data => this.setState({restData:data}))
        .catch(err => console.log(err));
    }
    renderCity = (data) => {
        if(data){
        return data.map((item) =>{
            return (
                <option value={item.state_id} key={item.state_id}>{item.state}</option>
            )    
        })
    }
    }
    renderRest = (data) => {
        if(data){
        return data.map((item) =>{
            return (
                <option value={item.restaurant_id} key={item._id}>{item.restaurant_name} | {item.address}</option>
            )    
        })
    }
    }
    render(){
        //console.log('>>>>>>>inside render');
        return (
            <div id="search">
                <div className="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT LOCATION----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restSelect">
                        <option>----SELECT Restaurants----</option>
                        {this.renderRest(this.state.restData)}
                    </select>
                </div>
            </div>
        )
    }

    // api calling on the page load
    componentDidMount(){
        //console.log('>>>>>>>inside componentDidMount');
        fetch(lurl,{method:'GET'}) // return promise
        .then(res => res.json()) // resolve the response object
        .then(data => {
            //console.log(data)
            this.setState({location:data});
            }) // get the data
        .catch(err => console.log(err));    
    }
}
export default Search;

/* In class component first constructor called then render method then componentDidMount. Will call the api on the componentdidmount lifecycle*/

/* when component is loaded after render componentdidmount is called inside this we get the data and update the data in state when state is updated then component is re render again*/