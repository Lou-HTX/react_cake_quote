// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var gallery = React.createClass({
  render: function() {
    return (
            
      <div className="container">
        <div className="col-md-12">
        <div className="row">
          <div className="gal">
            <img src="../images/batman_cake.png" alt=""></img>
            <img src="../images/bb-8.png" alt=""></img>
            <img src="../images/unicorn.png" alt=""></img>
            <img src="../images/cake_1.jpg" alt=""></img>
            <img src="../images/cake_3.jpg" alt=""></img>
            <img src="../images/cake_9.jpg" alt=""></img>
            <img src="../images/cake_4.jpg" alt=""></img>
            <img src="../images/cake_5.jpg" alt=""></img>
            <img src="../images/cake_1" alt=""></img>
            <img src="../images/cake_6.jpg" alt=""></img>
            <img src="../images/cake_9.jpg" alt=""></img>
            <img src="../images/cake_10.jpg" alt=""></img>
            <img src="../images/cake13.jpg" alt=""></img>
            <img src="../images/cake14.jpg" alt=""></img>
            <img src="../images/cake15.jpg" alt=""></img>
            <img src="../images/cake17.jpg" alt=""></img>
            <img src="../images/cake18.jpg" alt=""></img>
            <img src="../images/cake19.jpg" alt=""></img>
            <img src="../images/cake20.jpg" alt=""></img>
            <img src="../images/cake21.jpg" alt=""></img>
            <img src="../images/cake22.jpg" alt=""></img>
            <img src="../images/cake23.jpg" alt=""></img>
          </div>
        </div>
        </div>
      </div>

    );
  }
});

module.exports = gallery;