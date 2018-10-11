import React, { Component } from "react";
import { connect } from "react-redux";
import { all_pages, initial_render } from "../actions/actions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./Page";

class App extends Component {
  /*Get pages on app load*/

  componentDidMount() {
    this.props.all_pages();
    this.props.initial_render();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/page/:progress" component={Page} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => ({
  pages: state.allpages
});
export default connect(
  mapStateToProps,
  {
    all_pages,
    initial_render
  }
)(App);
