import React from 'react';
import MyButton from './Button.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1],
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      arr: [...this.state.arr, 2],
    });

    // const arr = this.state.arr;
    // arr.push(2);
    // this.setState({
    //   arr: arr,
    // })
  }
  render() {
    return (
      <MyButton onClick={this.onClick} arr={this.state.arr} />
    );
  }
}

App.defaultProps = {
  name: 'default'
}

export default App;
