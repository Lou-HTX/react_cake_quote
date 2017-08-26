// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var links = React.createClass({
  render: function() {
    return (
        <div>
            <h1>This is the links page </h1>
        </div>
    );
  }
});

module.exports = links;