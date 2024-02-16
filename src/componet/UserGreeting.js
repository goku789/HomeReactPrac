import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: true,
    };
  }

  render() {

    if(this.state.isloggedin)
    {
        return (
            <div>
              <div>Welcome Adesh</div>
            </div>
          );
    }
    else{
        return (
            <div>
              <div>Welcome Guest</div>
            </div>
          );
    }

    // return (
    //   <div>
    //     <div>Welcome Adesh</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
