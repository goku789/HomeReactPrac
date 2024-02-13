import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         greetvalue:"Hello Welcom"
      }
      this.greetMethods=this.greetMethods.bind(this);
    }

     greetMethods(params) {
        alert(`All of you ${this.state.greetvalue}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetMethods}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponet
