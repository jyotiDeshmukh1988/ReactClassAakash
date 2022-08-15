import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div class="panel panel-info">
            <div class="panel-heading">Post Page</div>
            <div class="panel-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            <h2>Javascript</h2>
            <Link to="/" className="btn btn-primary">Details</Link>
            <h2>React</h2>
            <Link to="/" className="btn btn-success">Details</Link>
            <h2>Node</h2>
            <Link to="/" className="btn btn-danger">Details</Link>
            </div>
        </div>
    )
}

export default Post;