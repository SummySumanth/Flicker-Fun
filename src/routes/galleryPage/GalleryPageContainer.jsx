import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import galleryPageActions from '../../actions/galleryPageActions/galleryPageActions';
import GalleryPage from '../../components/galleryPage/galleryPage.jsx';

import Modal from '../../components/common/modal.jsx';


import '../../styles/galleryPage/galleryPage.scss';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import $ from 'jquery'

class GalleryPageContainer extends Component{

  constructor(props){
    super(props);

    this.state ={
      callNetworkFlag : true,
      showModal : false,
      modalPhoto : {}
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
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    }
  };

  openModal = photoDetails =>{
    this.setState({
      showModal : true,
      modalPhoto : photoDetails
    });
  };

  photoClickHandler = photoDetails =>{
    console.log('photo clicked');
    this.openModal(photoDetails);
  };

  closeModal = () =>{
    this.setState({
      showModal : false,
      modalPhoto : {}
    });
  };

  render(){
    const { photos, currentPage, isFetching, totalPageCount} = this.props.galleryPage;
    return(
      <div className={'FF_gallery_page_container'}>


          <Modal
            showModal={this.state.showModal}
            onCloseHandler={this.closeModal}
          >
            <div className={'FF_modalImageContainer'}>
              <img className={'FF_modalImage'} src={this.state.modalPhoto.photoSrc}/>
              <div className={'FF_modalPhoto_title'}>{this.state.modalPhoto.title}</div>
              <div className={'FF_modalPhoto_owner'}>{this.state.modalPhoto.owner}</div>
            </div>
          </Modal>



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
              photoClickHandler={this.photoClickHandler}
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
