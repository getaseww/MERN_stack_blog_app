import './singlePost.css'
import { useLocation } from 'react-router';
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import { axiosInstance } from '../../config';
export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context)
    const publicFolder = "https://ethioblog.herokuapp.com/images/"

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(() => {
        const getPost = async () => {
            const res = await axiosInstance.get('/post/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);
    const handleUpdate = async () => {
       try{
        var res=await axiosInstance.put("/post/update/" + path,{
            username:user.username,
            title,
            desc,
        });
        if(res.status===200){
            setUpdateMode(false);
        }
       }catch(err){
           console.log(err);
       }
    }

    const handleDelete = async () => {
        try {
            var res = await axiosInstance.delete(`/post/delete/${path}`, { data: { username: user.username } });
            if (res.status === 200) {
                window.location.replace("/")
            } else {
                console.log("hello delete" + res.status);
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img src={publicFolder + post.photo} alt={post.photo} className="singlePostImg" />}
                {updateMode ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="singlePostTitleInput" autoFocus /> : (
                    <h1 className="singlePostTitle">{title}
                        {post.username === user?.username &&
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        }
                    </h1>
                )

                }

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b><Link to={`/?user=${post.username}`} className="nameLink">{post.username}</Link></b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea name="" id="" cols="30" rows="10" className="singlePostDescInput" autoFocus onChange={(e) => setDesc(e.target.value)}>{desc}</textarea> : (
                    <p className="singlePostDesc">{desc}</p>

                )

                }
                {
                    updateMode &&< button className="singlePostButton" onClick={handleUpdate} >Update</button>

                }
        </div>
        </div >
    )
}