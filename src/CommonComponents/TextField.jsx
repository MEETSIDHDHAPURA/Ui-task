const TextField = ({
  placeholder,
  width,
  bgcolor,
  onChange,
  border,
  dark,
  value,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 ${bgcolor} ${width} outline-none border-2 ${border} rounded-md dark:bg-zinc dark:border-none dark:text-primary`}
    />
  );
};

export default TextField;
