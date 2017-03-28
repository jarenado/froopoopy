import React from 'react';

class Modal extends React.Component {

  closeModal(e) {
    console.log(e.currentTarget);
  }

  render() {
    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <dialog id="mdl-dialog" className="mdl-dialog">
        <div className="bar">
          <button id="demo-menu-lower-left"
                  className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">more_vert</i>
          </button>

        </div>
        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
            htmlFor="demo-menu-lower-left">
          <li className="mdl-menu__item">Some Action</li>
          <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
          <li disabled className="mdl-menu__item">Disabled Action</li>
          <li className="mdl-menu__item">Yet Another Action</li>
        </ul>

        <div className="">{this.props.children}</div>
        <p><button onClick={this.closeModal.bind(this)}>Close</button></p>
      </dialog>
    ) 
  }
}

export default Modal
