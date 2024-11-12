type ButtonProps = { text: string }
export function Button(props: ButtonProps): React.JSX.Element {
  return (
    <button
      className="w-fit h-12 box-border border border-solid rounded px-4 font-bold shrink-0"
      type='submit'
    >{props.text}</button>
  );
}
