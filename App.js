import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      text: 'Beijing'
    });
    console.log(this.state.text);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default App;
