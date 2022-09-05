import React,{Component} from 'react';

class MenuDisplay extends Component{

    orderId = [];

    // onclick add to cart function
    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId);
    }

    // onclick remove from the cart function
    removeOrder = (id) => {
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1);
        }
        this.props.finalOrder(this.orderId);
    }

    // display cart items function
    renderCart =(orders) => {
        if(orders){
            return (
                orders.map((item,index) => {
                    return(
                        <b key={index} className="test">{item}, &nbsp;</b>
                    )
                })
            )
        }
    }

    renderMenu = ({menudata}) => { // here instead of props.menudata we use directly menudata
        if(menudata){
            return (
                menudata.map((item) => {
                    return(
                        <div key={item.menu_id}>
                            <div>
                                <div className="col-md-7">
                                    <b>{item.menu_id}</b> &nbsp;
                                    <img src={item.menu_image} alt={item.menu_image} style={{width:80,height:80}}/>
                                    &nbsp; {item.menu_name} - Rs. {item.menu_price}
                                </div>
                                <div className="col-md-4">
                                    <button className='btn btn-success' onClick={() => this.placeOrder(item.menu_id)}>
                                        <span className="glyphicon glyphicon-plus"></span>
                                    </button>&nbsp;
                                    <button className='btn btn-danger' onClick={() => this.removeOrder(item.menu_id)}>
                                        <span className="glyphicon glyphicon-minus"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-12 bg-success">
                    <h2>Item Added</h2>
                    <h3>Item Number {this.renderCart(this.orderId)} Added</h3>
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay