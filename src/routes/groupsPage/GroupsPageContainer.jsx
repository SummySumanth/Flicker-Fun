import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import groupsPageActions from '../../actions/groupsPage/groupsPageActions';
import '../../styles/groupsPage/groupsPage.scss'

import GroupsPage from '../../components/groupsPage/groupsPage.jsx';

class GroupsPageContainer extends Component{
  
  componentDidMount(){

  }

  onGroupClickHandler = () =>{

  };

  render(){
    console.log('Props at groups page', this.props);
    const { groups, selectedGroupId, isFetching} = this.props.groupsPage;
    const { group, page, pages, perpage, total} = groups;
    return(
      <div className={'FF_groups_page_container'}>
        {
          (!group && !isFetching) ? <div className={'dummyWelcomePage'}>Welcome ! start typing in searchbox to show Flickr groups</div> : <div></div>
        }

        {
          isFetching ? <div className={'dummyWelcomePage'}>Loading</div> : <div></div>
        }

        {
          (!isFetching && group) ?
            <GroupsPage
              group={group}
              page={page}
              pages={pages}
              perPage={perpage}
              total={total}

              onGroupClickHandler={this.onGroupClickHandler}
            />
            :
            <div></div>
        }

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
