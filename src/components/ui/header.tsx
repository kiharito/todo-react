import logo from 'assets/images/todo-app-logo.svg';

export function Header({ username }: { username: string }): React.JSX.Element {
  return (
    <div className="flex justify-between h-14 items-center px-4">
      <img src={logo} className="h-6" alt="logo" />
      <p>{username}</p>
    </div>
  );
}
