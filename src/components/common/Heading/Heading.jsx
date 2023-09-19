import PropTypes from "prop-types";
import './Heading.css'
const Heading = ({ title }) => {
  return (
    <div className="heading">
      <h6>{title}</h6>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Heading;
