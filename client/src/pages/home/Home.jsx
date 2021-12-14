import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'
import { useEffect,useState } from 'react'
import {useLocation} from 'react-router'
import './home.css'
import { axiosInstance } from '../../config'
export default function Home() {
    const {search}=useLocation();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchPosts=async()=>{
            const res=await axiosInstance.get("/post"+search);
            setPosts(res.data);
        }
        fetchPosts();
    },[search])
    return (
        <div>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
            <Footer/>
        </div>
    )
}
