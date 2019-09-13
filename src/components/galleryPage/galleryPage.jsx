import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import urlConstructor from '../../scripts/urlConstructor';

import $ from "jquery";

let lazyloadImages = $("img");
let lazyloadThrottleTimeout;


class GalleryPage extends Component{

  getPhotos = (photos) =>{
    return photos.map( item => {
      let photoUrl = urlConstructor.getPhotoUrl(item.farm, item.server, item.id, item.secret, 'b');
      let smallUrl = urlConstructor.getPhotoUrl(item.farm, item.server, item.id, item.secret, 's');

      return(
          <img key={item.id} className={'FF_gallery_image_container lazy'} src={smallUrl} data-src={photoUrl} title={`title : ${item.title} ____ by : ${item.ownername}`} />
      );
    });
  };

  getMorePhotos = () =>{
    this.props.fetchNextPage();
  };

  render(){
    $(window).scroll(() => {
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        this.getMorePhotos();
      }
    });

    const {photos} = this.props;
    return(
      <div className={'FF_groupspage-component'}>
        { this.getPhotos(photos)  }
      </div>
    );
  }
}

export default GalleryPage;
