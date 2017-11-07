import React from 'react';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        count: ++this.state.count,
      })
    }, 1000)
  }
  render() {
    const {count} = this.state;
    const domArr = []
    for (let i = 0; i < count; i++) {
      domArr.push(<Modal key={i} />)
    }
    console.log('render:', count);
    return (
      <div>
        {domArr}        
      </div>
    );
  }
}

export default App;
