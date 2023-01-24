import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export const Main: React.FC = () => {
  return (
    <>
      <h1>Main Page</h1>
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' component={Link} to='/Demo'>デモ画面</Button>
      </Stack>
    </>
  );
}