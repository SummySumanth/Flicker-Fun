import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../../styles/landingPage/landingPage.scss';

class GroupsPage extends Component{

  static propTypes = {

  }

  onClickHandler (direction) {
    this.props.onNavChange(direction);
  }

  render(){
    return(
      <div className={'BCN-container'}>

      </div>
    );
  }
}

export default withRouter(GroupsPage);
