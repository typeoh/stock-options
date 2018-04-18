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
              <div className="container form-wrapper">
                <StockSearch state={this.props.state} handleChange={this.props.handleChange}/>
              </div>
              <div className="container form-wrappers">
                <FilterRadio state={this.props.state} handleCheck={this.props.handleCheck}/>
                <StockSelect state={this.props.state} handleChange={this.props.handleChange}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SearchWrapper;