import React from 'react'
import p from './Post.module.css'
import ava1 from './../../../../Pictures/ava1.jpg'

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src={ava1} alt={ava1}/>
            {props.message}
            <div>
                <span>like {props.likecount}</span>
            </div>
        </div>
    )
}

export default Post