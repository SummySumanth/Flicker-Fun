import services from '../../services/flicker'
import searchBarActionTypes from './searchBarActionTypes'

const searchBarActions = {
  getSuggestions: payload => (dispatch) => {
    if(payload.length > 0){
      dispatch(searchBarActions.showSuggestions());
      services.searchForSuggestions(payload)
        .then(response =>{
          console.log('response', response);
          dispatch(searchBarActions.setSuggestions(response.groups.group));
        });
    }
    dispatch(searchBarActions.hideSuggestions);
  },
  setSuggestions: payload => ({type: searchBarActionTypes.SET_SUGGESTIONS, payload}),
  showSuggestions: () => ({type: searchBarActionTypes.SHOW_SUGGESTIONS}),
  hideSuggestions: () => ({type: searchBarActionTypes.HIDE_SUGGESTIONS})
};
export default searchBarActions;