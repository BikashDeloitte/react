import React, { Component } from "react";
import "./Counter.css";

class Courter extends Component {
  //state is predefine we are using it here
  state = {
    // value is coming from parent component
    value: this.props.counter.value,
    total: 7,
  };

  /**
   * we are using arrow function here so that we don't have to create constructor and bind the event
   *
   * we can just update the value of state like this.state.value++ will not will
   * we have to use setState to update it.
   */
  eventHandler = (product) => {
    console.log("product", product);
    this.setState({ value: this.state.value + 1 });
  };

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
          onClick={() => this.eventHandler(1)}
        >
          increment
        </button>
        <button
          className="delete-button"
          onClick={() => this.props.onDelete(this.props.courter.id)}
        >
          delete
        </button>
      </div>
    );
  }

  //display the value
  fomatCounter() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  // counter display colour change with value
  getCounterDisplayClasses() {
    let classes = "counter-display ";
    classes += this.state.value === 0 ? "counter-warming" : "counter-normal";
    return classes;
  }
}

export default Courter;
