import React, { useEffect, useState } from 'react';
import './Post.css';
import PostInfo from '../PostInfo/PostInfo';

const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(()=>{
        const url = (`https://jsonplaceholder.typicode.com/posts`);
        fetch(url)
        .then(response=>response.json())
        .then(data=>setPost(data.slice(0,18)))
    }, []);

    return (
        <div className="post-info">
            {
                post.map(post=> <PostInfo post={post} ></PostInfo> )
            }
        </div>
    );
};

export default Post;