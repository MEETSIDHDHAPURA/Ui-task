import { ToastContainer } from "react-toastify";

const Dialog = ({ open, children, className }) => {
  return (
    <>
    {/* this is my ToastContainer To show the Toast */}
      <ToastContainer position="top-center" draggable autoClose={2000} />
      {/* ill pass the children in dialog Box */}
      <dialog open={open} className={className}>
        {children}
      </dialog>
    </>
  );
};

export default Dialog;
