import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import './Social.css'


const Social = () => {
    return (
        <>
            <section className="social">
            <div className="socBox">
                <li><FaFacebook/></li>
                <span>12,780 likes</span>
            </div>
            <div className="socBox">
                <li><FaPinterest /></li>
                <span>6780 fans</span>
            </div>
            <div className="socBox">
                <li><FaTwitter /></li>
                <span>1383 Follow</span>
            </div>
            <div className="socBox">
                <li><FaInstagram/></li>
                <span>12,780 follower</span>
            </div>
            <div className="socBox">
                <li><FaYoutube/></li>
                <span>1,780 subscribe</span>
            </div>
            </section>
        </>
    );
};

export default Social;