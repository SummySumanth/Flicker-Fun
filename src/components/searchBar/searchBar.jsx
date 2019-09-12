import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import searchBarActions from '../../actions/searchBar/searchBarActions';
import { searchIcon } from '../../assets/images/common/';
import configs from '../../../configs';
import suggestionStringGenerator from '../../scripts/suggestionStringGenerator';

import '../../styles/components/searchBar.scss';

let controller;

class SearchBar extends Component{

  static propTypes = {
    getSuggestions: PropTypes.func.isRequired,
    setSearchParam: PropTypes.func.isRequired,
    triggerSearch: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      callNetworkFlag : true,
      isFocused: false,
    }
  }

  onChangeHandler = (e) =>{
    this.props.setSearchParam(e.target.value);

    // Check if its too soon to call again
    if(this.state.callNetworkFlag){

      // check if controller present and abort the previous call if present
      if(controller){
        controller.abort();
      }

      // Instantiate new controller and pass the signal to fetch call
      controller = new AbortController();
      const signal = controller.signal;
      this.props.getSuggestions(signal);

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

  onEnterHandler = (e) => {
    if (e.key === 'Enter') {
      this.props.triggerSearch();
      this.setState({
        isFocused: false,
      });
      this.props.history.push(`groups`);
      this.refs.input.blur();
    }
  };

  onFocusHandler = () =>{
    this.setState({
      isFocused: true,
    });
  };

  onBlurHandler = () =>{
    setTimeout(()=>{
      this.setState({
        isFocused: false,
      });
    }, 100);
  };

  onSuggestionClickHanlder = searchParam =>{
    console.log('search param received is ', searchParam);
    this.props.setSearchParam(searchParam);
    this.props.triggerSearch();
    this.props.history.push(`groups`);
  };

  getSuggestionItems = (suggestionsList, searchParam) =>{
    return suggestionsList.slice(0,10).map((item, index) => {
      return(
        <div key={index} className={'FF_searchbar-suggestion-item'} onClick={() => this.onSuggestionClickHanlder(item.word)}>
          <p dangerouslySetInnerHTML={{__html : suggestionStringGenerator.getHighlightText(item.word, searchParam)}}></p>
        </div>
      );
    });
  };

  viewSuggestions = (suggestionsList, searchParam) =>{
    if(suggestionsList){
      return (
        <div className={'FF_searchbar-suggestions-wrapper'}>
          <div className={'FF_searchbar-suggestions-container'}>
            {this.getSuggestionItems(suggestionsList, searchParam)}
          </div>
        </div>
      );
    }
    return(
      <div />
    );
  };

  componentDidMount () {
    this.onSuggestionClickHanlder('hello');
  };

  render(){
    const {suggestionsList, searchParam} = this.props.searchBar;
    return(
      <div className={'FF_searchbar-wrapper'}>

        { (searchParam && this.state.isFocused ) ? this.viewSuggestions(suggestionsList, searchParam) : <div/>}

        <div className={'FF_searchbar-container'}>
          <div className={'FF_searchbar-icon-container'}>
            <img className={'FF_searchbar-icon'} src={searchIcon} />
          </div>

          <input
            className={'FF_searchbar-input'}
            type={'text'}
            value={searchParam}
            ref="input"
            onChange={this.onChangeHandler}
            onFocus={this.onFocusHandler}
            onBlur={this.onBlurHandler}
            onKeyDown={this.onEnterHandler}
            placeholder={'Search Group !'}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  searchBar : state.searchBar,
});

const mapDispatchToProps = dispatch =>({
  getSuggestions : signal => dispatch(searchBarActions.getSuggestions(signal)),
  setSearchParam : payload => dispatch(searchBarActions.setSearchParam(payload)),
  triggerSearch : () => dispatch(searchBarActions.triggerSearch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
