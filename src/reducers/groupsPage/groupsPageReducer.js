import groupsPageActionTypes from '../../actions/groupsPage/groupsPageActionTypes';

const intialState = {
  groups: [],
  selectedGroupId: '',
};

const groupsPageReducer = (state = intialState, action) => {
  switch(action.type){
    case groupsPageActionTypes.SET_GROUPS : return { ...state, groups : action.payload};
    case groupsPageActionTypes.SET_SELECTED_GROUP_ID : return { ...state, selectedGroupId: action.payload};
    default: return state;
  }
};

export default groupsPageReducer;