const TextField = ({
  placeholder,
  className,
  onChange,
  type,
  disabled,
  value,
}) => {
  return (
    // this is the common TextField
    // it has value,type,disabled,placeholder
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} p-2 outline-none border-2 rounded-md dark:bg-zinc dark:border-none dark:text-secondary`}
    />
  );
};

export default TextField;
