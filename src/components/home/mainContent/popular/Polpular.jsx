import Slider from "react-slick";
import { popular } from "../../../../../fakeData";
import Heading from "../../../common/Heading/Heading";
import "./Popular.css";
import { FaCalendar, FaComment } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Polpular = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 2,
        speed: 500,
        rows: 4,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 4,
            },
          },
        ],
      }
  return (
    <>
       <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider {...settings}>
            {popular.map((val) => {
              return (
                <div key={val.id} className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val.category}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <FaCalendar className="calender"/>
                        <label>{val.date}</label>
                      </div>
                      <div className='comment'>
                        <FaComment className="calender"/>
                        <label>{val.comments}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Polpular;
