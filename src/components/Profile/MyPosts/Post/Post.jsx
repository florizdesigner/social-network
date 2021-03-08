import React from 'react'
import classes from './Post.module.css'

const Post = (props, likes) => {

    console.log(props.message);

    return (<div className={classes.item}><img
            src="https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj"
            alt=""/>
            { props.message }
            <div>
                <span>like {likes.like}</span>
            </div>
        </div>
    );
}

export default Post;