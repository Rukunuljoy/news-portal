import { popular } from '../../../../../fakeData';
import Heading from '../../../common/Heading/Heading';
import './Popular.css'
import {FaCalendar, FaComment} from 'react-icons/fa'

const Polpular = () => {
    return (
        <section className='popular'>
            <Heading title="Popular"/>
            {
                popular.map((val)=>{
                    return (
                    <div key={val.id} className="items">
                        <div className="box shadow">
                            <div className="images row">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="category category1">
                                    <span>{val.category}</span>
                                </div>
                            </div>
                            <div className="text ro">
                                <h1 className="title">{val.title.slice(0,40)}...</h1>
                                <div className="date">
                                    <FaCalendar/>
                                    <label htmlFor="">{val.date}</label>
                                </div>
                                <div className="comment">
                                    <FaComment/>
                                    <label htmlFor="">{val.date}</label>
                                </div>
                            </div>
                        </div>
                    </div>
        )
        })
    }
        </section>
    );
};

export default Polpular;