import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getTestOperation = createAsyncThunk<any, any, any>(`api/vouchers`, async (_, thunkAPI) => {
  try {
    return 'data';
  } catch (error: any) {
    console.error(error.message);
  }
});

export { getTestOperation };
