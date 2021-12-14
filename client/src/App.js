import TopBar from './components/topbar/TopBar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context"

function App() {
    const { user } = useContext(Context);
    return (
        <BrowserRouter>
        <TopBar/>
            <Routes>
                <Route path="/about" element={< About />} />
                <Route path="/settings" element={user ? < Settings /> : < Register />} />
                <Route path="/" element={< Home />} />
                < Route path="/register" element={user ? < Home /> : < Register />} />
                <Route path="/login" element={user ? < Home /> : < Login />} />
                <Route path="/post/:id" element={< Single />} />
                < Route path="/create" element={user ? < Write /> : < Register />} />
                <Route path="/post/edit/:id" element={user ? < Write /> : < Register />} />
                < Route path="/contact" element={< Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;