import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"

const Profile = () => {

    let posts = [
        {id: 0, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'Hi, yo', likesCount: 1},
        {id: 2, message: 'What do you think about this?', likesCount: 10},
        {id: 3, message: 'What is this?', likesCount: 100}
    ];

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
}

export default Profile;