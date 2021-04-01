import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    filtered_results: [],
    sortDirection:"ASC"
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomEmployees()
      .then(res => {
        this.setState({ results: res.data.results, filtered_results: res.data.results})
        console.log(res.data.results)})
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const input = event.target.value.toLowerCase();
    var filtered_results = this.state.results.filter(result => result.name.first.toLowerCase().includes(input) 
    || result.name.last.toLowerCase().includes(input) 
    || result.email.toLowerCase().includes(input) 
    || result.phone.includes(input) 
    || result.dob.date.slice(0,10).includes(input))
    this.setState({ search: input,
    filtered_results: filtered_results });
    if (input == "") {
      this.setState({filtered_results: this.state.results})
    }
  };
  sortHelper(a,b){
    if (this.state.sortDirection=="ASC"){

    if (a.name.first > b.name.first) {
      return 1;
    } else if (a.name.first === b.name.first){
      return 0;
    } else {
      return -1;
    }
  } else if (this.state.sortDirection=="DSC"){
    if (a.name.first > b.name.first) {
      return -1;
    } else if (a.name.first === b.name.first){
      return 0;
    } else {
      return 1;
    }
  } 
}
  sortResults(){
    var nextSortDirection
    var filtered_results_copy = [...this.state.filtered_results];
    filtered_results_copy.sort(this.sortHelper.bind(this))
    if (this.state.sortDirection == "ASC"){
      nextSortDirection = "DSC"
    } else if (this.state.sortDirection == "DSC"){
      nextSortDirection = "ASC"
    } 
    this.setState({filtered_results: filtered_results_copy, sortDirection: nextSortDirection})
  }
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchBar
            handleInputChange={this.handleInputChange}
          />
          <SearchResults 
          sortResults = {this.sortResults.bind(this)}
          results={this.state.filtered_results} />
        </Container>
      </div>
    );
  }
}

export default Search;
