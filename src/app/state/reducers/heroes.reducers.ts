import { createReducer, on } from '@ngrx/store';
import { setMessage } from '../../state/actions/heroes.actions';

export interface AppState {
  message: string;
  messages: string[];
}

export const initialState: AppState = {
  message: '',
  messages: []
};

export const appReducer = createReducer(
  initialState,
  on(setMessage, (state, { message }) => ({
    ...state,
    message,
    messages: [...state.messages, message] 
  }))
);