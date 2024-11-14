import { Header } from 'components/ui/header';
import { useState } from 'react';
import { LoginPage } from './login';
import { TasksPage } from './tasks';

export type Page = "login" | "tasks"
export function PageBase(): React.JSX.Element {
  const [page, setPage] = useState<Page>("login");
  const [loginUserName, setLoginUserName] = useState("");

  return (
    <div className='grid grid-rows-[auto__1fr] w-full min-w-[840px] min-h-screen'>
      <Header username={loginUserName} />
      {page === "login" ?
        <LoginPage setPage={setPage} setLoginUserName={setLoginUserName} /> :
        <TasksPage />}
    </div>
  );
}
