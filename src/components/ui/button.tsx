type ButtonProps = { text: string }
export function Button(props: ButtonProps): React.JSX.Element {
  return (
    <button
      className="w-16 box-border border border-solid rounded font-bold shrink-0"
      type='submit'
    >{props.text}</button>
  );
}
