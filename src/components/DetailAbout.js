import PropTypes from 'prop-types';

const number = 9743;

console.log(typeof number);

export default function DetailAbout(props) {
  return (
    <>
      <h1>Title: {props.title}</h1>
      <p>Summary: {props.summary}</p>
      <p>TOtal guest: {props.total}</p>
      <p>{number}</p>
    </>
  );
}

DetailAbout.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
