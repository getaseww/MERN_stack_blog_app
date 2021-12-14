import "./sidebar.css"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarPost from "../sidebarPost/SidebarPost"
import { axiosInstance } from "../../config";

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get('/category');
            setCats(res.data);
        };
        getCats();
    }, []);

    useEffect(() => {
        const getPosts = async () => {
            const res = await axiosInstance.get("/post");
            setPosts(res.data)
        };
        getPosts();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <li className="sidebarListItem"><Link to={`/?cat=${c.name}`} className="catLink">{c.name}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem sidebarPosts">
                <span className="sidebarTitle">LATEST POSTS</span>
               <p className="sidebarPostTitle"> {
                posts.slice(0,5).map(p => (
                    <SidebarPost post={p} />
                ))}</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SOCIAL LINKS</span>
                <div className="sidebarSocial">
                    <a href="http://facebook.com" className="SidebarSocialLink">
                    <i className="sidebarIcon fab fa-facebook-square"></i></a>
                    <a href="http://twitter.com" className="SidebarSocialLink"><i className="sidebarIcon fab fa-twitter-square"></i></a>
                    <a href="http://linkedin.in" className="SidebarSocialLink"><i className="sidebarIcon fab fa-linkedin"></i></a>
                    <a href="http://teleegram.org" className="SidebarSocialLink"><i className="sidebarIcon fab fa-telegram"></i></a>
                </div>
            </div>
        </div>
    )
}
