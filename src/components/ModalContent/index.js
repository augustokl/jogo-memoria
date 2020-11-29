import Button from 'components/Button';

const ModalContent = ({
  title,
  message = '',
  componentBody,
  buttonLabel,
  buttonAction,
}) => {
  return (
    <div className="modalContent">
      <h1 className="modalContent__title">{title}</h1>
      <div className="modalContent__body">
        {message && <p className="modalContent__body--message">{message}</p>}
        <form onSubmit={buttonAction} className="modalContent__body--form">
          {componentBody}
        </form>
      </div>
      <div className="modalContent__footer">
        <Button text={buttonLabel} action={buttonAction} />
      </div>
    </div>
  );
};

export default ModalContent;
