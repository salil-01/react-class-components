import React from "react";

class StatefulClassComponent extends React.Component {
  //syntax for writing
  constructor(props) {
    super(props);
    this.state = {
      msg: "clicked me",
      value: 0,
    };
  }
  handleClick = () => {
    console.log(this.state.value);
    //state can not be directly modified
    // this.setstate to modify state
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <>
        <h1>Hii from {this.props.name}</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}
export default StatefulClassComponent;
