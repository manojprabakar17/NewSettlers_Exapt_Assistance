import PropTypes from 'prop-types';

const Label = ({ text, color }) => {
  return (
    <label className={`custom-label ${color}`}>
      {text}
    </label>
  );
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
};
  
Label.defaultProps = {
    color: 'black',
};

export default Label;



