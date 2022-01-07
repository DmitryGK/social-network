import React from 'react'
import pic from "../Pictures/wp.jpg";
import './Profile.module.css'


const Profile = () => {
    return (<div className='content'>
            <div><img className='image' src={pic} alt={pic}/></div>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className='item'>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
            </div>
        </div>)
}

export default Profile