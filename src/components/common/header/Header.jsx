import { Link } from "react-router-dom";
import Head from "./Head";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import './Header.css'
import { useState } from "react";

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <>
            <Head/>
            <header>
                <div className="container paddingSmall">
                    <nav>
                        <ul className={navbar ? "navbar" : 'flex'} onClick={()=>setNavbar(false)}>
                            <li className=""><Link to="/">Home</Link></li>
                            <li><Link to="/culture">Culture</Link></li>
                            <li><Link to="/politics">Politics</Link></li>
                            <li><Link to="/memes">Memes</Link></li>
                            <li><Link to="/sports">Sports</Link></li>
                            <li><Link to="/boxed">Boxed</Link></li>
                            <li><Link to="/review">Review</Link></li>
                        </ul>
                        <button className="barIco" onClick={()=>setNavbar(!navbar)}>{navbar ? <FaTimesCircle size={25}/> : <FaBars size={25}/>}</button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;