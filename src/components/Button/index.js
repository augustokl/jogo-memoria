const Button = ({ text, action }) => (
  <button type="submit" onClick={action} className="btn btn--modal">
    {text}
  </button>
);

export default Button;
