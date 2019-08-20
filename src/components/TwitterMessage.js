import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // new code
      message: "Type your tweet here."
      // end of new code
    };
  }
  
  characterWatcher = event => {
    this.setState({
      message: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
