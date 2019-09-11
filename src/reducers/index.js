import { combineReducers } from 'redux';

import searchBarReducer from './searchBar/searchBarReducer';
import groupsPageReducer from './groupsPage/groupsPageReducer';

const allReducers = combineReducers({
  searchBar : searchBarReducer,
  groupsPage : groupsPageReducer,
});

export default allReducers;