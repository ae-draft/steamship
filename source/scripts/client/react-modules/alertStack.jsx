"use strict"

var AlertStack = React.createClass({
  dismisHandler: function() {
    e.preventDefault();

  },
  render: function() {
    return (
      <div className="alerts-stack">
      {this.props.alerts.map((alert, index) => {
        let styleClass = `alert alert-${alert.class} alert-dismissible`;
        return <div className={styleClass} role="alert" key={index}>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            {alert.text}
          </div>
      })}
      </div>
    );
  }
});

module.exports = AlertStack;
