import galleryPageActionTypes from './galleryPageActionTypes';
import flicker from '../../services/flicker';
import configs from '../../../configs';

const galleryPageActions = {
  fetchPhotos: groupID => (dispatch) => {
    dispatch(galleryPageActions.startFetching());
    flicker.browseGroupPhotos(groupID, configs.perPage, 1)
      .then( data =>{
        console.log('Photos received are -> ', data);
        dispatch(galleryPageActions.setTotalPageCound(data.photos.pages));
        dispatch(galleryPageActions.setPhotos(data.photos.photo));
        dispatch(galleryPageActions.endFetching());
      });
  },
  fetchNextPagePhotos: (groupID, currentPage) =>{

  },
  setTotalPageCound: payload => ({type: galleryPageActionTypes.SET_TOTAL_PAGE_COUNT, payload}),
  setCurrentPage: payload => ({type: galleryPageActionTypes.SET_CURRENT_PAGE, payload}),
  setPhotos: payload => ({type: galleryPageActionTypes.SET_PHOTOS, payload}),
  addPhotos: payload => ({type: galleryPageActionTypes.ADD_PHOTOS, payload}),
  startFetching: () =>({type: galleryPageActionTypes.START_FETCHING}),
  endFetching: () =>({type: galleryPageActionTypes.END_FETCHING}),
};

export default galleryPageActions;
