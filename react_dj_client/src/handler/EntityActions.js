/**
 * Created by ilya on 27/04/17.
 */
/**
 * Created by ilya on 25/04/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
// import axios from 'axios';

class EntityActions extends React.Component {



    render() {
        let entityActions = null;
        if (this.props.open){
            entityActions=(
                <div>
                 <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                     <Paper zDepth={1}>
                         <div>
                              <TextField
                               hintText="insert new margin"
                               floatingLabelText="new_margin"
                               />
                               <FlatButton label="Update" primary={true} />
                         </div>
                     </Paper>
                 </MuiThemeProvider>
                </div>
            )
        }
        return (
            <div>
                {entityActions}
            </div>
        );
    }


}

EntityActions.propTypes = {
    entity_id: PropTypes.number,
    entity: PropTypes.object
};
export default EntityActions;