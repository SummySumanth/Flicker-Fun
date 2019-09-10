import configs from '../../configs';
import urlContructor from '../scripts/urlConstructor';

const flickr = {
  searchForGroups : (searchParam) =>{     // API Doc -> https://www.flickr.com/services/api/explore/flickr.groups.search
    const url = urlContructor.getsearchForGroup(configs.flickerApiKey, searchParam);
    return fetch(url)
      .then(response =>{
        return response.json()
      });
  },
  browseGroupPhotos : (groupId, perPage, pageNum) =>{     // API Doc -> https://www.flickr.com/services/api/explore/flickr.groups.search
    const url = urlContructor.getBrowseGroupPhotosUrl(configs.flickerApiKey, groupId, perPage, pageNum);
    return fetch(url)
      .then(response =>{
        return response.json()
      });
  },
};

export default flickr;