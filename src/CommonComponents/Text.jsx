
const Text = ({ className, children }) => {
  // ill pass the children
  // use can anything pass in the children
  return <p className={className}>{children}</p>;
};

export default Text;
