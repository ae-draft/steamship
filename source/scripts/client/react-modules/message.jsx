moment.locale('ru');
var Message = React.createClass({
    render: function() {
      let parseDate = (date) => moment(date).format("dddd, MMMM Do YYYY, h:mm:ss");
      let styles = {
        backgroundColor: "whiteSmoke",
        borderRadius: "inherit"
      };

      return (
        <div className="panel panel-info">
          <div className="panel-body" style={styles}>
            <div className="label label-info">{parseDate(this.props.data.date)}</div>
            <div className="mess-text">
              <div className="label label-warning"> <strong>user {this.props.data.user}</strong>:</div>
              <div className="mess-text">{this.props.data.text}</div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Message;
