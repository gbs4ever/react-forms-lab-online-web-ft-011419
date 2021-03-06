import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }
  twittersubmit = (event) => {
    this.setState({ 
       message:  event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
      
        <input type="text" onChange={event => this.twittersubmit(event)} value = {this.state.message}  />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
