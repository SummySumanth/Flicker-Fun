import React,{ Component } from 'react';
import classNames from 'classnames';

import '../../styles/components/modal.scss';
class Modal extends Component{

  render(){
    const { showModal, } = this.props;
    const customClassNames = classNames({'FF_common_modal_hide' : !showModal}, 'FF_common_modal',)
    return(
      <div className={customClassNames} onClick={this.props.onCloseHandler}>
        <div className={'FF_graphTitle'}>Click anywhere to close</div>
        <div className={'FF_graphContainer'}>
          {this.props.children}
        </div>
      </div>
    )


  }
}

export default Modal;