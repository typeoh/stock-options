import React from 'react';

class StockSearch extends React.Component {

  render() {
    if (this.props.state.error) {
      return (
        <div>
          <div className="field">
            <label className="heading align-left">Search for a Stock</label>
            <div className="control centered has-icons-right">
              <input
                onChange={this.props.handleChange}
                className="input is-danger"
                type="text"
                placeholder="Search with a symbol"/>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <p className="help is-danger">Hmm that code doesn't seem to exist</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="field">
            <label className="heading align-left">Search for a Stock</label>
            <div className="control centered">
              <input
                onChange={this.props.handleChange}
                className="input"
                type="text"
                placeholder="Search with a symbol"/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default StockSearch;