import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import history from './routes/history';
import WelcomeScreen from './routes/WelcomeScreen';
import Loadable from 'react-loadable';

 import './styles/index.scss';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LandingPage = Loadable({
  loader: () => import('./routes/landingPage/LandingPageContainer.jsx'),
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
        { this.state.showModal ? <WelcomeScreen onModalClose={this.onModalClose} /> : <div></div> }
        <BreadCrumbNav/>
        <Switch>
          <Route exact path='/' render={() => (    <Redirect to="/home" />      )}/>
          <Route exact path='/home' component={LandingPage}/>
          <Route exact path='/*' render={() => (    <Redirect to="/home" />      )}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;