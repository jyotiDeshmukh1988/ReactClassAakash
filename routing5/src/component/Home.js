import React, { Fragment } from 'react';

const Home = () => {
    return (
        <div class="panel panel-primary">
            <div class="panel-heading">Home Page</div>
            <div class="panel-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
        </div>
    )

 }
/* 
We can write Header component and Link component inside the BrowserRouter component it will not create error but not recommended also we have to use LINK tag for navigation to prevent from the page load.
*/
 export default Home;