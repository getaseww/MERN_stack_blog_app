import Sidebar from '../../components/sidebar/Sidebar'

import './settings.css'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                    <img src="https://devtuts4you.com/wp-content/uploads/2021/11/blog.png" alt="" className="writeImg" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" style={{display:"none"}} id="fileInput"/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Getasew"/>
                    <label>E-mail</label>
                    <input type="email" placeholder="get@gmail.com"/>
                    <label >Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
