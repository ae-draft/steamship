var Message = require('./message.jsx');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Panel = React.createClass({
  render: function() {
    let CompiledMessages = this.props.messages.map((mess, index) => <Message key={index} data={mess} />);
    return (
      <div className="panel panel-info" id="messages-panel">
        <div className="panel-body bg-info">
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={300} >
            {CompiledMessages}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
});

module.exports = Panel;
