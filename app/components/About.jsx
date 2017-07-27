var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// Stateless functional component
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Here you can find local weather in any city. Have fun!</p>
    </div>
  )
};

module.exports = About;
