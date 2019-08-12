import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AlertIcon from '@material-ui/icons/NotInterested';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import PullRequestTableView from './PullRequestTableView.jsx';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      minWidth: 1200,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      minWidth: 1200,
    },
  }));

const GithubPullRequestView = (props) => {
  const { reviews, showHiddenReviews } = props;

  const classes = useStyles();

  const status = reviews == null ?
    <Typography variant="body1" gutterBottom>Loading...</Typography> :
    <Typography variant="body1" gutterBottom>
      Updated at {reviews.updated}
    </Typography>;

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

  const pr_table = (
    <PullRequestTableView reviews={ filtered_reviews } />
  );

  return (
    <Container maxWidth="lg">
      { status }
      <Paper className={ classes.root }>
        { pr_table }
      </Paper>
      <Paper className={ classes.root }>
      <Typography variant="h4" gutterBottom>Status flow</Typography>
      <Typography variant="h6" gutterBottom><AlertIcon color="error" /> Needs Approvals &#x2192; Build Failed &#x2192; Ready to Merge <CheckCircleIcon color="secondary" /></Typography>
      </Paper>
    </Container>
  );
};

GithubPullRequestView.propTypes = {
  reviews: PropTypes.object,
  showHiddenReviews: PropTypes.bool,
};
export default GithubPullRequestView;
