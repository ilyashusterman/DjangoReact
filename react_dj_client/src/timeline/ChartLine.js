/**
 * Created by ilya on 26/04/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js'
import axios from 'axios';

class ChartLine extends React.Component {


    constructor() {
        super();
        this.state = {
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
        else{
            this.setState({ data: this.props.url});
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
        for (const currency of data_array){
            const date_time = new Date(currency[field_x]*1000);
            currency['time'] = date_time;
            currency['total'] = currency[field_y];
            new_data.push(currency);
        }
        return data_array;
    }

    getMaxValue(array){
        let checkArray = [];
        for (const currency of array){
            checkArray.push(currency['total']);
        }
        let number= Math.max.apply(Math, checkArray);
        if (number === Infinity){
            number = 2000;
        }
        return number;
        }

    getMinValue(array){
        let checkArray = [];
        for (const currency of array){
            checkArray.push(currency['total']);
        }
        let number =  Math.min.apply(Math, checkArray);
        if (isNaN(number)){
            number = 0;
        }
        return number;
    }

    render(){

        let field_y = this.props.field_y;
        const chartSeries = [
                {
                        field: field_y,
                    name: field_y,
                    color: '#ff7f0e',
                    style: {
                        "stroke-width": 2,
                        "stroke-opacity": .2,
                        "fill-opacity": .2
                    }
                }
            ];
        let data_array = this.getParsedData(this.state.data, this.props.field_x, field_y);
        const max_value = this.getMaxValue(data_array);
        const min_value = this.getMinValue(data_array);
        let width = 1000;
        let height= 500;
        const xScale = 'time';
        console.log(max_value, min_value);
        // rendering the chart
        return (
            <div>
                <LineTooltip
                    key={data_array.toString()}
                    showXGrid={false}
                    showYGrid={false}
                    title={this.props.title}
                    data={data_array}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    xScale={xScale}
                    yRange={[max_value*10*(max_value-min_value), 0]}
                    y={this.y}
                    x={this.x}
                />
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
ChartLine.propTypes = {
    url: PropTypes.string.isRequired,
    field_x: PropTypes.string.isRequired,
    field_y: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
export default ChartLine;
