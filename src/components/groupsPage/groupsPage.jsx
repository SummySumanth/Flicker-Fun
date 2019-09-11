import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import urlConstructor from '../../scripts/urlConstructor';

class GroupsPage extends Component{

  static propTypes = {

  }

  onClickHandler (direction) {
    this.props.onNavChange(direction);
  }

  getGroupCards = groups =>{
    //"this.onerror=null;this.src='https://picsum.photos/id/6/200/300';"
    return groups.map(item =>{
      return (
          <div key={item.nsid} className={'FF_groupcard'}>
            <img
              className={'FF_groupcard-icon'}
              src={urlConstructor.getBuddyIconUrl(item.nsid)}
              onError={(e)=>{e.target.onerror = null; e.target.src="https://placeimg.com/48/48/any"}}
            />
            <div className={'FF_groupcard-text-container'}>
              <div className={'FF_groupcard-name'}>{item.name}</div>
              <div className={'FF_groupcard-pool-count'}>{item.pool_count}</div>
            </div>
          </div>
      )
    });
  };

  render(){
    const {group, page, pages, perPage, total} = this.props;
    return(
      <div className={'FF_groupspage-component'}>
        <div className={'FF_groupsPage-groupsCards-container'}>
          { this.getGroupCards(group) }
        </div>
      </div>
    );
  }
}

export default withRouter(GroupsPage);
