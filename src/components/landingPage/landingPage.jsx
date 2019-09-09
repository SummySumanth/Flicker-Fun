import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../../styles/landingPage/landingPage.scss';

class LandingPage extends Component{


  static propTypes = {
    onNavChange: PropTypes.func.isRequired,
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

export default withRouter(LandingPage);
