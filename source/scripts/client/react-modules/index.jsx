require('../../../css/main.styl'); //styles

import { Router, Route, IndexRoute } from 'react-router';
let ReactDOM = require('react-dom');
let NavBar = require('./navbar.jsx');

let App = React.createClass({
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

    </Route>
  </Router>),
  document.getElementById('content')
);
