import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./Counters";

class App extends Component {
  state = {
    tags: [
      { id: 1, count: 5 },
      { id: 2, count: 1 },
      { id: 3, count: 3 }
    ]
  };

  handleIncrement = tag => {
    const tags = [...this.state.tags];
    const index = tags.indexOf(tag);

    tags[index].count++;
    this.setState({ tags: tags });
  };

  handleDelete = counterId => {
    const deleteCounter = this.state.tags.filter(
      count => count.id !== counterId
    );
    this.setState({ tags: deleteCounter });
  };

  handleReset = () => {
    const counting = this.state.tags.map(counter => {
      counter.count = 0;
      return counter;
    });
    this.setState({ count: counting });
  };

  handleDecrement = tag => {
    const tags = [...this.state.tags];
    const index = tags.indexOf(tag);
  
    tags[index].count <= 0 ? this.setState({ count: 0 }) : tags[index].count--;
    
    this.setState({ tags: tags });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.tags.filter(tag => tag.count > 0).length}
        />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            tags={this.state.tags}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
