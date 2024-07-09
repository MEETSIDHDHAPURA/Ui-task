import { ToastContainer } from "react-toastify";

const Dialog = ({ open, children, className }) => {
  return (
    <>
      <ToastContainer position="top-center" draggable autoClose={2000} />
      <dialog open={open} className={className}>
        {children}
      </dialog>
    </>
  );
};

export default Dialog;
