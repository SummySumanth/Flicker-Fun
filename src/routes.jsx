import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import Loadable from 'react-loadable';

import services from './services/flicker';

import TopBar from './components/topBar/topBar.jsx';
import SearchBar from './components/searchBar/searchBar.jsx';

import history from './routes/history';
import WelcomeScreen from './routes/WelcomeScreen.jsx';

import './styles/index.scss';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const GroupsPage = Loadable({
  loader: () => import('./routes/groupsPage/GroupsPageContainer.jsx'),
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
    return(
      <Router history={history} >
        {/*{ this.state.showModal ? <WelcomeScreen onModalClose={this.onModalClose} /> : <div></div> }*/}

        <TopBar>
           <div></div>
           <SearchBar/>
           <div>Show Stats</div>
        </TopBar>
        <Switch>
          <Route exact path='/' render={() => (    <Redirect to="/groups" />      )}/>
          <Route exact path='/groups' component={GroupsPage}/>
          <Route exact path='/*' render={() => (    <Redirect to="/groups" />      )}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;