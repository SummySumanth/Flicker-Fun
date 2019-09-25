import groupsPageActionTypes from './groupsPageActionTypes';

const groupPageActions = {
  startFetching: () => ({type: groupsPageActionTypes.START_FETCHING}),
  endFetching: () => ({type: groupsPageActionTypes.END_FETCHING}),
  setGroups : payload => ({type: groupsPageActionTypes.SET_GROUPS, payload}),
  setSelectedGroupID : payload => ({type: groupsPageActionTypes.SET_SELECTED_GROUP_ID, payload}),
  showModal : () => ({type: groupsPageActionTypes.SHOW_MODAL}),
  hideModal : () => ({type: groupsPageActionTypes.HIDE_MODAL}),
  resetGroupsPage : () => ({type: groupsPageActionTypes.RESET_GROUPS_PAGE})
};

export default groupPageActions;