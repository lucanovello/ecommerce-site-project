function ErrorBox(props) {
  return <div>{props.error || 'there is an error'}</div>;
}

export default ErrorBox;
