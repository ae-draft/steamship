let MonthStat = require('./monthStats.jsx');
let ShortStats = require('./shortStats.jsx');

let Statistics = React.createClass({
  mixins: [Reflux.ListenerMixin],
  _findById: (_id, store) => {
    return _.find(store, { '_id': _id });
  },
  getInitialState: function() {
    return {
      user: this._findById(this.props.params.id, PersonsStore.state.persons)
    };
  },
  componentDidMount: function(){
    this.listenTo(PersonsStore, (state) => {
      this.setState({ user: this._findById(this.props.params.id, state.persons) });
    });
  },
  render: function() {
    if(_.isEmpty(this.state.user)) return null;
    
    let monthsStats = this.state.user.Wins.map((month, index) => {
      return (
        <div className="stats-month" key={index}>
          <MonthStat month={month} key={index} />
        </div>
      )
    });

    return (
      <div className="statistics-block">
        <div className="page-header">
          <h1>Статистика <small>для пользователя {this.state.user.Name}</small></h1>
        </div>
        <ShortStats winner={this.state.user} />
        {monthsStats}
      </div>
    )
  }
});

module.exports = Statistics;
