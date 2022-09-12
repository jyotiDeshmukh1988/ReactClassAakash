import React from 'react';

function DisplayComponent(props){
   const renderCity = ({mycity}) => {
    if(mycity){
        return(
            mycity.map((item,index)=>{
                return(
                    <div key={index}>
                        {item.state}
                    </div>
                )
            })
        )
    }
   }

   return(
    <div>
        <center>
            <h2>City List</h2>
            {renderCity(props)}
        </center>
    </div>
)
}



export default DisplayComponent;