import React from 'react';

class FilterRadio extends React.Component {
  render() {
    let filterOptions = [{value: 'mostactive', label: 'Most Active'}, {value: 'gainers', label: 'Gainers'}, {value: 'losers', label: 'Losers'}, {value: 'iexvolume', label: 'IExVolume'}, {value: 'iexpercent', label: 'IEXPercent'}];
    const radioList = filterOptions.map(option => {
      let key = filterOptions.indexOf(option).toString();
          if(option.value === this.props.state.listFilter) {
            return <label className="filter-option"><input className="radio" type="radio" key={key} name="filterSearch" defaultChecked onChange={this.props.handleCheck} value={option.value}/>{option.label}</label>
          } else
          return <label className="filter-option"><input className="radio" type="radio" key={key} name="filterSearch" onChange={this.props.handleCheck} value={option.value}/>{option.label}</label>
        })
    return (
      <div className="control filter-wrapper">
      <label className="heading align-left">Popular Stock Lists</label>
      {radioList}
      </div>
    )
  }
};

export default FilterRadio;