import logo from 'assets/images/todo-app-logo.svg';
import { Box, Button, Flex, Grid, Heading, Text, TextField, } from '@radix-ui/themes';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AppContext } from 'app';

export function Login() {
  const { setLoginUserName } = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    setLoginUserName(userName);
  }

  return (
    <Grid columns="2">
      <Flex align="center" justify="center">
        <Flex direction="column" gap="4">
          <Box>
            <img src={logo} className="w-[460px]" alt="logo" />
          </Box>
          <Text align="center" size="6">Don’t mamage tasks. Do it right now.</Text>
        </Flex>
      </Flex>

      <Flex align="center" justify="center">
        <Flex direction="column" gap="5">
          <Heading size="9" weight="medium">Sign In</Heading>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2" width="380px">
                <Text as="label">User Name</Text>
                <TextField.Root value={userName} placeholder='Enter your name' size="3"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
              </Flex>
              <Flex direction="column" gap="2" width="380px">
                <Text as="label">Password</Text>
                <TextField.Root value={password} placeholder='Enter password' size="3" type="password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
              </Flex>
              <Box width="84px">
                <Button size="3" variant='outline'>Sign in</Button>
              </Box>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Grid>
  );
}
