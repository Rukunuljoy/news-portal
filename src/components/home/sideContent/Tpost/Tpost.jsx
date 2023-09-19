import { tpost } from "../../../../../fakeData";
import Heading from "../../../common/Heading/Heading";
import './Tpost.css'


const Tpost = () => {
    return (
        <>
           <section className="tpost">
            <Heading title="TikTok Post"/>
            {tpost.map((val)=>{
                return(
                    <div key={val.id} className="box flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h1 className="title">{val.title.slice(0,35)}...</h1>
                            <span>a year ago</span>
                        </div>
                    </div>
                )
            })}
            </section> 
        </>
    );
};

export default Tpost;