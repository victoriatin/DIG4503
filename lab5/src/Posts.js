import React, { useState, useEffect } from 'react';
import axios from 'axios';

//new component called Posts
const Posts = () => {
    //state variable=posts | function=setPosts
    const [posts, setPosts] = useState();

    //componentdidmount() useEffect() 
    useEffect (() => {
        // Runs after the first render() lifecycle
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
           //set equal to data get from the response
        const responsePosts = res.data;
        //call setPosts function & set value of posts to responsePosts
                setPosts(responsePosts);
        });
        //only want it to run on on the initial render as componentdidmount() does
    }, []);
    return (
        <div>
            <h1>Post data</h1>
            {/* print contents of the array using the map method */}
            {posts && 
            posts.map((post) => {
                {/*userId & body keys from data */}
                const {userId, body} = post;
                return (
                    <div key={userId}>
                        <h5>{body}</h5>
                        <h6>Assigned to user: {userId}</h6>
                        </div>
                )
            })};
            
        </div>
    );
};

export default Posts;