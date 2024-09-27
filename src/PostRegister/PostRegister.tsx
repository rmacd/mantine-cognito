import React from "react";
import { Paper, Title, Text, Container } from '@mantine/core';
import type { LoginStage } from '../Login';

import '../Base.css';

export interface PostRegisterProps {
  email?: string;
  setStage?: (stage: LoginStage) => void;
}
export const PostRegister = ({ email, setStage }: PostRegisterProps) => {
  return (
    <Container size={420} my={40}>
      <Title className={"centred"}>
        <Text>Registered!</Text>
      </Title>

      <Text c="dimmed" size="sm" className={"centred"} mt={5}>
        <Text span> Thank you for registering! </Text>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text size="sm">
          A validation email has been sent{email !== undefined && ` to ${email}`}.
        </Text>
        <Text span size="sm">
          Once you have validated
        </Text>{' '}
        <Text component={"button"} variant={"link"} size={"sm"} onClick={() => {
            setStage?.('login');
        }}>login</Text>{' '}
        <Text span size="sm">
          again.
        </Text>
      </Paper>
    </Container>
  );
};
