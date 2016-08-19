const Combobox = require('./combobox');
const SearchStore = require('../stores/search_store');

const SentenceSorting = React.createClass({
  getInitialState() {
    return { filter: this.props.filterOption, sort: this.props.sortOption };
  },

  componentWillReceiveProps(newProps) {
    this.setState( { filter: newProps.filterOption, sort: newProps.sortOption } );
  },

  updateFilter(filterOption) {
    this.props.updateFilter(filterOption);
  },

  updateSort(sortOption) {
    this.props.updateSort(sortOption);
  },

  render() {
    return(
      <div className="sentence-sorting">
        <span className="before">
          { this.state.filter === "Most Viral" ? "The" : "Posts categorized as" }
        </span>

        <Combobox className="combobox filter" update={ this.updateFilter } selected={ this.state.filter } options={ ["Most Viral", "Funny", "Dogs"] } />

        <span className="between">
          { this.state.filter === "Most Viral" ? "images on the internet, sorted by" : " sorted by" }
        </span>

        <Combobox className="combobox sort" update={ this.updateSort } selected={ this.state.sort } options={ ["Popularity", "Most Recent", "Highest Scoring"] } />
      </div>
    )
  }
})

module.exports = SentenceSorting;
