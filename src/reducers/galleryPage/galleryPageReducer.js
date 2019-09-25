import galleryPageActionTypes from '../../actions/galleryPageActions/galleryPageActionTypes';

const initialState = {
  photos : [],
  currentPage : 1,
  totalPageCount : 0,
  isFetching : true,
  isCallInPlace : false,
};

const galleryPageReducer = (state = initialState, action) => {
  switch(action.type){
    case galleryPageActionTypes.SET_PHOTOS : return { ...state, photos : action.payload};
    case galleryPageActionTypes.ADD_PHOTOS : return { ...state, photos : [ ...state.photos, ...action.payload] };
    case galleryPageActionTypes.SET_CURRENT_PAGE: return { ...state, currentPage: action.payload};
    case galleryPageActionTypes.SET_TOTAL_PAGE_COUNT: return {...state, totalPageCount: action.payload};
    case galleryPageActionTypes.START_FETCHING: return { ...state, isFetching: true};
    case galleryPageActionTypes.END_FETCHING: return { ...state, isFetching: false};
    case galleryPageActionTypes.SET_CALL_IN_PLACE : return { ...state, isCallInPlace: true};
    case galleryPageActionTypes.REMOVE_CALL_IN_PLACE : return { ...state, isCallInPlace: false};
    case galleryPageActionTypes.RESET_GALLERYPAGE : return { ...initialState};
    default: return state;
  }
};

export default galleryPageReducer;