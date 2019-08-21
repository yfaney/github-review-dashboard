import React from 'react';
import PropTypes from 'prop-types';
import AlertIcon from '@material-ui/icons/NotInterested';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

const PullRequestTableView = (props) => {
  const { reviews } = props;

  const editable_table_header = [
    { title: 'OK to merge', field: 'mergeable',
      render: rowData => {
        let icon;
        if (rowData.mergeable_state === 'behind') {
          icon = <WarningIcon color="disabled" />;
        } else if (rowData.mergeable) {
          icon = <CheckCircleIcon color="secondary" />;
        } else {
          icon = <AlertIcon color="error" />;
        }
        return icon;
      },
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
    <MuiThemeProvider theme={muiTableTheme}>
      {editable_table}
    </MuiThemeProvider>
  );
};

PullRequestTableView.propTypes = {
  reviews: PropTypes.object,
};
export default PullRequestTableView;
