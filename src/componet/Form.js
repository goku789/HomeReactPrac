import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usrname: "",
      comments:"",
      topic:'react'
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      usrname: event.target.value,
    });
  };
  handelComment=(event)=>{
    this.setState({
        comments:event.target.value
    })
  }

  topicChange=(event)=>{
    this.setState({
        topic:event.target.value
    })
  }
  handelSubmit=event=>{
    alert(`${this.state.usrname}${this.state.comments}${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    const {usrname,comments,topic}=this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={usrname}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div>
            <label>comments</label>
            <textarea 
            value={comments}
            onChange={this.handelComment}
            ></textarea>
        </div>
        <label>Topipc</label>
        <select value={topic} onChange={this.topicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="node">Node</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
