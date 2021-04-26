import React from 'react';
import {Link} from 'react-router-dom';

export const PostPreview = () => {
    return(
        <div className="post-preview">
            <Link to={`/posts/${props.post.id}`} >
                <h2 className="post-title">{props.post.title}</h2>
                <h2 className="post-subtitle">{props.post.subtitle}</h2>
                <p className="post-meta">Entered on {props.post.post_date}
                </p>
            </Link>
        </div>
    );
};