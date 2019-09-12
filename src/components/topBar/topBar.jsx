import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/topBar.scss';

class TopBar extends Component{

  static propTypes = {

  };

  render(){
    return(
      <div  className={'FF_topBar-wrapper'}>
        <div className={'FF_topBar-container'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TopBar;
