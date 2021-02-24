import * as React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './index.scss';

export default class SearchBox extends React.Component {
  render() {
    return (
        <>
            <div className="searchBox">
            <InputBase
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