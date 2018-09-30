import React, { Component } from "react";
import { connect } from "react-redux";
import { all_pages } from "../actions/actions";

class App extends Component {
  /*Get pages on app load*/
  componentDidMount() {
    this.props.all_pages();
  }

  render() {
    const dataReceived = this.props.allpages;
    let loading;
    if (dataReceived.length < 0) {
      console.log("loading...");
      loading = <div>Loading...</div>;
    } else {
      loading = <div />;
    }

    return <div>{loading}</div>;
  }
}

const mapStateToProps = state => ({
  allpages: state.allpages
});

export default connect(
  mapStateToProps,
  {
    all_pages
  }
)(App);
