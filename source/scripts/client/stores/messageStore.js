var MessageActions = require('../actions/messageActions');
var Errors = require('../../common/error-messages');

var MessageStore = Reflux.createStore({
    listenables: [MessageActions],
    messageList: [],
    init: function() {
      //this.loadMessages();
    },
    loadMessages: function() {
      var req = Request.send("/api/messages", {}, { method: "GET" });
      req.done((data) => this.updateState(data))
         .fail((err) => console.log(Errors.client.GET_FAILED_MESSAGES));

      MessageActions.complete();
    },
    addMessage: function(model, callback) {
      var req = Request.send("/api/messages", JSON.stringify(model));
      req.done((data) => {
        this.updateState(this.messageList.concat(data.message));
        if(!!callback) callback();
      });
      req.fail((err) => {
        console.log(Errors.client.ADD_FAILED_MESSAGE, err);
        if(!!callback) callback();
      });
    },
    getMessages: function() {
      if(!_.isEmpty(this.messageList))
        this.trigger(this.messageList);
      else
        this.loadMessages();
    },
    updateState: function(newState) {
      this.trigger((this.messageList = newState));
    }
});

module.exports = MessageStore;
