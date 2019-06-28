import React, { Component } from 'react';
import './App.css';


class App extends Component {

  // FOR SINGAL INPUT BOX
  state = {
    text : "abcd"
  }

  whenChange = (event) => {
    this.setState({ [event.target.name] : event.target.value})
  }

  // FOR TWO INPUT BOXES
 /* state = {
    fname : "",
    sname: ""
  }

  whenChange = (event) => {
    console.log(event.target)
    const {name, value} = event.target
    this.setState({[name] : value})
  }*/

  render() {
    return (
      <div>
        <input type = "text" name = "text" value = {this.state.text} onChange = {this.whenChange}/>
        <input type = "text" name = "fname" value = {this.state.fname} onChange = {this.whenChange}/>
        <input type = "text" name = "sname" value = {this.state.sname} onChange = {this.whenChange}/>
        <p>{this.state.text}</p>
        <p>{this.state.sname}</p>
      </div>
    );
  }
}

export default App;
