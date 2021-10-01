import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USER = 'sample/GET_USER';
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'sample/GET_USER_FAILURE';

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, paylode: response.data });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      paylode: e,
      error: true,
    });
    throw e;
  }
};
export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const response = await api.getUsers();
    dispatch({ type: GET_USER_SUCCESS, paylode: response.data });
  } catch (e) {
    dispatch({
      type: GET_USER_FAILURE,
      paylode: e,
      error: true,
    });
    throw e;
  }
};

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.paylode,
    }),
    [GET_POST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_USER]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: true,
      },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
      users: action.paylode,
    }),
    [GET_USER_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
    }),
  },
  initialState
);

export default sample;
