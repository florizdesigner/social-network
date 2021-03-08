import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

return (<div>My posts
        <div>
            <textarea name="area" id="" cols="40" rows="4">text</textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <Post message='Hi,how are you?' />
        <Post message='It is react'/>
        <Post message='Hello!'/>
    </div>
);
}
;

export default MyPosts;