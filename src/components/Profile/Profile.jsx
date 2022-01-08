import React from 'react'
import pic from "../../Pictures/wp.jpg";
import p from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (<div className={p.content}>
            <div><img className={p.image} src={pic} alt={pic}/></div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>)
}

export default Profile