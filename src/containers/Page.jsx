import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import {
  inc_progress,
  dec_progress,
  current_page,
  update_pages
} from "../actions/actions";

/* importing components*/
import TextField from "../components/textField";
import SelectionField from "../components/selectionField";
import RadioField from "../components/radioField";
import ProgressBar from "../components/progress";

class Page extends Component {
  handleChange = data => {
    this.props.current_page(data);
  };

  handleBack = () => {
    this.props.dec_progress();
    this.props.history.goBack();
  };

  handleNext = url => {
    this.props.inc_progress();
    console.log(url);
    this.props.history.push(`/page/${url}`);
  };

  handleUpdate = () => {};

  render() {
    let pages = this.props.pages;
    let progress = this.props.progress;
    let currentPage = this.props.currentPage;
    let page;

    /*Decide on page rendering*/
    if (pages.length === 0) {
      page = <div>Loading...</div>;
    } else if (pages.length > 0 && progress <= pages.length) {
      /*Select current page from pages array*/
      const pagedata = pages.find(page => {
        if (page.id == this.props.match.params.progress) {
          return page;
        }
      });

      /*Finding index to identify the first page*/
      const pageIndex = pages.findIndex(page => {
        return page.id == this.props.match.params.progress;
      });

      /*Selective rendering of a page component*/
      if (pagedata.type === "textField") {
        page = (
          <TextField
            handleChange={this.handleChange}
            data={pagedata}
            length={pages.length}
            pageIndex={pageIndex}
            disabled={currentPage.disabled}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
          />
        );
      } else if (pagedata.type === "selectOption") {
        page = (
          <TextField
            handleChange={this.handleChange}
            data={pagedata}
            length={pages.length}
            pageIndex={pageIndex}
            disabled={currentPage.disabled}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
          />
        );
      } else if (pagedata.type === "radioButton") {
        page = (
          <TextField
            handleChange={this.handleChange}
            data={pagedata}
            length={pages.length}
            pageIndex={pageIndex}
            disabled={currentPage.disabled}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
          />
        );
      }
    } else if (pages.length > progress) {
      return <div>Submit Form</div>;
    }
    return (
      <div>
        <ProgressBar count={progress} />
        {page}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  pages: state.allpages,
  progress: state.progress,
  currentPage: state.currentPage
});
export default connect(
  mapStateToProps,
  {
    inc_progress,
    dec_progress,
    current_page,
    update_pages
  }
)(Page);
