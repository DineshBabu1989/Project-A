import React, { Component } from "react";
import { connect } from "react-redux";
import { all_pages, inc_progress } from "../actions/actions";

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
    let component;

    if (pages.length === 0) {
      component = <div>Loading...</div>;
    } else if (pages.length > 0 && progress < pages.length) {
      component = <div>component</div>;
    } else if (pages.length > 0 && progress === pages.length) {
      component = <div>submit form</div>;
    }

    return (
      <div>
        {this.props.pages.length}
        {this.props.progress}
        {component}
        <button onClick={this.handleClick}>click</button>
      </div>
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
