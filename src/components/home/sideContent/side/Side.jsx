import { FaPaperPlane } from "react-icons/fa";
import Heading from "../../../common/Heading/Heading";
import Social from "../Social/Social";
import './Side.css'


const Side = () => {
    return (
        <>
            <Heading title="Stay Connected"/>
            <Social/>
            <Heading title="Subscribe"/>
            <section className="subscribe">
                <h1 className="title">Subscribe to our new Stories</h1>
                <form action="">
                    <input type="text" placeholder="Email address" />
                    <button><FaPaperPlane/>Submit</button>
                </form>
            </section>
            <section className="banner">
                <img src="/images/sidebar-banner-new.jpg" alt="" />
            </section>
        </>
    );
};

export default Side;