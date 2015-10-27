let AddPersonForm = require('../processing/addPerson.jsx');
let PersonsTable = require('../data-views/personsTable.jsx');

let AdminPage = React.createClass({
  mixins:[Reflux.ListenerMixin],
  getInitialState: function() {
    return { persons: PersonsStore.state.persons };
  },
  componentDidMount: function(){
    this.listenTo(PersonsStore, (state) => {
      this.setState({ persons: state.persons })
    });
  },
  render() {
    return (
      <div className="admin-page-block">
        <div className="page-header">
          <h1>Админка. <small>управление проектом</small></h1>
        </div>
        <PersonsTable persons={this.state.persons} />
        <br />
        <AddPersonForm />
      </div>
    )
  }
});

module.exports = AdminPage;
