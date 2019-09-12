import { combineReducers } from 'redux';

import searchBarReducer from './searchBar/searchBarReducer';
import groupsPageReducer from './groupsPage/groupsPageReducer';
import galleryPageReducer from './galleryPage/galleryPageReducer'

const allReducers = combineReducers({
  searchBar : searchBarReducer,
  groupsPage : groupsPageReducer,
  galleryPage : galleryPageReducer,
});

export default allReducers;