import React from 'react';

class StockSelect extends React.Component {

  render() {
    let symbols = this.props.state.symbolArray;
    let key = 0;
    let optionItems = symbols.map((symbol) => <option key={key++}>{symbol}</option>);

    return (
      <div>
        <div className="field">
          <label className="heading align-left">Popular Stock Lists</label>
          <div className="control centered">
            <div className="select">
              <select onChange={this.props.handleChange}>
                <option>Select Stock Symbol</option>
                {optionItems}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StockSelect;