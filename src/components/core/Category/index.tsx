import * as React from 'react';
import { FormControlLabel, FormControl, Radio, FormLabel, RadioGroup } from '@material-ui/core';

import {CATEGORIES} from '../../../constants/common';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../../redux/store';
import { AppActions } from '../../../redux/actions/AppActions';

import {setFilters, getFilters} from '../../../redux/actions/FilterActions';


interface Props {
  products: any
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

export class Category extends React.Component <LinkProps> {
  componentDidMount() {
    this.props.getFilters();
  }
  /**
   * Handle on chnage event
   * @param {Object} event
   */
  changeCategory = (event) => {
    const {query} = this.props.filters;
    const filters = {
      query: query,
      selectedCategory: event.target.value
    }
    this.props.setFilters(filters);
  }

  render() {
    const { selectedCategory } = this.props.filters;
    return (
        <>
            <FormControl component="fieldset">
            <FormLabel component="legend" className="filterHeading">Categories</FormLabel>
            <RadioGroup aria-label="category" name="category" value={selectedCategory} onChange={this.changeCategory}>
              {
                CATEGORIES.map((category) => (
                  <FormControlLabel key={category} className={`redioButton ${category == selectedCategory ? 'active' : 'inActive'  }`} value={category} control={<Radio className="hide"/>} label={category} />
                ))
              }
              
            </RadioGroup>
          </FormControl>
        </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);