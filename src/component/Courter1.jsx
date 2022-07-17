import React, { Component } from "react";
import "./Counter.css";

class Courter extends Component {
  //state is predefine we are using it here
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  /**
   * renderTags use for providing if condition and loops
   * return string when tags length is 0 otherwise the elements in tags array
   */
  renderTags() {
    console.log(this);
    const { tags } = this.state;
    if (tags.length === 0) return <p>There are no tags</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  render() {
    return (
      <div>
        {/* we can't use loop in here so we are using map
                we have to provide key so react can find the element when it is change easily */}
        {/* <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> */}

        {/* we have write this in any tags */}
        {this.renderTags()}

        {/* if false or 0 is not there then result will be true 
                and return value will be the last value or element of this condition 
                more condition can be added use && operate*/}
        {this.state.tags.length === 0 && "please add some tags"}
      </div>
    );
  }
}

export default Courter;
