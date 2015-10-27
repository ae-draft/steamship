let Actions = require('../actions/actions');
let StateMixin = require('reflux-state-mixin')(Reflux);
let Request = require('../common-modules/serverInteraction.js');

var PersonsStore = Reflux.createStore({
  mixins: [StateMixin],
  listenables: [Actions],
  getInitialState: function() {
    return {
      persons: [],
      todayWinner: null
    };
  },
  init: function() {
    this.LoadPersons();
  },
  LoadPersons: function() {
    let req = Request.send("/api/persons", {}, { method: "GET" });
      req.done((data) => {
        this.setState({ persons: data });
        this.GetTodayWinner();
      })
      .fail((err) => console.log("failed load persons"));
  },
  AddPerson: function(model) {
    var req = Request.send("/api/persons", JSON.stringify(model));
      req.done((data) => {
        this.setState({ persons: this.state.persons.concat(data.message) });
      });
      req.fail((err) => {
        console.log("error add person");
      });
  },
  GetPersons: () => trigger(this.state.persons),
  GetWinner: function() {
    let winner = _.shuffle(this.state.persons)[_.random(0, this.state.persons.length - 1)];
    this._setStats(winner);
    this.setState({ todayWinner: winner });
    Actions.NewWinner(winner);
    this._updatePersonWins();
  },
  GetTodayWinner: function() {
    if(this.state.todayWinner) return;

    let todayWinner = _.find(this.state.persons, (person) => {
      if(!person.Wins.length) return false;
      return _.find(person.Wins, (month) => {
        return _.some(month.Days, (day) => {
          return moment(day).dayOfYear() === moment(new Date()).dayOfYear();
        });
      });
    });

    this.setState({ todayWinner: todayWinner });
  },
  _updatePersonWins: function() {
    let model = _.clone(this.state.todayWinner, true);
    var req = Request.send("/api/persons/" + model._id, JSON.stringify(model), { method: 'PUT' });
      req.done((data) => {
        console.log("update wins of user");
      });
      req.fail((err) => {
        console.log("error update wins of user");
      });
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
