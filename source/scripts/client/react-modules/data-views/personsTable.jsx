let {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableHeaderColumn,
  TableRowColumn,
  TableFooter
} = require('material-ui/lib');

let PersonsTable = React.createClass({
  render() {
    let rows = this.props.persons.map((person, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>{person.Name}</TableRowColumn>
          <TableRowColumn> </TableRowColumn>
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
