import services from '../../services/flicker';
import searchBarActionTypes from './searchBarActionTypes';

import groupsPageActions from '../groupsPage/groupsPageActions';

const searchBarActions = {
  getSuggestions: (signal) => (dispatch, getState) => {
    const searchParam = getState().searchBar.searchParam;
    if(searchParam){
      services.searchForSuggestions(searchParam, signal)
        .then(response =>{
          dispatch(searchBarActions.setSuggestions(response));
        });
    }
  },
  triggerSearch: () => (dispatch, getState) =>{
    dispatch(groupsPageActions.startFetching());
    const searchParam = getState().searchBar.searchParam;
    services.searchForGroups(searchParam.toLowerCase())
      .then(response =>{
        if(response.stat === 'ok'){
          dispatch(groupsPageActions.endFetching());
          dispatch(groupsPageActions.setGroups(response.groups))
        }
      });
  },
  setSearchParam: payload => ({type: searchBarActionTypes.SET_SEARCH_PARAM, payload}),
  setSuggestions: payload => ({type: searchBarActionTypes.SET_SUGGESTIONS, payload}),
};
export default searchBarActions;