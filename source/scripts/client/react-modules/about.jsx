var Clock = require('./clock.jsx');
var About = React.createClass({
  render() {
    return (
      <div className="well">
        <Clock />
        <div className="inner-content">
        <h1>
          Why React?
        <a className="edit-page-link" href="https://github.com/facebook/react/tree/master/docs/docs/01-why-react.md" target="_blank">Edit on GitHub</a>
        </h1>
        <div className="subHeader"></div>
        <p>React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the <strong>V</strong> in <strong><a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC</a></strong>.</p>

        <p>We built React to solve one problem: <strong>building large applications with data that changes over time</strong>.</p>
        <h2><a className="anchor" name="simple"></a>Simple <a className="hash-link" href="#simple">#</a></h2>
        <p>Simply express how your app should look at any given point in time, and React will automatically manage all UI updates when your underlying data changes.</p>
        <h2><a className="anchor" name="declarative"></a>Declarative <a className="hash-link" href="#declarative">#</a></h2>
        <p>When the data changes, React conceptually hits the "refresh" button, and knows to only update the changed parts.</p>
        <h2><a className="anchor" name="build-composable-components"></a>Build Composable Components <a className="hash-link" href="#build-composable-components">#</a></h2>
        <p>React is all about building reusable components. In fact, with React the <em>only</em> thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.</p>
        <h2><a className="anchor" name="give-it-five-minutes"></a>Give It Five Minutes <a className="hash-link" href="#give-it-five-minutes">#</a></h2>
        <p>React challenges a lot of conventional wisdom, and at first glance some of the ideas may seem crazy. <a href="https://signalvnoise.com/posts/3124-give-it-five-minutes">Give it five minutes</a> while reading this guide; those crazy ideas have worked for building thousands of components both inside and outside of Facebook and Instagram.</p>
        <h2><a className="anchor" name="learn-more"></a>Learn More <a className="hash-link" href="#learn-more">#</a></h2>
        <p>You can learn more about our motivations behind building React in <a href="/react/blog/2013/06/05/why-react.html">this blog post</a>.</p>
        <div className="docs-prevnext">
          <a className="docs-next" href="/react/docs/displaying-data.html">Next →</a>
        </div>
      </div>
      </div>
    )
  }
});

module.exports = About;
