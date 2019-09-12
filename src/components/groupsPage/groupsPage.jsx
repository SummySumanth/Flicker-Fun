import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import urlConstructor from '../../scripts/urlConstructor';
import Modal from '../common/modal.jsx';

class GroupsPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  onClickHandler (groupId) {
    this.props.onGroupClickHandler(groupId);
  }

  getGroupCards = groups =>{
    //"this.onerror=null;this.src='https://picsum.photos/id/6/200/300';"
    let cards = groups.map(item =>{
      return (
          <div key={item.nsid} className={'FF_groupcard'} onClick={() => this.onClickHandler(item.nsid)}>
            <img
              className={'FF_groupcard-icon'}
              src={urlConstructor.getBuddyIconUrl(item.nsid)}
              onError={(e)=>{e.target.onerror = null; e.target.src="https://fakeimg.pl/48x48/?text=:("}}
            />
            <div className={'FF_groupcard-text-container'}>
              <div className={'FF_groupcard-name'}>{item.name}</div>
              <div className={'FF_groupcard-pool-count'}>{item.pool_count} Photos</div>
            </div>
          </div>
      )
    });
    return cards;
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

export default GroupsPage;
