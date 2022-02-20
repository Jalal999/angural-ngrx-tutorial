//A reducer is what takes the incoming action and 
//decides what to do with it. It takes the previous state and returns a new state based on the given action. 

import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

//we're defining an initial or default state. This isn't required if you don't want to define a state right out of the box.
const initialState: Tutorial = {
    name: 'Initial State',
    url: 'http://google.com'
}

//This is our actual reducer. It takes in a state, which we're defining as a Tutorial type 
//and we've optionally bound it to initialState. It also takes in the action from our /actions/tutorial.actions file.
export function reducer(state: Tutorial[] = [initialState], action: Action) {
    const tutorialAction = action as TutorialActions.Actions; 
    //First, we use a switch to determine the type of action. In the case of adding a tutorial, 
    //we return the new state with the help of our newState() function. 
    //We're simply passing in the previous state in the first parameter, and then our action in the second.

    //In the event that the action.type does not match any cases, 
    //it will simply return the state, as provided in the first parameter of our reducer.
    switch(tutorialAction.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, tutorialAction.payload];

        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(tutorialAction.payload, 1);
            return state;
        default:
            return state;
    }
}