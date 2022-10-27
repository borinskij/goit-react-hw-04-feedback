import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
