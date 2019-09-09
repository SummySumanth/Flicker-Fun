import configs from '../configs';


const flickr = {
  fetchAllGroups : () =>{
    console.log('api key is :', configs.flickerApiKey);
    return 'fetchAllGroups';
  },
  fetchGroupDetails : (...args) =>{
    return 'fetchGroupDetails';
  },
  searchForGroup : (param) =>{
    return 'searchForGroup';
  }
};

export default flickr;