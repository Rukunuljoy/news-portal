import { discover } from '../../../../fakeData';
import Heading from '../../common/Heading/Heading';
import './Discover.css'

const Discover = () => {
    return (
        <>
           <section className='discover'>
            <div className="container">
                <Heading title="Discover"/>
                <div className="content">
                    {discover.map((val)=>{
                        return (
                            <div key={val.id} className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <h1 className='title'>{val.title}</h1>
                            </div>
                        )
                    })}
                </div>

            </div>
            </section> 
        </>
    );
};

export default Discover;