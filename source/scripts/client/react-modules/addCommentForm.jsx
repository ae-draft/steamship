"use strict"

var AddCommentForm = React.createClass({
  getInitialState: () => { return { user: '', text: '' } },
  handleChange: function(event) {
    this.setState({[event.target.name]: event.target.value});
  },
  resetState: function() { this.setState({ user: '', text: '' }); },
  submitHandler: function(e) {
    e.preventDefault();
    this.props.addHandler(this.state, this.resetState);
  },
  render: function() {
    return (
      <div className="well well-sm">
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label for="inputUser" className="control-label">User</label>
            <input type="text" className="form-control" id="inputUser" name="user" placeholder="Your name" value={this.state.user} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="inputMessage" className="control-label">Message</label>
            <textarea className="form-control" id="inputMessage" name="text" placeholder="Type your message" rows="3" value={this.state.text} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AddCommentForm;
