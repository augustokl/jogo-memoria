const ButtonModal = ({ text, type, action }) => (
  <button type="button" onClick={action} className={`btn btn--modal ${type}`}>
    {text}
  </button>
);

export default ButtonModal;
