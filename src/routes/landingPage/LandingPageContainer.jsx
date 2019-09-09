import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LandingPage from '../../components/landingPage/landingPage.jsx';
class LandingPageContainer extends Component{

  navigationHandler = (direction) =>{
    this.props.history.push(`${this.props.location.pathname}/${direction}`);
  };

  componentDidMount(){

  }

  render(){
    return(
      <div className={'BCN-landingPage'}>
        <LandingPage
          onNavChange={this.navigationHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);
