interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white "
    />
  );
};

export default Input;
