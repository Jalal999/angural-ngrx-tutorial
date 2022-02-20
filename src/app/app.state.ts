//We will import this file within the components that we wish to access ngrx.

import { Tutorial } from '../models/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}