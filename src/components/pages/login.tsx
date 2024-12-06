import { FormEvent, useState } from 'react';
import logo from 'assets/images/todo-app-logo.svg';
import { Button } from 'components/ui/button';
import { TextField } from "components/ui/text_field";
import { Page } from "components/pages/base";
import { Heading, Text } from '@radix-ui/themes';


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
    <div className="flex">
      <div className="flex-1 flex items-center">
        <div className='flex flex-col gap-4 w-96 mx-auto'>
          <img src={logo} className="mx-auto" alt="logo" />
          <Text as="p" align="center">Don’t mamage tasks. Do it right now.</Text>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className='flex flex-col gap-6 w-96 mx-auto'>
          <Heading size="8">Sign In</Heading>
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
  setPage: (page: Page) => void,
  setLoginUserName: (userName: string) => void
};
export function LoginPage(props: LoginPageProps): React.JSX.Element {
  return (
    <>
      <LoginPageContent setPage={props.setPage} setLoginUserName={props.setLoginUserName} />
    </>
  );
}
