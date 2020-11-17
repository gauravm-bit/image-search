import React from "react";
import { FormLabel, Input, FormHelperText, Box, Button } from "@chakra-ui/core";
import "./Search.css";

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
      <div className="search-input">
        <form onSubmit={this.handleSubmit}>
          <Box m={[2, 3]}>
            <FormLabel> Image Search </FormLabel>
            <Input
              maxW="sm"
              value={this.state.term}
              onChange={this.handleChange}
              type="text"
            />
            <Button
              m={2}
              colorScheme="teal"
              variant="solid"
              onClick={this.handleSubmit}
            >
              Enter
            </Button>
            <FormHelperText>Using Unsplash API</FormHelperText>
          </Box>
        </form>
      </div>
    );
  }
}

export default Search;
