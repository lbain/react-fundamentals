var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName="appear"
          trasitionEnterTimeout={500}
          trasitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Main;