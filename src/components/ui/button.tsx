type ButtonProps = { text: string }
export function Button(props: ButtonProps): React.JSX.Element {
  return (
    <button
      className="w-fit h-12 box-border border border-solid border-[#0797B9] rounded px-4 font-bold shrink-0 text-[#0797B9] hover:border-[#0D3C48] hover:text-[#0D3C48]"
      type='submit'
    >{props.text}</button>
  );
}
