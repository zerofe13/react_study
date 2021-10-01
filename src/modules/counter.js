import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };

// [acion.type] :(state,action)
const counter = handleActions(
  {
    [INCREASE]: (state) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);
export default counter;
