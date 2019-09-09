import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { rightArrow } from '../assets/images/common/';
import { react, redux, reduxLogger, reduxThunk, webpack, sass, github,running, man, linkedin, es6} from '../assets/images/welcomePage/';
import '../styles/welcomeScreen/welcomeScreen.scss';

class WelcomeScreen extends Component{

  getTechsUsed = () => {
    const tech = [
      {
        name: 'React',
        image: react,
        version: 'V 16.9.0'
      },
      {
        name: 'Redux',
        image: redux,
        version: 'V 4.0.4'
      },
      {
        name: 'Redux Logger',
        image: reduxLogger,
        version: 'V 3.0.6'
      },
      {
        name: 'Redux Thunk',
        image: reduxThunk,
        version: 'V 2.3.0'
      },
      {
        name: 'Webpack',
        image: webpack,
        version: 'V 4.39.2'
      },
      {
        name: 'Sass',
        image: sass,
        version: ''
      },
      {
        name: 'ES6',
        image: es6,
        version: ''
      },
    ];

    return tech.map(item =>{
      return (
        <div key={item.name} className={'TechUsedContainer'}>
          <div className={'TechUsedImage'} style={{ backgroundImage: `url('${item.image}')`}}>
          </div>
          <div className={'TechUsedTextContainer'}>
            <div className={'TechUsedText'}>{item.name}</div>
            <div className={'TechUsedTextVersion'}>{item.version}</div>
          </div>
        </div>
      )
    });
  };


  getProjectLinks = () => {
    const Links = [
      {
        name: 'Github/FlickerFun',
        image: github,
        url: 'https://github.com/SummySumanth/Flicker-Fun'
      },
      {
        name: 'View Resume',
        image: man,
        url: 'https://drive.google.com/file/d/15NLPJRtuUdQ_I0YoKjeNBX7J0TRDMlX0/view'
      },
      {
        name: 'LinkedIn',
        image: linkedin,
        url: 'https://www.linkedin.com/in/sumanthba/'
      },
    ];

    return Links.map(item =>{
      return (
          <div key={item.name} className={'TechUsedContainerLinks'} onClick={() => window.open(item.url, '_blank')}>
            <div className={'TechUsedImage'} style={{ backgroundImage: `url('${item.image}')`}}>
            </div>
            <div className={'TechUsedTextContainer'}>
              <div className={'TechUsedText'}>{item.name}</div>
            </div>
          </div>
      )
    });
  }

  render(){
    return(
      <div className={'WelcomeScreen'}>
        <div className={'ModalContainer'}>
            <div className={'ContentHolder'}>
                <h1 style={{marginBottom: '10px'}}>Welcome to Flicker Fun Project !</h1>
                <p className={'ModalSubHeader'}>This project is to demonstrate the use of Flicker Api and show the result in masonry layout style and to implement lazy loading, frontend routing, code splitting and so on for better optimisation of performance without compromising the user experience!</p>
                <div className={'divider'} />

                <div className={'ModalBody'}>

                  <p className={'ModalBody-header'}>What's used in this project :</p>
                  <div className={'TechBlock'}>
                    <div className={'TechBlock-container'}>
                      {this.getTechsUsed()}
                    </div>
                  </div>

                  <p className={'ModalBody-header'}>Project & Profile Links :</p>
                  <div className={'TechBlock'}>
                    <div className={'TechBlock-container'}>
                      {this.getProjectLinks()}
                    </div>
                  </div>

                  <p className={'ModalBody-header'}>Few pointers about this project :</p>
                  <div className={'TechBlock'}>
                    <div className={'TechBlock-container'} style={{ justifyContent: 'flex-start', padding: '10px 30px', textAlign: 'left'}}>
                      <ul>
                        <li style={{padding: '6px 0px'}}>This project was built from scratch, using personally built boilerplate. No create-react-app used !</li>
                        <li style={{padding: '6px 0px'}}>Lazing loading of images for performance optimisation and cost reduction !</li>
                        <li style={{padding: '6px 0px'}}>Code splitting in order to make the static script files light weight and load only on need!</li>
                        <li style={{padding: '6px 0px'}}>No css frameworks used, all the styles and animations are handwritten !</li>
                      </ul>
                    </div>
                  </div>

                </div>
            </div>
          <div className={'divider'} />
          <div className={'modalCloseBtn'} onClick={this.props.onModalClose}>LET'S GO !</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  breadCrumbNav : state.breadcrumbNav,
});

const mapDispatchToProps = dispatch => ({
  // updateBreadCrumb : past => dispatch(breadCrumbActions.update),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WelcomeScreen));

