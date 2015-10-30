let {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableHeaderColumn,
  TableRowColumn,
  TableFooter
} = require('material-ui/lib');
let Link = require('react-router').Link;

let PersonsTable = React.createClass({
  render: function() {
    let rows = this.props.persons.map((person, index) => {
      let count = _.sum(person.Wins, (month) => month.Days.length);
      return (
        <TableRow key={index}>
          <TableRowColumn>
            <Link to={`statistics/${person._id}`}>{person.Name}</Link>
          </TableRowColumn>
          <TableRowColumn>{count}</TableRowColumn>
        </TableRow>
      )
    });

    return (
      <Table fixedHeader={true} fixedFooter={true} selectable={true} multiSelectable={true}>
        <TableHeader enableSelectAll={true}>
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip='Список пользователей' style={{textAlign: 'center'}}>
              Список пользователей
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip='Имя пользователя'>Имя пользователя</TableHeaderColumn>
            <TableHeaderColumn tooltip='Победы пользователя'>Победы</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={true} showRowHover={true} stripedRows={false}>
          {rows}
        </TableBody>
      </Table>
    )
  }
});

module.exports = PersonsTable;
