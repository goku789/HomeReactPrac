import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Hello'
      }
      this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            msg:"Welcome"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind