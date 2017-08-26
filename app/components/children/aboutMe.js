// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var aboutMe = React.createClass({
  render: function() {
    return (
        <div>
            <h1>This is the About Me page </h1>
        </div>
    );
  }
});

module.exports = aboutMe;