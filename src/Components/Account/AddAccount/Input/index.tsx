const Input = (props) => {
  const {
    label,
    autoFocus,
    name,
    type,
    disabled,
    required,
    value,
    handleChange,
    min,
    max,
    step
  } = props;
  return (
    <label>
      <div>{label}</div>
      <input
        autoFocus={autoFocus}
        disabled={disabled}
        required={required}
        value={value}
        onChange={(e) => {
          handleChange({ value: e.target.value, name: e.target.name });
        }}
        type={type}
        name={name}
        min={min}
        max={max}
        step={step}
      />
    </label>
  );
};

export default Input;
