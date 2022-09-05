import React,{Component} from 'react';
import Header from '../../Header';
const url = "http://zomatoajulypi.herokuapp.com/menuItem";
class Cart extends Component {
    constructor(props){
        super(props);
        this.state ={
            menuItem:'',
            countItem:'',
            cost:''
        }
    }
    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
                <Header/>
                <center>
                    <h1>Your Cart</h1>
                    <h3>No of Items in your cart : {this.state.countItem}</h3>
                    <h3>Total Price Rs: {this.state.cost}</h3>
                    {this.renderItem(this.state.menuItem)}
                </center>
            </>
        )
    }
    //calling api 
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        console.log("mymenu"+menuItem);
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("hh",data)
            let totalPrice = 0;
            let itemcount = 0;
            data.map((item) => {
                totalPrice = totalPrice + Number(item.menu_price);
                itemcount = itemcount + 1;
                sessionStorage.setItem('itemcount', itemcount);
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice,countItem:itemcount});
        })
    }
}

export default Cart;

