/**
 * Created by ilya on 25/04/2017.
 */
import React from 'react';
import Client from '../Client';

const MATCHING_ITEM_LIMIT = 25;

class EntitiesTable extends React.Component {
  state = {
    entities: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        entities: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      Client.search(value, (entities) => {
        this.setState({
          entities: entities.slice(0, MATCHING_ITEM_LIMIT),
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      entities: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, entities } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const entitiesRows = entities.map((entity, idx) => (
      <tr
        key={idx}
        onClick={() => this.props.onEntityClick(entity)}
      >
        <td>{entity.description}</td>
        <td className='right aligned'>{entity.entity_id}</td>
        <td className='right aligned'>{entity.type_entity}</td>
      </tr>
    ));

    return (
      <div id='entity-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type_entity='text'
                      placeholder='Search entities...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Description</th>
              <th>entity_id</th>
              <th>entity_type</th>
            </tr>
          </thead>
          <tbody>
            {entitiesRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EntitiesTable;