import React from 'react';
import axios from 'axios'
 
/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: ''
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  handleClick(e){

    axios.post('/api/addToDo', {user: 1, text: this.state.input}).then(() =>{
      this.setState({
        list: this.state.list.concat([this.state.input]),
        input: ''
      });
    });
  }
 
  render() {
    return (
      <div>
      <h1>Enter Items here!</h1>
      <input onChange={(e) => this.handleChange(e)} value={this.state.input} placeholder={'Enter Here'} />
      <button onClick={this.handleClick}> Add To List </button>
      {this.state.list.map((val, key) =>{
        return(
          <div key={key}>
          {val}
          </div>
          )
      })}
      </div>

    );
  }
}
export default App;