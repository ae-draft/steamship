"use strict"

var Clock = React.createClass({
  intervalId: null,
  componentWillMount: function() {
    let now = () => new Date().toLocaleString();
    this.setState({clock: now()});
    this.intervalId = setInterval(() => this.setState({clock: now()}), 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },
  render: function() {
    return (
      <div className="ui-clock">
        <div className="label label-success">{this.state.clock}</div>
      </div>
    );
  }
});

module.exports = Clock;
