import React from 'react';

import GithubPullRequestView from '../presentational/GithubPullRequestView.jsx';
import PullRequestOptionsView from '../presentational/PullRequestOptionsView.jsx';
import ServiceFactory from '../../service-factory';

class GithubContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        reviews: null,
        showHiddenReviews: false,
    }
    this.readPullRequestService = this.readPullRequestService.bind(this);
    this.serviceSuccess =  this.serviceSuccess.bind(this);
    this.serviceFailure =  this.serviceFailure.bind(this);
    this.handleShowHiddenReviewsClick = this.handleShowHiddenReviewsClick.bind(this);
  }

  componentDidMount() {
    this.cachedReadPullRequestService = ServiceFactory.readPullRequestService();
    this.readPullRequestService();
  }

  readPullRequestService() {
    console.log("readPullRequestService");
    this.cachedReadPullRequestService().then((response) => {
      if (response.data) {
        console.log(response.data);
        this.serviceSuccess(response.data);
      } else {
        console.log("Failed!");
        this.serviceFailure(response.error);
      }
    });
  }
  serviceSuccess(data) {
    // unpack data into state here
    this.setState({ reviews: data });
  }

  serviceFailure() {
    this.setState({ reviews: null });
  }

  handleShowHiddenReviewsClick(showHiddenPullRequests) {
    this.setState({
      showHiddenReviews: showHiddenPullRequests,
    });
  }

  render() {
    const { reviews, showHiddenReviews } = this.state;

    let filtered_reviews;

    if (reviews && reviews.review_details) {
      if (showHiddenReviews) {
        filtered_reviews = reviews;
      } else {
        filtered_reviews = JSON.parse(JSON.stringify(reviews)); // Deep copy of reviews object
        filtered_reviews.review_details = filtered_reviews.review_details.filter((review_detail) => {
          const hold_label = review_detail.labels.find(label => label === 'hold');
          return hold_label !== 'hold';
        });
      }
    }

    return (
      <React.Fragment>
        <GithubPullRequestView
          reviews={ filtered_reviews }
        />
        <PullRequestOptionsView onShowHiddenPullRequests={ this.handleShowHiddenReviewsClick } />
      </React.Fragment>
    );
  }
}

export default GithubContainer;
