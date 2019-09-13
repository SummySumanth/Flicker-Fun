import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import yall from 'yall-js';

import history from './routes/history';
import WelcomeScreen from './routes/WelcomeScreen.jsx';

import TopBar from './components/topBar/topBar.jsx';
import SearchBar from './components/searchBar/searchBar.jsx';

import groupPageActions from './actions/groupsPage/groupsPageActions';


import './styles/index.scss';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const GroupsPage = Loadable({
  loader: () => import('./routes/groupsPage/GroupsPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const GalleryPage = Loadable({
  loader: () => import('./routes/galleryPage/GalleryPageContainer.jsx'),
  loading: MyLoadingComponent,
});

class Routes extends Component{

  constructor(props){
    super(props);
    this.state = {
      showModal : true
    };
  }

  onModalClose = () =>{
    this.setState({
      showModal : false
    })
  };

  render(){
    const {groups, isfetching } = this.props.groupsPage;
    return(
      <Router history={history} >
        {/*{ this.state.showModal ? <WelcomeScreen onModalClose={this.onModalClose} /> : <div></div> }*/}

        <TopBar>
           <div></div>
           <SearchBar/>
          {
            ( Object.keys(groups).length > 0 && !isfetching)
              ?
              <div
                className={'FF_showStats-btn'}
                onClick={this.props.openModal}
              >
                Show Stats
              </div>
              :
              <div />
          }

        </TopBar>

        <Switch >
          <Route exact path='/' render={() => (    <Redirect to="/groups" />      )}/>
          <Route exact path='/groups' component={GroupsPage}/>
          <Route exact path='/groups/gallery' component={GalleryPage}/>
          <Route path='/*' render={() => (    <Redirect to="/groups" />      )}/>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state =>({
  groupsPage : state.groupsPage
});

const mapDispatchToProps = dispatch =>({
  openModal : () => dispatch(groupPageActions.showModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(Routes);