import logo from 'assets/images/todo-app-logo.svg';
import { Box, Button, Flex, Heading, Text, TextField, } from '@radix-ui/themes';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AppContext } from 'app';

export function Login() {
  const { loginUserName, setLoginUserName } = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    setLoginUserName(userName);
  }

  return (
    <>
      <Flex justify="between" align="center" height="3.5rem" px="1rem">
        <Box>
          <img src={logo} className="h-6" alt="logo" />
        </Box>
        <Text>{loginUserName}</Text>
      </Flex>

      <Flex>
        <Flex direction="column">
          <Box>
            <img src={logo} className="mx-auto" alt="logo" />
          </Box>
          <Text align="center">Don’t mamage tasks. Do it right now.</Text>
        </Flex>
        <Flex direction="column">
          <Heading size="8">Sign In</Heading>
          <form onSubmit={handleSubmit}>
            <Box>
              <Text as="label">User Name</Text>
              <TextField.Root value={userName} placeholder='Enter your name'
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
            </Box>
            <Box>
              <Text as="label">Password</Text>
              <TextField.Root value={password} placeholder='Enter password'
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </Box>
            <Button>Sign in</Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
