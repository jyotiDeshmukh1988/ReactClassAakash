import React from 'react';
import { useParams,useSearchParams } from 'react-router-dom';

const PostDetails = () => {
/* in router 6 there is no props to receive the params and search params we have use inbuilt hooks that is useParams ans SearchParams */

let params = useParams();/* The useParams hook is used to read the dynamic params from the current URL that were matched by <Route path> */

let [searchParams] = useSearchParams(); // we are using the destructuring for getting the values of the search params. The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook
console.log(params.topic);
console.log(searchParams);
    return (
        <div className="panel panel-danger">
            <div className="panel-heading"> {params.topic} Details Page</div>
            <div className="panel-body"> {params.topic} Details page Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            <h4>You are on page number - {searchParams.getAll('page')}</h4>
            </div>
        </div>
    )
}

export default PostDetails;