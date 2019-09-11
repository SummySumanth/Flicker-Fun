import groupsPageActionTypes from './groupsPageActionTypes';

const groupPageActions = {
  startFetching: () => ({type: groupsPageActionTypes.START_FETCHING}),
  endFetching: () => ({type: groupsPageActionTypes.END_FETCHING}),
  setGroups : payload => ({type: groupsPageActionTypes.SET_GROUPS, payload}),
  setSelectedGroupID : payload => ({type: groupsPageActionTypes.SET_SELECTED_GROUP_ID, payload}),
};

export default groupPageActions;