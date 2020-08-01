import React, { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1 mr-5">
          <span className={this.getBadgeClasses()}>{this.countFormat()}</span>
          </div>
          <div className="col">
          <button
            className="btn btn-sm mr-2 font-weight-bold btn-secondary"
            style={{ fontSize: 15 }}
            onClick={() => this.props.onIncrement(this.props.tags)}
          >
            +
          </button>
          <button
            style={{ fontSize: 15 }}
            className={this.getFade()}
            onClick={() => {
              this.props.onDecrement(this.props.tags);
            }}
              disabled={this.props.tags.count === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => {
              this.props.onDelete(this.props.tags.id);
            }}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
          </div>

        </div>
      </React.Fragment>
    );
  }

  getFade = () => {
    let a = "btn btn-sm m-3 font-weight-bold btn-";
    a += this.props.tags.count === 0 ? "light" : "secondary";
    return a;
  };

  getBadgeClasses = () => {
    let a = "badge m-3 p-2 badge-";
    a += this.props.tags.count === 0 ? "warning" : "primary";
    return a;
  };

  countFormat = () => {
    const { count } = this.props.tags;
    return count === 0 ? "zero" : count;
  };
}

export default Hello;
