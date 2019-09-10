import searchBarActionTypes from "../../actions/searchBar/searchBarActionTypes";

const intialState = {
  searchParam : '',
  showSuggestions: 'false',
  suggestionsList : []
}

const searchBarReducer = (state = intialState, action) => {
  switch(action.type){
    case searchBarActionTypes.SET_SUGGESTIONS : return {...state, suggestionsList: action.payload};
    case searchBarActionTypes.SET_SEARCH_PARAM : return {...state, searchParam: action.payload};
    default: return state;
  };
}

export default searchBarReducer;