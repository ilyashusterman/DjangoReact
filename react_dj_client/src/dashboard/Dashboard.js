/**
 * Created by ilya on 25/04/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {orange500, blue500} from 'material-ui/styles/colors';
// const styles = {
//     errorStyle: {
//         color: orange500,
//     },
//     underlineStyle: {
//         borderColor: orange500,
//     },
//     floatingLabelStyle: {
//         color: orange500,
//     },
//     floatingLabelFocusStyle: {
//         color: blue500,
//     },
// };
class Dashboard extends React.Component {



    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="Saga MOI" />
                </MuiThemeProvider>
                {/*<MuiThemeProvider>*/}
                    {/*<TextField*/}
                        {/*floatingLabelText="Styled Floating Label Text"*/}
                        {/*floatingLabelStyle={styles.floatingLabelStyle}*/}
                        {/*floatingLabelFocusStyle={styles.floatingLabelFocusStyle}*/}
                    {/*/>*/}
                {/*</MuiThemeProvider>*/}
            </div>
        );
    }


}
export default Dashboard;