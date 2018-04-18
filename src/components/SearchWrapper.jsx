import React from 'react';
import StockSearch from './StockSearch';
import StockSelect from './StockSelect';
import FilterRadio from './FilterRadio';

class SearchWrapper extends React.Component {

  render() {

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <StockSearch state={this.props.state} handleChange={this.props.handleChange}/>
              <StockSelect state={this.props.state} handleChange={this.props.handleChange}/>
              <FilterRadio state={this.props.state} handleCheck={this.props.handleCheck}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SearchWrapper;