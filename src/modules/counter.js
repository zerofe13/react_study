const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ ttype: DECREASE });

const initialState = {
  number: 0,
};

function conuter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
export default conuter;
