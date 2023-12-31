import Slider from "react-slick";
import { popular } from "../../../../../fakeData";
import "./Music.css";
import Heading from "../../../common/Heading/Heading";
import { FaCalendar, FaComment, FaShare } from "react-icons/fa";
const Music = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: false,
  };
  return (
    <>
      <section className="music">
        <Heading title="Music News" />
        <div className="content">
          <Slider {...settings}>
            {popular
              .filter((val) => val.category === "fun")
              .map((val) => {
                return (
                  <div key={val.id} className="items">
                    <div className="box shadow flexSB">
                      <div className="images">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div className="category category1">
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                        <div className="date">
                          <FaCalendar className="calender"/>
                          <label>{val.date}</label>
                        </div>
                        <p className="desc">{val.desc.slice(0, 250)}...</p>
                        <div className="comment">
                          <FaShare className="calender"/>
                          <label>Share / </label>
                          <FaComment className="calender"/>
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Music;
