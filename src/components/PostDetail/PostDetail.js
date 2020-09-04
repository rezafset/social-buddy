import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [postInfo, setPostInfo] = useState({});
    const[commentPerson, setCommentPerson] = useState({});

    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=> response.json())
        .then(data=> setPostInfo(data))
    }, [])

    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/comments/${postId}`)
        .then(response=> response.json())
        .then(data=> setCommentPerson(data))
    }, [])

    return (
        <div>
            <h1>Post Detail here: {postId}</h1>
            <h3>Post Title: {postInfo.title}</h3>
            <p>Post Body: {postInfo.body}</p>
            <p>Comment Person: {commentPerson.name}</p>
            <p>Email: {commentPerson.email}</p>
            <p>Comment: {commentPerson.body}</p>
        </div>
    );
};

export default PostDetail;