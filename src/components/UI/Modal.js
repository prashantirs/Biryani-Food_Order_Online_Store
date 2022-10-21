import './Modal.css';
import ReactDOM from 'react-dom';


const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.hide}></div>
}

const ModalOverlay = (props) => {
    return <div className="modal">
        <div className="content">{props.children}</div>
    </div>

}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<BackDrop hide={props.hide}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal