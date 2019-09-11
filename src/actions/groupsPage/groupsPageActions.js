import groupsPageActionTypes from './groupsPageActionTypes';

const groupPageActions = {
  setGroups : payload => ({type: groupsPageActionTypes.SET_GROUPS, payload}),
  setSelectedGroupID : payload => ({type: groupsPageActionTypes.SET_SELECTED_GROUP_ID, payload}),
};

export default groupPageActions;