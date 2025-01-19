import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '', // Начальное значение фильтра
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions; // Экспортируем правильный экшен
export default filtersSlice.reducer;


