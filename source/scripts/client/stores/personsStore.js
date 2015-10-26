let Actions = require('../actions/actions');
var StateMixin = require('reflux-state-mixin')(Reflux);

var PersonsStore = Reflux.createStore({
  mixins: [StateMixin],
  listenables: [Actions],
  getInitialState: function() {
    return {
      persons: [
        { Id: 1, Name: 'Володя', Wins: [] },
        { Id: 2, Name: 'Валера', Wins: [] },
        { Id: 3, Name: 'Юрий', Wins: [] },
        { Id: 4, Name: 'Ингеборг', Wins: [] }
      ],
      todayWinner: null
    };
  },
  init: function() {
    this.LoadPersons();
    this.GetTodayWinner();
  },
  LoadPersons: () => {

  },
  GetPersons: () => trigger(this.persons),
  GetWinner: function() {
    let winner = _.shuffle(this.state.persons)[_.random(0, this.state.persons.length - 1)];
    this._setStats(winner);
    this.setState({ todayWinner: winner });
    Actions.NewWinner(winner);
  },
  GetTodayWinner: function() {
    if(this.state.todayWinner) return;

    let todayWinner = _.find(this.state.persons, (person) => {
      if(!person.Wins.length) return false;
      console.log(person.Name, person.Wins);
      return _.find(person.Wins, (month) => {
        return _.some(month.Days, (day) => {
          return moment(day).dayOfYear() === moment(new Date()).dayOfYear();
        });
      });
    });

    this.setState({ todayWinner: todayWinner });
  },
  _setStats: function(winner) {
    let now = new Date();
    let month = (now.getMonth() + 1);
    let statMonth = _.find(winner.Wins, { Month: month });
    if(!!statMonth) {
      statMonth.Days.push(now);
    } else {
      winner.Wins.push({ Month: month, Days: [now] });
    }
  }
});

module.exports = PersonsStore;
