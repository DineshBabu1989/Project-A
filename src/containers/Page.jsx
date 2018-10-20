import React, { Component } from "react";
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
import ProgressBar from "../components/progressBar";
import Summary from "../components/summaryPage";
import Spinner from "../components/spinner";

class Page extends Component {
  componentDidMount() {
    /*browser back button*/
    window.onpopstate = this.handlePopState;
  }

  componentWillUnmount() {
    window.onpopstate = null;
  }

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

  /*browser back button*/
  handlePopState = event => {
    event.preventDefault();
    this.props.dec_progress();
  };

  render() {
    let pages = this.props.pages;
    let progress = this.props.progress;
    let currentPage = this.props.currentPage;
    let page, progressbar;

    /*Decide on page rendering*/
    if (pages.length === 0) {
      page = (
        <div className="spinner-holder">
          <Spinner />
        </div>
      );
    } else if (pages.length > 0 && progress <= pages.length + 1) {
      /*Select current page from pages array*/
      const pagedata = pages.find(page => {
        if (page.id == this.props.match.params.progress) {
          return page;
        }
      });
      //console.log(pagedata);
      /*Finding index to identify the first page*/
      const pageIndex = pages.findIndex(page => {
        return page.id == this.props.match.params.progress;
      });

      /*Selective rendering of a page component based on type*/
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

    /*Render progressbar when data arrives*/
    pages.length > 0
      ? (progressbar = <ProgressBar count={progress} length={pages.length} />)
      : (progressbar = <div />);

    return (
      <div>
        {progressbar}
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
