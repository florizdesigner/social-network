import {act} from "@testing-library/react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi, how are you?', likesCount: 12 },
                { id: 1, message: 'Hi, yo', likesCount: 1 },
                { id: 2, message: 'What do you think about this?', likesCount: 10 },
                { id: 3, message: 'What is this?', likesCount: 100 }
            ],
            newPostText: 'it-kamasusstra'

        },
        dialogsPage: {
            messages: [
                { message: 'Hello!' },
                { message: 'Hello world!' },
                { message: 'Hello! How are you?' },
                { message: 'Yo!' }
            ],
            dialogs: [
                { id: 1, name: 'Dmitriy', avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj' },
                { id: 2, name: 'Elena', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png' },
                { id: 3, name: 'Jacob', avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj' },
                { id: 4, name: 'Alexa', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png' },
                { id: 5, name: 'Fedor', avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj' },
                { id: 6, name: 'Albert', avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj' },
                { id: 7, name: 'Bob', avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjHn9Kdpik0fnt95hRjzt5hwVOP_Q1qjpyWSSKF=s900-c-k-c0x00ffffff-no-rj' }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('statechange')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) { // type: 'ADD-POST'

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store;
export default store;