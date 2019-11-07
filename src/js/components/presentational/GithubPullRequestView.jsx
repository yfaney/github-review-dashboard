import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AlertIcon from '@material-ui/icons/NotInterested';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import PullRequestTableView from './PullRequestTableView.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: 1000,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    minWidth: 1000,
  },
}));

const GithubPullRequestView = (props) => {
  const { reviews } = props;

  const classes = useStyles();

  const status = reviews == null ?
    <Typography variant="body1" gutterBottom>Loading...</Typography> :
    <Typography variant="body1" gutterBottom>
      Updated at {reviews.updated}
    </Typography>;

  const pr_table = (
    <PullRequestTableView reviews={ reviews } />
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
};
export default GithubPullRequestView;
