const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messages: [...state.messages]
    }

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageBody
            }
        case SEND_MESSAGE:
            let body = stateCopy.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageText: ''
            }
        default: {
            return state
        }
    }
}

export const updateMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageBody: message
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer