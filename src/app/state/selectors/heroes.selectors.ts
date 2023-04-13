import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../state/app.state';

export const getMessage = createSelector(
  createFeatureSelector<AppState>('app'),
  (state: AppState) => state.message
);