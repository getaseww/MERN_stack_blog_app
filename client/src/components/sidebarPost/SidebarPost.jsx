import React from 'react'
import './sidebarPost.css'
import {Link} from 'react-router-dom'
export default function SidebarPost({ post }) {
    return (
        <div className='sidebarPost'>
            <Link to={`/post/${post._id}`} className="sidebarLink">
                <p className="sidebarPostTitle">{post.title}</p>
            </Link>
        </div>
    )
}
