import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupsPage from '../../components/groupsPage/groupsPage.jsx';
class GroupsPageContainer extends Component{
  
  componentDidMount(){

  }

  render(){
    return(
      <div className={'BCN-landingPage'}>
        <GroupsPage/>
      </div>
    );
  }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPageContainer);
