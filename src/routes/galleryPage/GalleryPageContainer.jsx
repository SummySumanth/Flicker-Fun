import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import galleryPageActions from '../../actions/galleryPageActions/galleryPageActions';

import GalleryPage from '../../components/galleryPage/galleryPage.jsx';

import '../../styles/groupsPage/groupsPage.scss'

class GalleryPageContainer extends Component{

  componentDidMount(){
    console.log('fetching photos');
    if(this.props.groupsPage.selectedGroupId === ""){
      this.props.history.push(`groups`);
    }
    this.props.fetchPhotos(this.props.groupsPage.selectedGroupId);
  }

  render(){
    return(
      <div className={'FF_gallery_page_container'}>
        I am gallery Page
      </div>
    );
  }
}

const mapStateToProps = state =>({
  galleryPage: state.galleryPage,
  groupsPage: state.groupsPage,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos : groupId => dispatch(galleryPageActions.fetchPhotos(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPageContainer);
