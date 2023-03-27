import React from 'react';
import ReactDOM from 'react-dom';

class StateLifecycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {

    return (<h1> {this.state.date.toString()}</h1 >)
  }
}

ReactDOM.render(
  <StateLifecycle />,
  document.getElementById('root')
);