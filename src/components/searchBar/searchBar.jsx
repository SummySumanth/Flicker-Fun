import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import searchBarActions from '../../actions/searchBar/searchBarActions';
import { searchIcon } from '../../assets/images/common/';
import configs from '../../../configs';

import '../../styles/components/searchBar.scss';


class SearchBar extends Component{

  static propTypes = {
    showSuggestions: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      callNetworkFlag : true,
    }
  }

  onChangeHandler = (e) =>{
    if(this.state.callNetworkFlag){
      this.props.showSuggestions(e.target.value);
      this.setState({
        callNetworkFlag: false
      });
    }
    setTimeout(() =>{
      this.setState({
        callNetworkFlag: true
      });
    }, configs.searchNetworkCallDelay);
  };

  onEnterHandler = () =>{

  };

  render(){
    return(
      <div className={'FF_searchbar-wrapper'}>
        <div className={'FF_searchbar-suggestions-wrapper'}>
          <div className={'FF_searchbar-suggestions-container'}>
            <div></div>
          </div>
        </div>

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
  showSuggestions : searchParam => dispatch(searchBarActions.showSuggestions(searchParam)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
