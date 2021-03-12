import React from 'react'
import classes from './Post.module.css'


const Post = (props) => {

    return (<div className={classes.item}><img
            src="https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj"
            alt=""/>
            {props.message}

            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    );
}

export default Post;