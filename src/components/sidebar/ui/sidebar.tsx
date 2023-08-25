import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from './sidebar.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from 'app/model/redux-store';
import {UserType} from '../../users/model/users-reducer';
import {Friend} from './friend/friend';
import {getFriendsThunkCreator} from '../model/sidebar-reducer';
import {useAutoAnimate} from "@formkit/auto-animate/react";


export const Sidebar = () => {

    const friends = useSelector<AppStateType, UserType[]>(state => state.sidebar.users)
    const dispatch = useDispatch()

    const [friendsRed] = useAutoAnimate<HTMLDivElement>();

    useEffect(()=>{
        dispatch(getFriendsThunkCreator())
    },[])

    let regExp = new RegExp("", "gi")

    const [filter, setFilter] = useState(regExp)
    const changeFilter = (e: ChangeEvent<HTMLInputElement>): void => {
        let regExp = new RegExp(`${e.currentTarget.value}`, "gi")
        setFilter(regExp)
    }

    const friendsFilterSearch = friends.filter(el => filter.test(el.name))

    const friendElement = friendsFilterSearch.map(contact => <Friend  key={contact.id}
                                                                              id={contact.id}
                                                                              name={contact.name}
                                                                              photo={contact.photos.large}
    />)

    return (
        <div className={classes.sidebarWrapper}>
            <div className={classes.title}>Friends</div>
            <div>
                <input className={classes.search} type="search" placeholder="  Search Contacts..."
                       onChange={changeFilter}/>
            </div>
            <div ref={friendsRed} className={classes.contactElement}>
                {friendElement}
            </div>
        </div>
    );
};
