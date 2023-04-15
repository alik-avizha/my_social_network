import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0 ) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556487.png',
                followed: false,
                fullName: 'Aleksandr',
                status: 'Hop hey la la ley',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556487.png',
                followed: true,
                fullName: 'Viktor',
                status: 'Hello',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556487.png',
                followed: false,
                fullName: 'Dima',
                status: 'What to do today?',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }
    return (
        <div>
            {props.users.map(u => {

                    const followHandler = () => {
                        props.follow(u.id)
                    }
                    const unfollowHandler = () => {
                        props.unfollow(u.id)
                    }
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                     <img src={u.photoUrl} alt="avatar" className={styles.usersPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={unfollowHandler}>UnFollow</button>
                                        : <button onClick={followHandler}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                 <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                 </span>
                            </span>
                        </div>
                    )
                }
            )}
        </div>
    );
};
