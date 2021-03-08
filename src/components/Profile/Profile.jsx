import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img
                src="https://allsaintsepping.org/wp-content/blogs.dir/1/files/2017/02/Reconnect-Image-2017-1600x400-800x200.png"
                alt="Picture"/></div>
            <div>avatar + description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;