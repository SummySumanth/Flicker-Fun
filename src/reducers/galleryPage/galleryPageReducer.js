import galleryPageActionTypes from '../../actions/galleryPageActions/galleryPageActionTypes';

const intialState = {
  photos : [],
  currentPage : 1,
  isFetching : true,
};

const galleryPageReducer = (state = intialState, action) => {
  switch(action.type){
    case galleryPageActionTypes.SET_PHOTOS : return { ...state, photos : action.payload};
    case galleryPageActionTypes.ADD_PHOTOS : return { ...state, photos : [ ...state.photos, action.payload] };
    case galleryPageActionTypes.SET_CURRENT_PAGE: return { ...state, currentPage: action.payload};
    case galleryPageActionTypes.START_FETCHING: return { ...state, isFetching: true};
    case galleryPageActionTypes.END_FETCHING: return { ...state, isFetching: false};
    default: return state;
  }
};

export default galleryPageReducer;