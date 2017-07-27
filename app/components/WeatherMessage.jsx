var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//
//     var location = this.props.location;
//     var temp = this.props.temp;
//
//     // or
//     // var {location, temp} = this.props;
//
//     return (
//       <p>It is {temp} in {location}</p>
//     );
//   }
// });

// Stateless functional component
var WeatherMessage = (props) => {
  var {temp, location} = props;

  return (
    <p>It is {temp} in {location}</p>
  );
}



module.exports = WeatherMessage;
