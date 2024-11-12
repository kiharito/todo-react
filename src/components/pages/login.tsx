import { FormEvent, useState } from 'react';
import logo from 'assets/images/todo-app-logo.svg';
import { Button } from 'components/ui/button';
import { Header } from "components/ui/header"
import { TextField } from "components/ui/text_field";
import { Page } from "components/pages/base";


type LoginPageContentProps = {
  setPage: (page: Page) => void,
  setLoginUserName: (userName: string) => void
};
function LoginPageContent(props: LoginPageContentProps): React.JSX.Element {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    props.setPage("tasks");
    props.setLoginUserName(userName);
  }

  return (
    <div className="flex flex-1">
      <div className="flex-1 flex items-center">
        <div className='flex flex-col gap-4 w-96 mx-auto'>
          <img src={logo} className="mx-auto" alt="logo" />
          <p className="text-center">Don’t mamage tasks. Do it right now.</p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-96 mx-auto flex flex-col gap-6">
          <h1 className="text-5xl">Sign In</h1>
          <form className="flex flex-col gap-6" onSubmit={(e: FormEvent) => handleSubmit(e)}>
            <dl className="flex flex-col gap-3">
              <dt>User Name</dt>
              <dd>
                <TextField text={userName} onChange={setUserName} placeholder="Enter your name" />
              </dd>
            </dl>
            <dl className="flex flex-col gap-3">
              <dt>Password</dt>
              <dd>
                <TextField text={password} onChange={setPassword} placeholder="Enter password" />
              </dd>
            </dl>
            <Button text='Sign in' />
          </form>
        </div>
      </div>
    </div>
  );
}

type LoginPageProps = {
  loginUserName: string, setPage: (page: Page) => void,
  setLoginUserName: (userName: string) => void
};
export function LoginPage(props: LoginPageProps): React.JSX.Element {
  return (
    <>
      <div className="h-screen flex flex-col" >
        <Header username={props.loginUserName} />
        <LoginPageContent setPage={props.setPage} setLoginUserName={props.setLoginUserName} />
      </div>
    </>
  );
}
