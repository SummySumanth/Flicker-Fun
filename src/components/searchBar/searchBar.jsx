import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import searchBarActions from '../../actions/searchBar/searchBarActions';
import { searchIcon } from '../../assets/images/common/';
import configs from '../../../configs';

import '../../styles/components/searchBar.scss';

let controller;

class SearchBar extends Component{

  static propTypes = {
    getSuggestions: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      callNetworkFlag : true,
    }
  }

  onChangeHandler = (e) =>{
    // Check if its too soon to call again
    if(this.state.callNetworkFlag){

      // check if controller present and abort the previous call if present
      if(controller){
        controller.abort();
      }

      // Instantiate new controller and pass the signal to fetch call
      controller = new AbortController();
      const signal = controller.signal;
      this.props.getSuggestions(e.target.value, signal);

      // Deny network call
      this.setState({
        callNetworkFlag: false
      });

      // Set flag to allow network call after specified configured seconds
      setTimeout(() =>{
        this.setState({
          callNetworkFlag: true
        });
      }, configs.searchNetworkCallDelay);
    }
  };

  onEnterHandler = () =>{

  };

  getSuggestionitem = suggestion =>{
    console.log('rendering item');
    return (
      <div>
        Item 1
      </div>
    )
  };

  getSuggestionItems = suggestionsList =>{
    let Items = suggestionsList.slice(0,10).map(item => this.getSuggestionitem(item))
    return(
      <div>
        {
          Items
        }
      </div>
    )
  };

  viewSuggestions = suggestionsList =>{
    return (
      <div className={'FF_searchbar-suggestions-wrapper'}>
        <div className={'FF_searchbar-suggestions-container'}>
          {( suggestionsList.length > 0) ? this.getSuggestionItems(suggestionsList) : <div> Loading suggestions ...</div>}
        </div>
      </div>
    )
  };

  render(){
    const { showSuggestions, suggestionsList} = this.props.searchBar;
    return(
      <div className={'FF_searchbar-wrapper'}>

        { showSuggestions ? this.viewSuggestions(suggestionsList) : <div/>}

        <div className={'FF_searchbar-container'}>
          <div className={'FF_searchbar-icon-container'}>
            <img className={'FF_searchbar-icon'} src={searchIcon} />
          </div>

          <input className={'FF_searchbar-input'} type={'text'} onChange={this.onChangeHandler} placeholder={'Search Group !'}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  searchBar : state.searchBar,
});

const mapDispatchToProps = dispatch =>({
  getSuggestions : searchParam => dispatch(searchBarActions.getSuggestions(searchParam)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
