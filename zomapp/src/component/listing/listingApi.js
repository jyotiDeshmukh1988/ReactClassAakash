import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            restaurantList:''
        }
    }
    setDataPerFilter=(data) =>{
        this.setState({restaurantList:data})
    }
    render(){
        return (
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h2>Filters</h2>
                            </center>
                            <hr/>
                            <CuisineFilter mealId={this.props.match.params.mealId}
                            restPerCuisine={(data)=>{this.setDataPerFilter(data)}}/>
                            <CostFilter mealId={this.props.match.params.mealId}
                            restPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                        </div>
                        <ListingDisplay listData = {this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    // api calling componentDidMount using fetch

    /*componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => this.setState({mealType :data}))
        .catch(err => console.log(err));
    }
    */
    // api calling componentDidMount using axios
    componentDidMount(){
    let mealId = this.props.match.params.mealId;
    console.log(mealId);
    sessionStorage.setItem('mealId',mealId);
    axios.get(`${url}${mealId}`)
    .then((res) => {
        console.log(res.data);
        this.setState({restaurantList:res.data}
    )})
    }
}

export default Listing;