import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action_types';
import { Action } from '../actions';

export const searchRepositories = (searchTerm: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search/${searchTerm}`
      );

      const names = data.objects.map((item: any) => {
        return item.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
