/**
 * Created by ilya on 28/04/2017.
 */
/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class TimeLineStep extends React.Component {


    constructor() {
        super();
        this.state = {
            showChart: false,
            data: [],
            errorMessage: '',
            serverResponse: ''
        };
    }

    componentWillMount(){
        // console.log("debug here before fetches");
        if (!this.props.debug && this.props.entity_id) {
            this.getApiData(this.props.url);
            // console.log("debug here after fetches");
        }
    }

    getApiData(data){
        let self = this;
        axios.get(data)
            .then(function (response) {
                let data_response = response.data;
                self.setState({ data: data_response});
            })
            .catch(function (error) {
                console.log('Error', error.message);
                self.setState({errorMessage: error.message});
            });
    }

    getParsedData(data_array, field_x, field_y) {
        let new_data = [];
        for (const value of data_array) {
            if (value['object_id'] === this.props.entity_id) {
            const date_time_val = new Date(value[field_x]);
            value['time'] = date_time_val;
            value['total'] = value[field_y];
            new_data.push(value);
            }
        }
        return new_data;
    }


    getMinValue(array){
        let checkArray = [];
        for (const value of array){
            checkArray.push(value['total']);
        }
        let number =  Math.min.apply(Math, checkArray);
        if (isNaN(number)){
            number = 0;
        }
        return number;
    }

    render(){

        let field_y = this.props.field_y;
        let field_x = this.props.field_x;
        let data_array = this.getParsedData(this.state.data, field_x, field_y);
   const timeLineRows = data_array.map((row, index) => (

              <Step key={index} active={true}>
                <StepLabel>AT :{row.timestamp} Status :{row.status}</StepLabel>
                  <StepContent><p>Value :{row.value}</p></StepContent>
                <StepContent><p>{row.change_message} object_id={row.object_id}</p></StepContent>
              </Step>
    ));

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                 <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                    <Stepper orientation="vertical">
                        {timeLineRows}
                    </Stepper>
                 </div>
              </MuiThemeProvider>
            </div>
        );
    };

}
TimeLineStep.propTypes = {
    url: PropTypes.string.isRequired,
    field_x: PropTypes.string.isRequired,
    field_y: PropTypes.string.isRequired,
    entity_id: PropTypes.number,
    entity: PropTypes.object
};
export default TimeLineStep;