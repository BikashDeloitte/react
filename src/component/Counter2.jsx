import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    // prop contain the value that is pass to this component from it's parent and parent component
    console.log("props ", this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getCounterDisplayClasses()}>
          {this.fomatCounter()}
        </span>

        {/* we are passing function reference not function in onClick
                i.e -> onClick={this.eventHandler}
                If we have to pass argument then we have to use arrow function
                i.e -> 
            */}
        <button
          className="increment-button"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          increment
        </button>
        <button
          className="delete-button"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </div>
    );
  }

  //display the value
  fomatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  // counter display colour change with value
  getCounterDisplayClasses() {
    let classes = "counter-display ";
    classes +=
      this.props.counter.value === 0 ? "counter-warming" : "counter-normal";
    return classes;
  }
}

export default Counter;
