let TextField = require('material-ui/lib').TextField;
let RaisedButton = require('material-ui/lib').RaisedButton;
let Snackbar = require('material-ui/lib').Snackbar;

let AddPersonForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return { name: '' };
  },
  _submitHandler: function() {
    Actions.AddPerson(this.state);
    this.setState({ name: '' });
    this.refs.snackbar.show();
  },
  render(){
    return (
      <div className="panel panel-default add-person-block">
        <div className="panel-heading">
          <h3 className="panel-title">Доабвить нового пользователя</h3>
        </div>
        <div className="panel-body">
          <TextField
            hintText="Имя нового пользователя"
            floatingLabelText="Введите имя пользователя"
            valueLink={this.linkState('name')} />
          <br />
          <RaisedButton label="Submit" secondary={true} onClick={this._submitHandler} onEnterKeyDown={this._submitHandler} />
          <Snackbar ref="snackbar" message="New person add successfull" autoHideDuration={5000} />
        </div>
      </div>
  )}
});

module.exports = AddPersonForm;
