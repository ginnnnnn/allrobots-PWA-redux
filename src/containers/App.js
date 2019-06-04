import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import Header from '../components/Header/Header'
import CardList from "../components/cards/CardList";
import SearchBox from "../components/searchBox/SearchBox";
import Scroll from "../components/scroll/Scroll";
import Spinner from "../components/UI/Spinner/Spinner";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.fetchRobotApi.robots,
    isPending: state.fetchRobotApi.isPending,
    err: state.fetchRobotApi.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: e => dispatch(setSearchField(e.target.value)),
    handleRequestRobots: () => dispatch(requestRobots())
  };
}; //dispatch() ,dispatach action to reducer

class App extends Component {
  state = {
    robots: []
  };

  componentDidMount() {
    this.props.handleRequestRobots();
  }

  render() {
    const {
      searchField,
      handleSearchChange,
      robots,
      isPending,
      err
    } = this.props;
    const filteredCards = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    let contantBody = <Spinner />;
    if (!isPending) {
      contantBody = (
        <Scroll>
          <CardList robotsArray={filteredCards} />
        </Scroll>
      );
    }
    if (err) {
      contantBody = <h1>Oops Something went wrong</h1>;
    }

    return (
      <div className="App tc vh-100 ma0">
        <div className="bb b--yellow pa3 bw2">
          <Header />
        </div>
        <SearchBox searchChange={handleSearchChange} />
        {contantBody}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
