const Input = ({ value, setValue }) => (
  <input
    className="input"
    placeholder="Nome"
    value={value}
    onChange={({ target }) => setValue(target.value)}
  />
);

export default Input;
