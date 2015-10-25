let Avatar = require('material-ui/lib/avatar');

let MonthStat = React.createClass({
  getColor: () => {
    let getRGB = () => _.random(0, 150);
    return `rgb(${getRGB()},${getRGB()},${getRGB()})`;
  },
  render() {
    let month = this.props.month;
    let days = month.Days.map((day, dayIndex) => {
        let style = { color: this.getColor() };
        return <Avatar style={style} key={dayIndex} className="stats-day">{moment(day).format('DD')}</Avatar>
      }
    );

    return (
      <div className="stats-month">
        <h3>{moment(month.Days[0]).format('MMMM')}</h3>
        <div className="stats-days-block">
          {days}
        </div>
      </div>
    )
  }
});

module.exports = MonthStat;
