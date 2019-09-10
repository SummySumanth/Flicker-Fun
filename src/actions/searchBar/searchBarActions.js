import services from '../../services/flicker'
import debounce from '../../scripts/debounce';
const searchBarActions = {
  showSuggestions: (payload) => () => {
    console.log('searching for suggestions with param: ', payload);

    services.searchForGroups(payload)
      .then(response =>{
        console.log('Response received is: ', response);
      });
  }
};

export default searchBarActions;