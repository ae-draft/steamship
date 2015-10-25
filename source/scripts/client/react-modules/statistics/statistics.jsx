let MonthStat = require('./monthStats.jsx');
let ShortStats = require('./shortStats.jsx');

let Statistics = React.createClass({
  getInitialState: function() {
    return {
      user: _.find(PersonsStore.state.persons, { 'Id': +this.props.params.id })
    };
  },
  render() {
    let monthsStats = this.state.user.Wins.map((month, index) => {
      return (
        <div className="stats-month" key={index}>
          <MonthStat month={month} key={index} />
        </div>
      )
    });

    return (
      <div className="statistics-block">
        <h3>Статистика</h3>
        <ShortStats winner={this.state.user} />
        {monthsStats}
      </div>
    )
  }
});

module.exports = Statistics;
