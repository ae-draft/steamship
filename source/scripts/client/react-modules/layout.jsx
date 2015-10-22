var MessageActions = require('../actions/messageActions');
var MessageStore = require('../stores/messageStore');
var AlertStore = require('../stores/alertStore');
var Panel = require('./panel.jsx');
var Clock = require('./clock.jsx');
var AddCommentForm = require('./addCommentForm.jsx');
var AlertStack = require('./alertStack.jsx');

var Layout = React.createClass({
  mixins: [
    Reflux.connect(MessageStore, 'messages'),
    Reflux.connect(AlertStore, 'alerts'),
    Reflux.ListenerMixin
  ],
  getInitialState: () => {
    return { messages: [], alerts: [] };
  },
  componentDidMount: function() {
    MessageActions.getMessages();
    this.intervalId = setInterval(() => MessageActions.loadMessages(), 3000);
    this.listenTo(MessageActions.complete,
      () => console.log('fire complete event in MessageStore, catch in layout component')
    );
  },
  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },
  addMessage: function(model, callback) {
    MessageActions.addMessage(model, callback);
  },
  render: function() {
    return (
      <div>
          <Clock />
          { this.state.messages && !!this.state.messages.length ? <Panel messages={this.state.messages} /> : null }
          <AddCommentForm addHandler={this.addMessage} />
          { this.state.alerts && !!this.state.alerts.length ? <AlertStack alerts={this.state.alerts} /> : null }
      </div>
    );
  }
});

module.exports = Layout;
