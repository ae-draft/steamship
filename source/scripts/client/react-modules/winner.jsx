let Avatar = require('material-ui/lib/avatar');
var Link = require('react-router').Link;

let Winner = React.createClass({
  mixins: [Reflux.connect(Actions.NewWinner, "winner")],
  getInitialState: function() {
    return { winner: PersonsStore.state.todayWinner };
  },
  render() {
    return ( this.state.winner ?
      (<div className="winner-block">
          <h3>Поздравляем!</h3>
          <h2>Сегодняшний победитель</h2>
          <Avatar className="avatar">{this.state.winner.Name[0]}</Avatar>
          <div className="name"><Link to={`statistics/${this.state.winner.Id}`}>{this.state.winner.Name}</Link></div>
      </div>) : null
    )
  }
});

module.exports = Winner;
