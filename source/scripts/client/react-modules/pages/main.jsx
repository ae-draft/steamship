let Winner = require('../winner.jsx');
let ShortStats = require('../statistics/shortStats.jsx');
let MainPage = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: () => ({ winner: PersonsStore.state.todayWinner }),
  componentDidMount: function() {
    this.listenTo(PersonsStore, (state) => this.setState({ winner: state.todayWinner }));
  },
  render: function() {
    if(!this.state.winner) return null;

    return (
      <div className="main-page-block">
        <Winner />
        <ShortStats winner={this.state.winner} />
      </div>
    )
  }
});

module.exports = MainPage;
