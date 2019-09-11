import groupsPageActionTypes from '../../actions/groupsPage/groupsPageActionTypes';

const intialState = {
  groups: [],
  selectedGroupId: '',
  isFetching: false,
};

const groupsPageReducer = (state = intialState, action) => {
  switch(action.type){
    case groupsPageActionTypes.SET_GROUPS : return { ...state, groups : action.payload};
    case groupsPageActionTypes.SET_SELECTED_GROUP_ID : return { ...state, selectedGroupId: action.payload};
    case groupsPageActionTypes.START_FETCHING : return {...state, isFetching: true};
    case groupsPageActionTypes.END_FETCHING : return {...state, isFetching: false};
    default: return state;
  }
};

export default groupsPageReducer;