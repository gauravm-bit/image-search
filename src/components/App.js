import React from "react";
import Search from "./Search";
import axios from "axios";
import ImageList from './ImageList'

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = (term) => {
    console.log(term);
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=Uq9ptKE0KiHhkc82EOAcM4w0scD0KZeiyPYxBXpLEcc",
        {
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
        console.log(error);
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
