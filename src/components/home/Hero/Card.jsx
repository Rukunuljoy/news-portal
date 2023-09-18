import PropTypes from 'prop-types';

export const Card = ({item}) => {
  const {id,cover,category,title,authorName,authorImg,time} = item;
  console.log(id,authorName,authorImg,time);
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <span className="category">
            {category}
          </span>
          <h1 className="titleBg">{title}</h1>
          <div className="author flex">
            <span>{authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};