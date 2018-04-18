import React, {Component} from 'react';
import StockDescription from './components/StockDescription';
import LoadingSpinner from './components/LoadingSpinner';
import SearchWrapper from './components/SearchWrapper';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      symbolArray: [],
      listFilter: 'mostactive', 
      selected: {
        symbol: '',
        description: '',
        price: ''
      },
      loading: true,
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.getStocks = this.getStocks.bind(this);
  }
  componentDidMount() {
    this.getStocks();
  }

  // Fetch market list, defaults to fetching most active list of companies
  getStocks(){
    fetch(`https://api.iextrading.com/1.0/stock/market/list/${this.state.listFilter}`).then(response => {
      if (response.ok) {
        this.setState({error: false})
        return response.json()
      };
    }).then(data => {
      var incomingSymbols = data.map(stock => {
        return stock.symbol;
      });
      this.setState({symbolArray: incomingSymbols, loading: false});
    }).catch(error => {
      this.setState({loading: false, error})
    });
  }

  // Handle input for StockSelect Component
  handleChange(event) {
    if (event.target.value) {
      let selected = event.target.value.toUpperCase();
      this.setState({selected: selected})
      fetch(`https://api.iextrading.com/1.0/stock/${selected}/batch?types=price,company`).then(response => {
        if (response.ok) {
          this.setState({error: false})
          return response.json()
        };
      }).then(details => {
        this.setState({
          selected: {
            symbol: selected,
            description: details.company.description,
            price: details.price
          },
          loading: false
        })
      }).catch(error => {
        this.setState({loading: false, error})
      });
    }
  }
  // Handle radio input and get new options for StockSelect component
  handleCheck(event){
    this.setState({listFilter: event.target.value});
    this.getStocks();
  }

  render() {
    if (this.state.loading) {
      // Loading State
      return (<LoadingSpinner/>)
    }
    return (
      <section className="hero full-vertical">
        <div className="hero-body">
          <SearchWrapper state={this.state} handleChange={this.handleChange} handleCheck={this.handleCheck}/>
          <StockDescription state={this.state}/>
        </div>
      </section>
    );
  }
}

export default App;
