import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloggedin: true
        }
    }



    render() {
       
       return( 
        this.state.isloggedin?
        <div>if Message</div>:
        <div>else statement</div>
       )


    }
}

export default ConditionalRendering