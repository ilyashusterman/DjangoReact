/**
 * Created by ilya on 20/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {LineTooltip} from 'react-d3-tooltip';
import axios from 'axios';

class Chart extends React.Component {


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
        if (!this.props.debug) {
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
            const date_time = new Date(value[field_x]);
            value['time'] = date_time;
            value['total'] = value[field_y];
            new_data.push(value);
            }
        }
        return new_data;
    }

    getMaxValue(array){
        let checkArray = [];
        for (const value of array){
            checkArray.push(value['total']);
        }
        let number= Math.max.apply(Math, checkArray);
        if (number === Infinity){
            number = 2000;
        }
        return number;
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
        console.log('check'+this.props.entity);
        const chartSeries = [
                {
                    field: field_y,
                    entity: field_y,
                    name: field_x,
                    style: {
                        "stroke-width": 2,
                        "stroke-opacity": .2,
                        "fill-opacity": .2
                    }
                }
            ];
        let data_array = this.getParsedData(this.state.data, field_x, field_y);
        const max_value = this.getMaxValue(data_array);
        const min_value = this.getMinValue(data_array);
        let relativeWdith = 1000;
        const width = relativeWdith;
        let height= relativeWdith/2;
        const xScale = 'time';
        console.log(max_value, min_value);
        // rendering the chart

         let chartLine = (  <LineTooltip
                    key={data_array.toString()}
                    showXGrid={false}
                    showYGrid={false}
                    title={this.props.title}
                    data={data_array}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    xScale={xScale}
                    yRange={[(max_value/min_value)*(max_value-min_value), 0]}
                    y={this.y}
                    x={this.x}
                />);

        return (
            <div>
                {chartLine}
            </div>
        );
    };

    x(d){
        return d.time;
    }
    y(d) {
        return d;
    }
}
Chart.propTypes = {
    url: PropTypes.string.isRequired,
    field_x: PropTypes.string.isRequired,
    field_y: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    entity_id: PropTypes.number.isRequired,
    debug: PropTypes.bool,
    entity: PropTypes.object
};
export default Chart;