import configs from '../../configs';
import urlContructor from '../scripts/urlConstructor';

const flickr = {
  searchForSuggestions : (searchParam, signal) =>{     // API Doc -> https://www.flickr.com/services/api/explore/flickr.groups.search
    const url = urlContructor.getSearchForSuggestions(searchParam, configs.maxSuggestion);
    return fetch(url, {signal: signal})
      .then(response =>{
        return response.json()
      }).catch(e =>{
          console.log('aborted network call ', e.message);
      });
  },
  searchForGroups : (searchParam, signal) =>{     // API Doc -> https://www.flickr.com/services/api/explore/flickr.groups.search
    const url = urlContructor.getsearchForGroup(configs.flickerApiKey, searchParam);
    return fetch(url, {signal: signal})
      .then(response =>{
        return response.json()
      }).catch(e =>{
        console.log('aborted network call ', e);
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