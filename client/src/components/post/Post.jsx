import './post.css'
import { Link } from 'react-router-dom'
export default function Post({ post }) {
   const publicFolder="https://ethioblog.herokuapp.com/images/"
    return (
        <div className="post">
            {post.photo && <img className="postImg" src={publicFolder+post.photo} alt="" />
            }
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(cat => (
                        <span className="postCat">{cat.name}</span>

                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>
    )
}
