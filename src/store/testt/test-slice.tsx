import { createSlice } from '@reduxjs/toolkit';
import { getTestOperation } from './test-operation';
// import { IconSuccess, TextSuccess } from 'components/shared/toasts/Toasts';
// import { toast, ToastContainer} from 'react-toastify';

interface test {
  tt: string;
  ttt: string;
  tttt: string;
}

const initialState = {
  test: {
    t: 't',
  },
  isLoading: false,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getTestOperation.fulfilled, (state, action) => {
      state.test = action.payload !== undefined ? action.payload : state.test;
    });
  },
});

// export const {

// } = vouchersSlice.actions;
export default testSlice.reducer;
