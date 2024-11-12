import { useState } from 'react';
import { LoginPage } from './login';
import { TasksPage } from './tasks';

export type Page = "login" | "tasks"
export function PageBase(): React.JSX.Element {
  const [page, setPage] = useState<Page>("login");
  const [loginUserName, setLoginUserName] = useState("");

  return (
    page === "login" ?
      <LoginPage loginUserName={loginUserName} setPage={setPage} setLoginUserName={setLoginUserName} /> :
      <TasksPage loginUserName={loginUserName} />
  );
}
