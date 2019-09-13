import galleryPageActionTypes from './galleryPageActionTypes';
import flicker from '../../services/flicker';
import configs from '../../../configs';

const galleryPageActions = {
  fetchPhotos: groupID => (dispatch) => {
    dispatch(galleryPageActions.startFetching());
    flicker.browseGroupPhotos(groupID, configs.perPage, 1)
      .then( data =>{
        dispatch(galleryPageActions.setTotalPageCount(data.photos.pages));
        dispatch(galleryPageActions.setPhotos(data.photos.photo));
        dispatch(galleryPageActions.endFetching());
      });
  },
  fetchNextPagePhotos: (groupID, currentPage) => (dispatch) => {
    const nextPage = currentPage + 1;
    dispatch(galleryPageActions.setCallInPlace());
    flicker.browseGroupPhotos(groupID, configs.perPage, nextPage)
      .then( data =>{
        dispatch(galleryPageActions.addPhotos(data.photos.photo))
        dispatch(galleryPageActions.setCurrentPage(nextPage))
        dispatch(galleryPageActions.removeCallInPlace());
      });
  },
  setTotalPageCount: payload => ({type: galleryPageActionTypes.SET_TOTAL_PAGE_COUNT, payload}),
  setCurrentPage: payload => ({type: galleryPageActionTypes.SET_CURRENT_PAGE, payload}),
  setPhotos: payload => ({type: galleryPageActionTypes.SET_PHOTOS, payload}),
  addPhotos: payload => ({type: galleryPageActionTypes.ADD_PHOTOS, payload}),
  startFetching: () =>({type: galleryPageActionTypes.START_FETCHING}),
  endFetching: () =>({type: galleryPageActionTypes.END_FETCHING}),
  setCallInPlace: () =>({type: galleryPageActionTypes.SET_CALL_IN_PLACE}),
  removeCallInPlace: () => ({type: galleryPageActionTypes.REMOVE_CALL_IN_PLACE})
};

export default galleryPageActions;
