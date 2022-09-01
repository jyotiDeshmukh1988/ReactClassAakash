import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) =>{
   
    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item)=>{
                    return (
                        <div className="item" key={item._id}>
                        <div className="row">
                            <div className="col-md-5">
                                <img src={item.restaurant_thumb} className="Image"
                                alt={item.restaurant_name}/>
                            </div>
                            <div className="col-md-7">
                                <div className="hotel_name">
                                    <Link to={`/details?restId=${item.restaurant_id}`}>
                                        {item.restaurant_name}
                                    </Link>
                                </div>
                                <div className="city_name">{item.address}</div>
                                <div className="city_name">{item.rating_text}</div>
                                <div className="city_name">Rs. {item.cost}</div>
                                <div className="labelDiv">
                                {item.mealTypes.map((mealitem)=>{
                                    return (
                                        <span key={mealitem.mealtype_id} className="label label-primary" id={'mealtype_id'+mealitem.mealtype_id}>
                                        {mealitem.mealtype_name}
                                    </span>
                                    )
                                })}
                                </div>
                                <div className="labelDiv">
                                {item.cuisines.map((cuisineitem)=>{
                                    return (
                                        <span key={cuisineitem.cuisine_id} className="label label-primary" id={'cuisine_id'+cuisineitem.cuisine_id}>
                                        {cuisineitem.cuisine_name}
                                    </span>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            else{
                return(
                    <h3>No data found</h3>
                )
            }
        }
        else{
            return (
                <div>
                    <h2>Loading</h2>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }
    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;