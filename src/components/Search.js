import React from "react";
import { FormLabel, Input, FormHelperText } from "@chakra-ui/core";

class Search extends React.Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
    this.setState({
      term: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormLabel> Image Search </FormLabel>
          <Input
            value={this.state.term}
            onChange={this.handleChange}
            type="text"
          />
          <FormHelperText>Using Unsplash API</FormHelperText>
        </form>
      </div>
    );
  }
}

export default Search;
