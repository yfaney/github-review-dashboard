import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AlertIcon from '@material-ui/icons/NotInterested';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      minWidth: 1200,
      marginTop: theme.spacing(1),
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      minWidth: 1200,
    },
  }));
  

const GithubPullRequestView = ({reviews}) => {
  const classes = useStyles();
  console.log(reviews);
  const status = reviews == null ?
    <Typography variant="body1" gutterBottom>Loading...</Typography> :
    <Typography variant="body1" gutterBottom>
      Updated at {reviews.updated}
    </Typography>;
  const pr_table = reviews == null ? null :
    (<Table className={classes.table} size="small">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell align="center">Status</StyledTableCell>
          <StyledTableCell align="center">Can merge</StyledTableCell>
          <StyledTableCell align="center">Mergeable state</StyledTableCell>
          <StyledTableCell align="center"># comments</StyledTableCell>
          <StyledTableCell align="center">Age</StyledTableCell>
          <StyledTableCell align="center">Link</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Created</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {reviews.review_details.map(row => (
          <StyledTableRow key={row.id} >
            <StyledTableCell component="th" scope="row">
                {row.state}
            </StyledTableCell>
            <StyledTableCell align="center">
              {row.mergeable ? <CheckCircleIcon color="inherit" /> : <AlertIcon color="error" />}
            </StyledTableCell>
            <StyledTableCell align="center">{row.mergeable_state}</StyledTableCell>
            <StyledTableCell align="right">{row.comments}</StyledTableCell>
            <StyledTableCell align="right">{row.age}</StyledTableCell>
            <StyledTableCell align="left">
              <Typography>
                <Link href={row.url} color="inherit">{row.url}</Link>
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">{row.created_by}</StyledTableCell>
            <StyledTableCell align="center">{row.created_at}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>);
  return (
    <Container maxWidth="lg">
      {status}
      <Paper className={classes.root}>
        {pr_table}
      </Paper>
    </Container>
  );
};
GithubPullRequestView.propTypes = {
  reviews: PropTypes.object,
};
export default GithubPullRequestView;
