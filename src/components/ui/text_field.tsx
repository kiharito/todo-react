import { ChangeEvent } from 'react';

type TextFieldProps = {
  text: string,
  placeholder: string,
  onChange: (val: string) => void,
};
export function TextField(props: TextFieldProps): React.JSX.Element {
  return (
    <input
      className='box-border border border-solid rounded h-12 w-full p-3'
      value={props.text}
      onChange={(e: ChangeEvent<HTMLInputElement>): void => props.onChange(e.target.value)}
      placeholder={props.placeholder} />
  );
}
