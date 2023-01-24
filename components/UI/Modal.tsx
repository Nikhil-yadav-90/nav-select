const Modal = (props: any) => {

    let modalStyle = {
        display:"block",
        backgroundColor:"rgba(0,0,0,0.8)"
    }
  return (
    <div className="modal show fade" style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={()=>props.closeHandler(false)}
            ></button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
