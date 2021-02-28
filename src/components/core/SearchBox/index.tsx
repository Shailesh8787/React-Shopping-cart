import * as React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../../redux/store';
import { AppActions } from '../../../redux/actions/AppActions';

import {setFilters, getFilters} from '../../../redux/actions/FilterActions';

import './index.scss';

interface Props {
  products: any
}

interface State {
  search: String
}

interface LinkStateProps {
  filters: any;
}

interface LinkDispatchProps {
  setFilters: (filters) => void;
  getFilters: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  filters: state.FiltersReducer.filters
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  setFilters: bindActionCreators(setFilters, dispatch),
  getFilters: bindActionCreators(getFilters, dispatch),
});


export class SearchBox extends React.Component<LinkProps, State> {
  constructor(props) {
    super(props)
  };
  state = {
    search: this.props.filters.query
  }
  componentDidMount() {
    this.props.getFilters();
  }

  /**
   * Handle on chnage event
   * @param {Object} event
   */
  changeSearch = (event) => {
    const {selectedCategory} = this.props.filters;
    const filters = {
      selectedCategory: selectedCategory,
      query: event.target.value
    }
    this.props.setFilters(filters);
  }

  render() {
    const {query} = this.props.filters;
    return (
        <>
            <div className="searchBox">
            <InputBase
              onChange={this.changeSearch}
              value={this.state.search}
              placeholder="Search…"
              className="searchInput"
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className="searchBoxIcon">
              <SearchIcon />
            </div>
          </div>
        </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);