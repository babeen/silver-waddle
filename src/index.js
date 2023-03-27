import React from 'react';
import ReactDOM from 'react-dom';

//Creacting component
//Function component
// function Welcome(props) {
//   return (<h1>Welcome {props.name}</h1>)
// }

//Class component
class Welcome extends React.Component {
  render() {
    return (<h1>Welcome {this.props.name} and your employee id is {this.props.empid}</h1>)
  }
}

ReactDOM.render(
  <>
    <Welcome name="Yushika" empid="1" />,
    <Welcome name="Kripa" empid="2" />,
    <Welcome name="Manish" empid="3j" />,

  </>,

  document.getElementById('root')
);