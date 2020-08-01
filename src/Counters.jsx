import React, { Component } from "react";

import Counter from "./components/hello";

class Counters extends Component {
  render() {
    const {tags, onReset, onDelete, onIncrement, onDecrement} = this.props
    return (
      <div>
        
          <button
            onClick={onReset}
            className="btn m-2 btn-primary btn-sm"
          >
            Reset
          </button>

          {tags.map(tag => (
            <Counter
              key={tag.id}
              tags={tag}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Counter>
          ))}
       
      </div>
    );
  }
}

export default Counters;
