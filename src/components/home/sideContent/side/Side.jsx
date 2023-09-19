import { FaPaperPlane } from "react-icons/fa";
import Heading from "../../../common/Heading/Heading";
import Social from "../Social/Social";
import './Side.css'
import Tpost from "../Tpost/Tpost";


const Side = () => {
    const category = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
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
            <Tpost/>
            <section className="categorys">
                <Heading title="Category"/>
                {category.map((val)=>{
                    return(
                        <div key={val} className="category category1">
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>
        </>
    );
};

export default Side;