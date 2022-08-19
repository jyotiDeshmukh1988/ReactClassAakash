import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay = (props) => {
   console.log(props.mealData);
    //console.log("test"+props.mealData);
    const listMeal = (mealDatas) => {
            if(mealDatas){
                let mealcontent = mealDatas.map((item)=>{
                    return (
                        <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={item.meal_image} alt="breakfast"/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        <span>{item.mealtype}</span>
                                    </div>
                                    <div className="componentSubHeading">
                                    {item.content}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
                return mealcontent;
            }
        }
    return (
        <>
            {listMeal(props.mealData)}
        </>
       
    )
}

export default QuickDisplay;