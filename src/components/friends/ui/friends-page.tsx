import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "app/model/redux-store";
import {UserType} from "components/users/model/users-reducer";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {getFriendsThunkCreator} from "components/sidebar/model/sidebar-reducer";
import {Friend} from "components/sidebar/ui/friend/friend";
import classes from "./friends-page.module.css";

 const FriendsPage = () => {

    const friends = useSelector<AppStateType, UserType[]>(state => state.sidebar.users)
    const dispatch = useDispatch()

    const [friendsRef] = useAutoAnimate<HTMLDivElement>();

    useEffect(()=>{
        dispatch(getFriendsThunkCreator())
    },[])

    const changeFilter = (e: ChangeEvent<HTMLInputElement>): void => {
        let regExp = new RegExp(`${e.currentTarget.value}`, "gi")
        setFilter(regExp)
    }

    let regExp = new RegExp("", "gi")

    const [filter, setFilter] = useState(regExp)

    const friendsFilterSearch = friends.filter(el => filter.test(el.name))

    const friendElement = friendsFilterSearch.map(contact => <Friend  key={contact.id}
                                                                      id={contact.id}
                                                                      name={contact.name}
                                                                      photo={contact.photos.large}
    />)

    return (
        <div className={classes.friendsPageWrapper}>
            <div>
                <input className={classes.search} type="search" placeholder="  Search Contacts..."
                       onChange={changeFilter}/>
            </div>
            <div ref={friendsRef} className={classes.contactElement}>
                {friendElement}
            </div>
        </div>
    );
};

 export default FriendsPage
