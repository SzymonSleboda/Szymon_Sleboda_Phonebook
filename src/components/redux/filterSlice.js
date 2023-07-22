import { createAction, createReducer } from '@reduxjs/toolkit';


export const setFilter = createAction('filter/setFilter');


const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});

export default filterReducer;