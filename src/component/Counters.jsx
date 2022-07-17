import Counter from "./Counter2";
import { React, Component } from "react";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  };

  handleRest = () => {
    console.log("rest the counter");
    const counters = this.state.counters.map((c) => (c.value = 0));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("event handler of onDelete", counterId);

    /**
     * we are creating a array of object same as counters and it have all data except the data with same id as provide
     * then we are changing the state.
     */
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button className="restBtn" onClick={this.handleRest}>
          Rest
        </button>

        {this.state.counters.map((counter) => (
          // we are passing the value and children (Title) to it's child component
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
