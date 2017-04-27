/**
 * Created by ilya on 25/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';
import Chart from '../timeline/Chart';
import EntityActions from '../handler/EntityActions';
const styles = {
  propContainer: {
    width: 1000,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
};
class EntitiesTable extends React.Component {

   constructor() {
    super();
    this.state = {
       openActions: false,
       open: false,
       showChart: false,
       entity: {},
       entity_id: 0,
       entities: [],
       selectedRows: [],
       showRemoveIcon: false,
       searchValue: '',
       errorMessage: '',
       fixedHeader: true,
       fixedFooter: true,
       stripedRows: false,
       showRowHover: false,
       selectable: true,
       multiSelectable: false,
       enableSelectAll: false,
       deselectOnClickaway: true,
       showCheckboxes: true,
       height: '400px',
       width:'40px',
    };
   }

   getApiData(data){
        let self = this;
        axios.get(data)
            .then(function (response) {
                let data_response = response.data;
                self.setState({ entities: data_response});
            })
            .catch(function (error) {
                console.log('Error', error.message);
                self.setState({errorMessage: error.message});
            });
   }
    componentWillMount() {
     if (!this.props.debug) {
            this.getApiData(this.props.url);
        }
        else{
            this.setState({ data: this.props.url});
        }
     }
    handleTouchTap = () => {
    this.setState({
      open: true,
      openActions: true,
      anchorEl: event.currentTarget,
    });
    };

    handleRequestClose = () => {
    this.setState({
      open: false,
    });
    };

    setCurrentChart(){
    let chart = null;
    if (this.state.showChart){
        chart = <Chart
                    url='/log_entries.json'
                    field_x='timestamp' field_y='value'
                    title='TimeLine' debug={false}
                    entity_id={this.state.entity.id}
                    entity={this.state.entity}
        />
    }
    return chart;
    }
    selectCurrentChart(rows){
        let entitiesArray = this.state.entities
          for (const row of rows){
           let entity = entitiesArray[row]
           this.setState({showChart: true, entity: entity, entity_id: entity.id });
        }
       this.handleTouchTap()
    }
  render() {
    const { entities } = this.state;
    const entitiesRows = entities.map((row, index) => (

              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.type}</TableRowColumn>
                <TableRowColumn>{row.object_id}</TableRowColumn>
              </TableRow>
    ));
    let entityChart = this.setCurrentChart();
    return (
        <div>
        <div className='col-md-8'>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Table
          style={styles.propContainer}
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this.selectCurrentChart.bind(this)}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip='id'>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip='type'>Type</TableHeaderColumn>
              <TableHeaderColumn tooltip='object_id'>Entity ID</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {entitiesRows}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
          </TableFooter>
        </Table>
     </MuiThemeProvider>
        </div>
            <div className="col-md-8">
            {entityChart}
                </div>
             <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Snackbar
          open={this.state.open}
          message={'Entity chosen id='.concat(this.state.entity_id)}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
                     </MuiThemeProvider>
            <EntityActions
                open={this.state.openActions}
                entity_id={this.state.entity.id}
                entity={this.state.entity}/>
            </div>
    );
  }
}
EntitiesTable.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
export default EntitiesTable;