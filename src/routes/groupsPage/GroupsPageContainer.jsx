import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';

import groupsPageActions from '../../actions/groupsPage/groupsPageActions';
import '../../styles/groupsPage/groupsPage.scss'

import GroupsPage from '../../components/groupsPage/groupsPage.jsx';
import Modal from '../../components/common/modal.jsx';
class GroupsPageContainer extends Component{

  onGroupClickHandler = groupId =>{
    this.props.setSelectedGroupID(groupId);
    this.props.history.push(`${this.props.location.pathname}/gallery`);
  };

  getRandomColorHex() {
    var hex = "0123456789ABCDEF",
      color = "#";
    for (var i = 1; i <= 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getPieChart = groups =>{
    let data = groups.map(item =>item.pool_count);
    let colors = groups.map(item =>this.getRandomColorHex());
    let labels = groups.map(item => item.name);
    return(
      <Pie
        data={{
          labels : labels,
          datasets : [{
            data: data,
            backgroundColor: colors,
          }]
        }}
        options={{
          legend: {
            display: false,
          },
        }}
      />
    )
  };

  render(){
    const { groups, selectedGroupId, isFetching, showModal} = this.props.groupsPage;
    const { group, page, pages, perpage, total} = groups;
    return(
      <div className={'FF_groups_page_container'}>

        {
          (!isFetching && group) ?
            <Modal showModal={showModal} onCloseHandler={this.props.closeModal}>
              {this.getPieChart(group)}
            </Modal>
            :
            <div></div>
        }


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
  closeModal : () => dispatch(groupsPageActions.hideModal()),
  setSelectedGroupID : groupId => dispatch(groupsPageActions.setSelectedGroupID(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPageContainer);
