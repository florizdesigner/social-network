const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT =  'UPDATE-POST-TEXT'

let initialState = {
    posts: [
        { id: 0, message: 'Hi, how are you?', likesCount: 12 },
        { id: 1, message: 'Hi, yo', likesCount: 1 },
        { id: 2, message: 'What do you think about this?', likesCount: 10 },
        { id: 3, message: 'What is this?', likesCount: 100 }
    ],
    newPostText: 'it-kamasusstra'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }}

export default profileReducer