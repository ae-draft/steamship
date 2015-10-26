require('../../../css/main.styl'); //styles
window.Actions = require('../actions/actions');
window.PersonsStore = require('../stores/personsStore');
let { Router, Route, IndexRoute } = require('react-router');
let ReactDOM = require('react-dom');
let NavBar = require('./navbar.jsx');
let Winner = require('./winner.jsx');
let Statistics = require('./statistics/statistics.jsx');
let ShortStats = require('./statistics/shortStats.jsx');
let About = require('./about.jsx');
moment.locale('ru');

let App = React.createClass({
  mixins: [Reflux.connect(Actions.NewWinner, 'winner')],
  getInitialState: function() {
    return { winner: null };
  },
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <div id="childrens">
          {this.props.children}
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  (<Router>
    <Route path="/" component={App}>
      <IndexRoute component={Winner} />
      <Route path="statistics/:id" component={Statistics} />
      <Route path="about" component={About} />
    </Route>
  </Router>),
  document.getElementById('content')
);
