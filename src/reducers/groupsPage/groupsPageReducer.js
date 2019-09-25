import groupsPageActionTypes from '../../actions/groupsPage/groupsPageActionTypes';

const initialState = {
  groups: [],
  selectedGroupId: '',
  isFetching: false,
  showModal: false,
};

const groupsPageReducer = (state = initialState, action) => {
  switch(action.type){
    case groupsPageActionTypes.SET_GROUPS : return { ...state, groups : action.payload};
    case groupsPageActionTypes.SET_SELECTED_GROUP_ID : return { ...state, selectedGroupId: action.payload};
    case groupsPageActionTypes.START_FETCHING : return {...state, isFetching: true};
    case groupsPageActionTypes.END_FETCHING : return {...state, isFetching: false};
    case groupsPageActionTypes.SHOW_MODAL : return {...state, showModal: true};
    case groupsPageActionTypes.HIDE_MODAL : return {...state, showModal: false};
    case groupsPageActionTypes.RESET_GROUPS_PAGE : return {...initialState};
    default: return state;
  }
};

export default groupsPageReducer;