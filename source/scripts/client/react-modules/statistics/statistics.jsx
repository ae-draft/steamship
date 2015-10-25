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
