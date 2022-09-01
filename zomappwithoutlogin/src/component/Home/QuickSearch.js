import React,{Component} from 'react';
import './quickSearch.css'
import QuickDisplay from './QuickDisplay';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch";
class QuickSearch extends Component {

    constructor(){
        super();
        this.state ={
            mealType:''
        }
    }

    render(){
        return (
            <div id="quickSearch">
            <span id="QuickHeading">
                Quick Search
            </span>
            <span id="QuickSubHeading">
                Find Restaurants By Meal Type
            </span>
            <QuickDisplay mealData = {this.state.mealType}/>
        </div>
        )
    }

    // api calling componentDidMount

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => this.setState({mealType :data}))
        .catch(err => console.log(err));
    }
}
export default QuickSearch;