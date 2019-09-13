import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import galleryPageActions from '../../actions/galleryPageActions/galleryPageActions';
import GalleryPage from '../../components/galleryPage/galleryPage.jsx';
import '../../styles/galleryPage/galleryPage.scss';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import $ from 'jquery'

class GalleryPageContainer extends Component{

  constructor(props){
    super(props);

    this.state ={
      callNetworkFlag : true,
    }
  }

  componentDidMount(){
    if(this.props.groupsPage.selectedGroupId === ""){
      this.props.history.push(`groups`);
    }
    this.props.fetchPhotos(this.props.groupsPage.selectedGroupId);

  }

  fetchMoreHandler = () =>{
    const { currentPage, totalPageCount, isCallInPlace} = this.props.galleryPage;
    const { selectedGroupId } = this.props.groupsPage;
    if(currentPage < totalPageCount && !isCallInPlace) {
      this.props.fetchMorePhotos(selectedGroupId, currentPage);


      toast.info(`🚀 Fetching Page #${currentPage + 1}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    }
  };

  render(){
    const { photos, currentPage, isFetching, totalPageCount} = this.props.galleryPage;
    return(
      <div className={'FF_gallery_page_container'}>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        {
          (isFetching)
            ?
            <div>Loading...</div>
            :
            <GalleryPage
              photos={photos}
              currentPage={currentPage}
              totalPageCount={totalPageCount}
              fetchNextPage={this.fetchMoreHandler}
            />
        }

      </div>
    );
  }
}

const mapStateToProps = state =>({
  galleryPage: state.galleryPage,
  groupsPage: state.groupsPage,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos : groupId => dispatch(galleryPageActions.fetchPhotos(groupId)),
  fetchMorePhotos : (groupId, currentPage) => dispatch(galleryPageActions.fetchNextPagePhotos(groupId, currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPageContainer);
