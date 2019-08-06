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
import MaterialTable from 'material-table';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';

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

const muiTableTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      dark: "#1a237e",
      light: "#7986cb",
    },
    secondary: {
      main: "#009688",
      dark: "#004d40",
      light: "#4db6ac",
    }
  },
});

const GithubPullRequestView = ({reviews}) => {
  const classes = useStyles();
  console.log(reviews);
  const status = reviews == null ?
    <Typography variant="body1" gutterBottom>Loading...</Typography> :
    <Typography variant="body1" gutterBottom>
      Updated at {reviews.updated}
    </Typography>;
  const editable_table_header = [
    { title: 'Mergeable', field: 'mergeable',
      render: rowData => (
        rowData.mergeable ? <CheckCircleIcon color="secondary" /> : <AlertIcon color="error" />
      ),
      cellStyle: {
        textAlign: 'center',
      },
    },
    { title: 'PR state', field: 'mergeable_state' },
    { title: '# approvals', field: 'approvals',
      cellStyle: {
        textAlign: 'center',
      },
    },
    { title: 'Age', field: 'age',
      cellStyle: {
        textAlign: 'right',
      },
    },
    { title: 'Link', field: 'url', render: rowData => (
        <Typography>
          <Link href={rowData.url} color="inherit" target="_blank">{rowData.url}</Link>
        </Typography>
      )
    },
    { title: 'Name', field: 'created_by' },
    { title: 'Created', field: 'created_at' },
  ];
  const editable_table = reviews == null ?
  (
    <MaterialTable
      title="Med Admin Dev Review Dashboard"
      isLoading
    />
  ) :
  (
    <MaterialTable
      title="Med Admin Dev Review Dashboard"
      columns={editable_table_header}
      data={reviews.review_details}
      options={{
        pageSize: 10,
        padding: 'dense',
        headerStyle: {
          textAlign: 'center',
          paddingLeft: '1%',
          paddingRight: '1%',
          backgroundColor: '#3f51b5',
          color: '#FFF'
        },
        rowStyle: {
          backgroundColor: rowData => {
            if(rowData.index % 2 === 0) {
              return {backgroundColor: '#9fa8da'};
            }
            
            return {backgroundColor: '#FFF'};
          },
        }
      }}
    />
  );
  return (
    <Container maxWidth="lg">
      {status}
      <Paper className={classes.root}>
        <MuiThemeProvider theme={muiTableTheme}>
          {editable_table}
        </MuiThemeProvider>
      </Paper>
    </Container>
  );
};
GithubPullRequestView.propTypes = {
  reviews: PropTypes.object,
};
export default GithubPullRequestView;
