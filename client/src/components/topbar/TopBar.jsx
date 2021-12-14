import { React } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { useContext, useState } from 'react'
import "./topbar.css"
export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const [query, setQuery] = useState("");
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.replace(`/?${query}`)
    }
    return (
        <div className="top">
            <div className="topLeft">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="navLink">Home</Link></li>
                    {
                        user && <li className='topListItem'><Link to="/create" className='navLink'>Create Post</Link></li>

                    }
                    <li className="topListItem" ><Link to="/about" className="navLink">About</Link></li>
                    <li className="topListItem"><Link to="/contact" className="navLink">Contact</Link></li>

                </ul>
            </div>
            <div className="topCenter">
                <form onSubmit={handleSubmit} className='searchForm'>
                    <input type="text" placeholder='Search...' className='searchField' autoFocus onChange={(e) => setQuery(e.target.value)} />
                    <button className='searchButton'><i className='fas fa-search'></i></button>
                </form>
            </div>
            <div className="topRight">
                <ul className='topList'>
                    <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
                    <li className="topListItem">{!user && <Link to="login" className="navLink">Login</Link>}
                    </li>
                </ul>
            </div>
        </div>
    )
}