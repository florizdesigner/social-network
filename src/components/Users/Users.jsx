import React from 'react'
import style from './users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"
                             className={style.userPhoto}/>
                    </div>
                </span>
                    <span>
                    <div>
                        {user.follow
                            ? <button onClick={() => {
                                this.props.unfollowing(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.following(user.id)
                            }}>Follow</button>}
                    </div>
                </span>

                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/*<div>{'user.location.country'}</div>*/}
                        {/*<div>{'user.location.city'}</div>*/}
                    </span>
                </span>
                </div>)
            }
        </div>
    }
    }


export default Users