import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import groupsPageActions from '../../actions/groupsPage/groupsPageActions';

import GroupsPage from '../../components/groupsPage/groupsPage.jsx';

class GroupsPageContainer extends Component{
  
  componentDidMount(){

  }

  onGroupClickHandler = () =>{

  };

  render(){
    console.log('Props at groups page', this.props);
    const { group, page, pages, perpage, total} = this.props.groupsPage.groups;
    return(
      <div className={'BCN-landingPage'}>
        <GroupsPage
          group={group}
          page={page}
          pages={pages}
          perPage={perpage}
          total={total}

          onGroupClickHandler={this.onGroupClickHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  groupsPage: state.groupsPage
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPageContainer);
