let Link = require('react-router').Link;
let {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  RaisedButton,
  FlatButton
} = require('material-ui/lib');
let Actions = require('../actions/actions');

var NavBar = React.createClass({
  mixins: [ Reflux.listenTo(Actions.NewWinner, 'onNewWinner') ],
  getInitialState: () => ( {isHaveWinner: false} ),
  onNewWinner: function (winner) {
    this.setState({isHaveWinner: true});
  },
  render: function() {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <Link to={'/'}><img src="/public/assets/boat.png" className="icoHead" /></Link>
          <ToolbarTitle text="Пароход счастья" />
          <ToolbarSeparator/>
          <RaisedButton label="START!" disabled={this.state.isHaveWinner} secondary={true} onClick={Actions.GetWinner} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <FlatButton label="Что это такое?" linkButton={true} href="#/about" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

module.exports = NavBar;
