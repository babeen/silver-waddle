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
    return (<h1>Welcom {this.props.name}</h1>)
  }
}

ReactDOM.render(
  <>
    <Welcome name="Yushika" />,
    <Welcome name="Kripa" />,
    <Welcome name="Manish" />,

  </>,

  document.getElementById('root')
);