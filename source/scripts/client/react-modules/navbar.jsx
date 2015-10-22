var Link = require('react-router').Link;
const Toolbar = require('material-ui/lib/toolbar/toolbar');
const DropDownMenu = require('material-ui/lib/drop-down-menu');
const ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
const ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
const FontIcon = require('material-ui/lib/font-icon');
const DropDownIcon = require('material-ui/lib/drop-down-icon');
const ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
const RaisedButton = require('material-ui/lib/raised-button');

var NavBar = React.createClass({
  render: function() {
    var filterOptions = [
      { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' },
      { payload: '4', text: 'Complete Voice' },
      { payload: '5', text: 'Complete Text' },
      { payload: '6', text: 'Active Voice' },
      { payload: '7', text: 'Active Text' },
    ];
    var iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' }
    ];
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems={filterOptions} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <ToolbarTitle text="Options" />
          <FontIcon className="mui-icon-sort" />
          <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
          <ToolbarSeparator/>
          <RaisedButton label="Create Broadcast" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

module.exports = NavBar;
