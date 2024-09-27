import React from 'react';
import { Paper, Title, Text, Container, Anchor } from '@mantine/core';
import type { LoginStage } from '../Login';

import '../Base.css';

export interface PasswordResetFormProps {
  email?: string;
  setStage?: (stage: LoginStage) => void;
}

export const PasswordResetForm = ({ email, setStage }: PasswordResetFormProps) => {
  return (
    <Container size={420} my={40}>
      <Title className={"centred"}>
        <Text>Password Reset</Text>
      </Title>

      <Text c="dimmed" size="sm" className={"centred"} mt={5}>
        <Text span>The password{email !== undefined && ` for ${email}`} has been reset.</Text>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text span size="sm">
          Your password has been successfully reset, return to{' '}
        </Text>
        <Text component={"span"}
          size="sm"
          onClick={() => {
            setStage?.('login');
          }}
        >
          login
        </Text>{' '}
        <Text span size="sm">
          to continue.
        </Text>
      </Paper>
    </Container>
  );
};
