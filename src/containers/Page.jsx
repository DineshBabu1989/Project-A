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
import Summary from "../components/summaryPage";

class Page extends Component {
  handleChange = data => {
    this.props.current_page(data);
  };

  handleBack = () => {
    this.props.dec_progress();
    this.props.history.goBack();
  };

  handleNext = url => {
    const resetData = {
      id: "",
      question: "",
      answer: "",
      disabled: true
    };
    this.props.inc_progress();
    this.props.update_pages(this.props.currentPage);
    this.props.current_page(resetData);
    this.props.history.push(`/page/${url}`);
  };

  handleSubmit = () => {
    console.log(this.props.pages);
  };

  render() {
    let pages = this.props.pages;
    let progress = this.props.progress;
    let currentPage = this.props.currentPage;
    let page;

    /*Decide on page rendering*/
    if (pages.length === 0) {
      page = <div>Loading...</div>;
    } else if (pages.length > 0 && progress <= pages.length + 1) {
      /*Select current page from pages array*/
      const pagedata = pages.find(page => {
        if (page.id == this.props.match.params.progress) {
          return page;
        }
      });
      console.log(pagedata);
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
            term={currentPage.answer}
          />
        );
      } else if (pagedata.type === "selectOption") {
        page = (
          <SelectionField
            handleChange={this.handleChange}
            data={pagedata}
            length={pages.length}
            pageIndex={pageIndex}
            disabled={currentPage.disabled}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            term={currentPage.answer}
          />
        );
      } else if (pagedata.type === "radioButton") {
        page = (
          <RadioField
            handleChange={this.handleChange}
            data={pagedata}
            length={pages.length}
            pageIndex={pageIndex}
            disabled={currentPage.disabled}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            term={currentPage.answer}
          />
        );
      } else if (pagedata.type === "submitPage") {
        page = (
          <Summary
            data={pages}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            handleSubmit={this.handleSubmit}
          />
        );
      }
    }
    return (
      <div>
        <ProgressBar count={progress} length={pages.length} />
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
