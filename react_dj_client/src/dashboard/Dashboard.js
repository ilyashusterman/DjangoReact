/**
 * Created by ilya on 25/04/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class Dashboard extends React.Component {



    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="Saga MOI" />
                </MuiThemeProvider>
            </div>
        );
    }


}
export default Dashboard;