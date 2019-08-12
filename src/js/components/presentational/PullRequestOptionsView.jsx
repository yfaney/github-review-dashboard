import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const PullRequestOptionsView = (props) => {
  const { onShowHiddenPullRequests } = props;

  const classes = useStyles();
  const [state, setState] = React.useState({
    showHiddenPullRequests: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    onShowHiddenPullRequests(event.target.checked);
  };

  const { showHiddenPullRequests } = state;

  return (
    <Container maxWidth="lg">
      <Paper className={ classes.root }>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Options</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={showHiddenPullRequests} onChange={handleChange('showHiddenPullRequests')} value="showHiddenPullRequests" />}
              label="Show hidden pull requests"
            />
          </FormGroup>
          <FormHelperText>Reviews can be hidden by adding a label 'hold' in the pull request in Github.</FormHelperText>
        </FormControl>
      </Paper>
    </Container>
  );
};


PullRequestOptionsView.propTypes = {
  onShowHiddenPullRequests: PropTypes.func,
};

export default PullRequestOptionsView;