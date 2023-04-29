import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    followHandler = (userId: number) => {
        this.props.follow(userId)
    }
    unfollowHandler = (userId: number) => {
        this.props.unfollow(userId)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span key={p} className={this.props.currentPage === p ? styles.selectedPage : ''} onClick={()=>{this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                          className={styles.usersPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => this.unfollowHandler(u.id)}>UnFollow</button>
                                        : <button onClick={() => this.followHandler(u.id)}>Follow</button>
                                    }
                                </div>
                            </span>
                                <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                 <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                 </span>
                            </span>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

