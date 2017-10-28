import React from 'react';
class MyButton extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('render');
    return <button onClick={this.props.onClick}>My Button</button>
  }
}
export default MyButton;