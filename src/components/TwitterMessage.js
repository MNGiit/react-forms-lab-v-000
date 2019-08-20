import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // new code
      message: "Type your tweet here."
    };
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
