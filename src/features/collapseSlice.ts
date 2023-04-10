import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpenState {
  open: Boolean;
}

const initialState: OpenState = {
  open: false
};

export const collapseSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    open: (state) => {
      state.open = !state.open;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { open } = collapseSlice.actions;

export default collapseSlice.reducer;