import logo from 'assets/images/todo-app-logo.svg';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import { PropsWithChildren, useContext } from 'react';
import { AppContext } from 'app';

export function Layout(props: PropsWithChildren) {
  const { loginUserName } = useContext(AppContext);

  return (
    <Grid columns="1" rows="56px 1fr" height="100vh" width="100%" minWidth="980px">
      <Flex justify="between" align="center" px="4">
        <Box>
          <img src={logo} className="h-6" alt="logo" />
        </Box>
        <Text>{loginUserName}</Text>
      </Flex>
      {props.children}
    </Grid>
  );
}
