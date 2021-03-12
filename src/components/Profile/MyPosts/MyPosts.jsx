import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post"
import Profile from './../Profile'

const MyPosts = ( {posts} ) => {

        let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
        return (<div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea name="area" cols="40" rows="4">text</textarea>
                    </div>

                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
;

export default MyPosts;