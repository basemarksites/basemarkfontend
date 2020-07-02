import React, { Component } from "react";
import Select from "react-select";

export default class SelectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: null
    };
  }

  handleChange = (...args) => {
    this.props.addSelectedOption(this.props.name, ...args)
  }
  render() {
    return (
      <form>
        <Select
          isMulti
          name={this.props.name}
          onChange={this.handleChange}
          value={this && this.state ? this.state.option : null}
          options={this.props.options}
          ref={input => {
            this.selectField = input;
          }}
        />
      </form>
    );
  }
}
