import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

//TYPES OF ACTIONS IN THE FORM OF STRING
export const ADD_TUTORIAL = '[TUTORIAL] ADD';
export const REMOVE_TUTORIAL = "[TUTORIAL] REMOVE";


//creating class for ADD action. passing payload into the constructor if data will be used
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    //here passing payload as a number, as we will use index(integer) to delete/remove
    constructor(public payload: number) {}
}

//exporting all action classes for use within our reducer.
export type Actions = AddTutorial | RemoveTutorial;