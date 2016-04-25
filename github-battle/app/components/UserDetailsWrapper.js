var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
  return (
    <div className="col-sm-6">
      <p className="lead"> {props.title} </p>
      {props.children}
    </div>
  );
};

UserDetailsWrapper.propTypes = {
  title: PropTypes.string.isRequired
};

module.exports = UserDetailsWrapper;