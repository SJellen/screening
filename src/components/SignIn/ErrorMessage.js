function ErrorMessage(props) {
  return (
    <div className="error-message">
      <span>{props.message}</span>
      <button onClick={props.clearError} className="error-button">
        X
      </button>
    </div>
  );
}

export default ErrorMessage;
