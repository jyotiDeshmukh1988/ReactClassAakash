import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) =>{
    const renderData = (listData) => {
        //console.log(props.listData);
        if(listData){
            return listData.map((item) => {
                return <div className="tileContainer">
                <div className="tileComponent1">
                    <img src={item.restaurant_thumb} alt="breakfast"/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        <span>{item.restaurant_name}</span>
                    </div>
                    <div className="componentSubHeading">
                       {item.address}
                    </div>
                </div>
            </div>
            })
        }
    }
    return(
        <div id="content">
            {renderData(props.listData)}
        </div>
    )
}

export default ListingDisplay;