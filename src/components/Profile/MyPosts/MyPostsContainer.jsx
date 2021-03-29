import React from 'react'
import {addPostActionCreator, updatePostTextActionCreator} from './../../../redux/profile-reducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
        let state = props.store.getState()

        let addPost = () => {
            props.store.dispatch(addPostActionCreator())
        }

        let onPostChange = (textArea) => {
            let action = updatePostTextActionCreator(textArea)
            props.store.dispatch(action)
        }

        return <MyPosts updatePostText={onPostChange}
                        addPost={addPost}
                        posts = {state.profilePage.posts}
                        newPostText = {state.profilePage.newPostText} />
    }

export default MyPostsContainer