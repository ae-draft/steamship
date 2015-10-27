let Link = require('react-router').Link;
let {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  RaisedButton,
  FlatButton,
  FloatingActionButton
} = require('material-ui/lib');

var NavBar = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return { isHaveWinner: !_.isEmpty(PersonsStore.state.todayWinner) };
  },
  componentDidMount: function() {
    this.listenTo(PersonsStore, (state) => {
      this.setState({ isHaveWinner: !_.isEmpty(state.todayWinner) });
    });
  },
  render: function() {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <Link to={'/'}><img src="/assets/boat.png" className="icoHead" /></Link>
          <ToolbarTitle text="Пароход счастья" />
          <ToolbarSeparator/>
          <RaisedButton label="START!" disabled={this.state.isHaveWinner} secondary={true} onClick={Actions.GetWinner} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <FlatButton label="Что это такое?" linkButton={true} href="#/about" />
          <FlatButton label="Admin" primary={true} linkButton={true} href="#/admin" style={{textAlign: "center"}} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

module.exports = NavBar;
