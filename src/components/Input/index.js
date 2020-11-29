const Input = ({ value, setValue }) => (
  <input
    className="modalContent__body--input"
    placeholder="Nome"
    value={value}
    onChange={({ target }) => setValue(target.value)}
  />
);

export default Input;
