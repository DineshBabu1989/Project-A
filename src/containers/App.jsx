import React, { Component } from "react";
import { connect } from "react-redux";
import { all_pages, inc_progress } from "../actions/actions";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  /*Get pages on app load*/

  componentDidMount() {
    this.props.all_pages();
  }

  handleClick = () => {
    this.props.inc_progress();
  };

  render() {
    let pages = this.props.pages;
    let progress = this.props.progress;

    const component = props => {
      if (pages.length === 0) {
        return <div>Loading...</div>;
      } else if (pages.length > 0 && progress <= pages.length) {
        let page = pages.find(page => {
          if (page.id == props.match.params.progress) {
            return page;
          }
        });

        return <div>{page.question}</div>;
      } else if (pages.length > 0 && progress > pages.length) {
        return <div>submit form</div>;
      }
    };
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/page/:progress" component={component} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.allpages,
  progress: state.progress
});

export default connect(
  mapStateToProps,
  {
    all_pages,
    inc_progress
  }
)(App);
