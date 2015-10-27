let Winner = require('../winner.jsx');
let ShortStats = require('../statistics/shortStats.jsx');
let MainPage = React.createClass({
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
    return (
      <div className="main-page-block">
        <Winner />
        { this.state.winner ? <ShortStats winner={this.state.winner} /> : null }
      </div>
    )
  }
});

module.exports = MainPage;
