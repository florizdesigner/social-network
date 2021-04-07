const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 0, photoUrl: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png', follow: true, fullName: 'Dmitriy', location: {city: 'Minsk', country: 'Belarus'}, status: 'Hi, how are you?'},
        // { id: 1, photoUrl: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png', follow: false, fullName: 'Egor', location: {city: 'Kiev', country: 'Ukraine'}, status: 'Hi, how are you? I hate social networks'},
        // { id: 2, photoUrl: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png', follow: true, fullName: 'Mark', location: {city: 'Moscow', country: 'Russia'}, status: 'Hi, how are you? I am a boss'},
        // { id: 3, photoUrl: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png', follow: true, fullName: 'Mark', location: {city: 'Moscow', country: 'Russia'}, status: 'Hi, how are you? I am a boss'},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id  === action.userId){
                    return {...user, follow: true}
                }
                return user
            })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id  === action.userId){
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer