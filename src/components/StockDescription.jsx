import React from 'react';

class StockDescription extends React.Component {

  render() {
    let company = this.props.state.selected;
    if (company.symbol) {
      return (
        <div className="vertical-center">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Symbol</p>
                <p className="title">{company.symbol}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Current Stock Price</p>
                <p className="title">{company.price} USD</p>
              </div>
            </div>
          </nav>
          <p className="heading centered">Company Description</p>
          <p className="description centered">
            {company.description}
          </p>
        </div>
      )
    }
    return (
      <div className="vertical-center">
      </div>
    )
  }
}
export default StockDescription;