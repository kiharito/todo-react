import { Layout } from "layout";
import { Login } from "login";
import { createContext, useState } from "react";
import { Tasks } from "tasks";

type Context = {
  loginUserName: string;
  setLoginUserName: (name: string) => void;
}

export const AppContext = createContext<Context>({ loginUserName: "", setLoginUserName: () => { } });

export function App() {
  const [loginUserName, setLoginUserName] = useState("");

  return (
    <AppContext.Provider value={{ loginUserName, setLoginUserName }}>
      <Layout>
        {loginUserName === "" ? <Login /> : <Tasks />}
      </Layout>
    </AppContext.Provider>
  )
}
