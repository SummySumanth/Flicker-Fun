import { combineReducers } from 'redux';

import searchBarReducer from './searchBar/searchBarReducer';

const allReducers = combineReducers({
  searchBar : searchBarReducer,
});

export default allReducers;