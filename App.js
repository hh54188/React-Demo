import React from 'react';
import MyButton from './Button.js';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Beijing'
    }
  }
  render() {
    console.log(ReactDOM.findDOMNode(this));
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

App.defaultProps = {
  name: 'default'
}

export default App;
