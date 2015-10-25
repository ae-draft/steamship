let ShortStats = React.createClass({
  render() {
    let count = _.sum(this.props.winner.Wins, (month) => month.Days.length);
    let last = _.max(Array.prototype.concat(_.flatten(_.pluck(this.props.winner.Wins, 'Days'))));

    return (
      <div className="short-stats-block">
        <div className="stats-count">
          Кол-во побед: <strong>{count}</strong>
        </div>
        <div className="stats-last">
          Последняя победа: <strong>{moment(last).format('dddd DD MMMM YYYY')}</strong>
        </div>
      </div>
    )
  }
});

module.exports = ShortStats;
