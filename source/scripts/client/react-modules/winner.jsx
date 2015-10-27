let Avatar = require('material-ui/lib/avatar');
let Link = require('react-router').Link;

let Winner = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return { winner: PersonsStore.state.todayWinner };
  },
  componentDidMount: function(){
    this.listenTo(PersonsStore, (state) => {
      this.setState({ winner: state.todayWinner });
    });

  },
  render() {
    return ( this.state.winner ?
      (<div className="winner-block">
          <h3>Поздравляем!</h3>
          <h2>Сегодняшний победитель</h2>
          <Avatar className="avatar">{this.state.winner.Name[0].toUpperCase()}</Avatar>
          <div className="name"><Link to={`statistics/${this.state.winner._id}`}>{this.state.winner.Name}</Link></div>
      </div>) : null
    )
  }
});

module.exports = Winner;
