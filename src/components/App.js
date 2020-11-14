import React from "react";
import Search from "./Search";
import axios from "axios";
import ImageList from "./ImageList";
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = (term) => {
    axios
      .get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}`, {
        params: {
          query: term,
        },
      })
      .then((response) => {
        this.setState({
          images: response.data.results,
        });
      })
      .catch((error) => {
        alert(console.log(error));
      });
  };

  render() {
    return (
      <div>
        <Search onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
