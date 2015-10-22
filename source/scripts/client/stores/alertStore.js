let AlertActions = require('../actions/alertActions');
let MessageStore = require('../stores/messageStore');

let AlertTypes = {
  Messages: {
    NotFound: 'M1'
  }
}

var AlertStore = Reflux.createStore({
    listenables: [AlertActions],
    alertList: [],
    init: function() {
      this.listenTo(MessageStore, this.output);
    },
    output: function(messages) {
      if(_.isEmpty(messages))
      {
        if(!_.some(this.alertList, { type: AlertTypes.Messages.NotFound }))
          this.alertList = this.alertList.concat({
            type: AlertTypes.Messages.NotFound,
            text: "No messages found!",
            class: "info"
          });
      } else {
        this.alertList = _.dropWhile(this.alertList, { type: AlertTypes.Messages.NotFound });
      }

      this.trigger(this.alertList);
    },
    getAlerts: function() {
      return this.alertList;
    }
});

module.exports = AlertStore;
