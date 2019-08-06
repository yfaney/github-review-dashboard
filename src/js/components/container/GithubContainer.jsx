import React from 'react';

import GithubPullRequestView from '../presentational/GithubPullRequestView.jsx'
import ServiceFactory from '../../service-factory';

class GithubContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        reviews: null,
    }
    this.readPullRequestService = this.readPullRequestService.bind(this);
    this.serviceSuccess =  this.serviceSuccess.bind(this);
    this.serviceFailure =  this.serviceFailure.bind(this);
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

  render() {
    return (
      <GithubPullRequestView
        reviews={this.state.reviews}
      />
    );
  }
}

export default GithubContainer;
