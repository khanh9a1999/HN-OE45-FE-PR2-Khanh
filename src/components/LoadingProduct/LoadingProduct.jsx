import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './LoadingProduct.module.sass'

export default function LoadingProduct() {
  return (
    <div className={styles['loading']}>
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  );
}
